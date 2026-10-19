"use client";
import { useState } from "react";
import { getRandomQuestions } from "@/data/questions";
import Link from "next/link";

type Level = 1 | 2 | 3;
type Phase = "menu" | "playing" | "result";

const LEVEL_LABELS: Record<Level, string> = {
  1: "Débutant",
  2: "Confirmé",
  3: "Expert",
};
const LEVEL_COLORS: Record<Level, string> = {
  1: "from-green-600 to-green-800",
  2: "from-amber-600 to-amber-800",
  3: "from-red-700 to-red-900",
};
const QUESTIONS_COUNT = 8;

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [level, setLevel] = useState<Level>(1);
  const [questions, setQuestions] = useState<ReturnType<typeof getRandomQuestions>>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<{ correct: boolean; selected: number; answer: number }[]>([]);

  function startGame(l: Level) {
    const qs = getRandomQuestions(l, QUESTIONS_COUNT);
    setLevel(l);
    setQuestions(qs);
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setHistory([]);
    setPhase("playing");
  }

  function handleAnswer(idx: number) {
    if (answered) return;
    const correct = idx === questions[current].answer;
    setSelected(idx);
    setAnswered(true);
    if (correct) setScore(s => s + 1);
    setHistory(h => [...h, { correct, selected: idx, answer: questions[current].answer }]);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setPhase("result");
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  if (phase === "menu") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <Link href="/jeux" className="text-amber-700 hover:text-amber-900 text-sm mb-6 inline-block">← Retour aux jeux</Link>
        <div className="text-5xl mb-4">❓</div>
        <h1 className="font-serif text-3xl font-bold text-amber-900 mb-2">Quiz classique</h1>
        <p className="text-amber-700 mb-8">{QUESTIONS_COUNT} questions sur les saints et l'Église du Voide.</p>
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-4">Choisissez votre niveau</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {([1, 2, 3] as Level[]).map(l => (
            <button
              key={l}
              onClick={() => startGame(l)}
              className={`flex-1 flex flex-col items-center gap-2 bg-gradient-to-br ${LEVEL_COLORS[l]} text-white rounded-2xl p-6 hover:opacity-90 hover:-translate-y-1 transition-all shadow`}
            >
              <span className="text-3xl">{l === 1 ? "🌱" : l === 2 ? "🌿" : "🌳"}</span>
              <span className="font-serif font-bold text-xl">{LEVEL_LABELS[l]}</span>
              <span className="text-white/80 text-sm">
                {l === 1 ? "Questions simples" : l === 2 ? "Questions intermédiaires" : "Questions difficiles"}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "playing") {
    const q = questions[current];
    const progress = ((current) / questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Barre de progression */}
        <div className="flex items-center justify-between mb-2 text-sm text-amber-700">
          <span>Question {current + 1} / {questions.length}</span>
          <span>Score : {score} / {current + (answered ? 1 : 0)}</span>
        </div>
        <div className="w-full h-2 bg-amber-100 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-amber-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white border border-amber-200 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs rounded-full px-2 py-1">
              {LEVEL_LABELS[level]} · {q.category}
            </span>
          </div>
          <p className="font-serif text-xl font-bold text-amber-900 leading-relaxed">{q.question}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {q.options.map((opt, i) => {
            let cls = "border-2 rounded-xl px-4 py-3 text-left transition-all font-medium ";
            if (!answered) {
              cls += "border-amber-200 bg-amber-50 hover:border-amber-500 hover:bg-amber-100 cursor-pointer text-amber-900";
            } else if (i === q.answer) {
              cls += "border-green-500 bg-green-50 text-green-800";
            } else if (i === selected && i !== q.answer) {
              cls += "border-red-400 bg-red-50 text-red-700";
            } else {
              cls += "border-amber-100 bg-amber-50 text-amber-400";
            }
            return (
              <button key={i} onClick={() => handleAnswer(i)} className={cls} disabled={answered}>
                <span className="mr-2">{answered && i === q.answer ? "✅" : answered && i === selected ? "❌" : `${String.fromCharCode(65 + i)}.`}</span>
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-4">
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>💡 {selected === q.answer ? "Bravo !" : "Dommage !"}</strong> {q.explanation}
            </p>
          </div>
        )}

        {answered && (
          <button
            onClick={next}
            className="w-full bg-amber-800 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors"
          >
            {current + 1 < questions.length ? "Question suivante →" : "Voir mes résultats"}
          </button>
        )}
      </div>
    );
  }

  // Résultats
  const pct = Math.round((score / questions.length) * 100);
  const msg =
    pct === 100 ? "Parfait ! Vous êtes un expert des saints ! 🏆" :
    pct >= 75 ? "Excellent ! Vous connaissez très bien nos saints ! 🌟" :
    pct >= 50 ? "Bien ! Continuez à découvrir les saints. 🌿" :
    "Courage ! Parcourez les fiches des saints pour en apprendre plus. 📖";

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-center">
      <div className="text-6xl mb-4">{pct === 100 ? "🏆" : pct >= 75 ? "⭐" : pct >= 50 ? "😊" : "📖"}</div>
      <h2 className="font-serif text-3xl font-bold text-amber-900 mb-2">Résultats</h2>
      <p className="text-amber-700 mb-1">Niveau : {LEVEL_LABELS[level]}</p>
      <div className="text-5xl font-bold text-amber-800 my-4">{score} / {questions.length}</div>
      <p className="text-amber-700 text-lg mb-6">{msg}</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => startGame(level)}
          className="bg-amber-800 text-white font-bold px-6 py-3 rounded-full hover:bg-amber-700 transition-colors"
        >
          🔄 Rejouer au même niveau
        </button>
        <button
          onClick={() => setPhase("menu")}
          className="bg-amber-100 text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-200 transition-colors"
        >
          Changer de niveau
        </button>
        <Link
          href="/saints"
          className="bg-white border border-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors"
        >
          Revoir les saints →
        </Link>
      </div>
    </div>
  );
}
