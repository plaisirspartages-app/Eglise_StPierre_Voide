"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { getAllQuestions, Question } from "@/data/questions";
import Link from "next/link";

type Phase = "menu" | "playing" | "result";
type Turn = "player" | "machine" | "none";

const TOTAL_ROUNDS = 10;
const MACHINE_MIN_MS = 1200;
const MACHINE_MAX_MS = 3500;

function getMachineDelay(difficulty: number): number {
  // difficulty 1 = lent, 3 = rapide
  const max = difficulty === 1 ? 3500 : difficulty === 2 ? 2500 : 1400;
  const min = difficulty === 1 ? 2000 : difficulty === 2 ? 1400 : MACHINE_MIN_MS;
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function ContreMachinePage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [difficulty, setDifficulty] = useState(2);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [round, setRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [machineAnswer, setMachineAnswer] = useState<number | null>(null);
  const [winner, setWinner] = useState<Turn>("none");
  const [roundOver, setRoundOver] = useState(false);
  const [machineThinking, setMachineThinking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const machineTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const endRound = useCallback((playerSel: number | null, machineSel: number, q: Question) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (machineTimerRef.current) clearTimeout(machineTimerRef.current);
    setMachineAnswer(machineSel);
    setRoundOver(true);
    setMachineThinking(false);

    const playerCorrect = playerSel === q.answer;
    const machineCorrect = machineSel === q.answer;

    if (playerCorrect && !machineCorrect) {
      setWinner("player");
      setPlayerScore(s => s + 1);
    } else if (!playerCorrect && machineCorrect) {
      setWinner("machine");
      setMachineScore(s => s + 1);
    } else if (playerCorrect && machineCorrect) {
      setWinner("none"); // égalité
    } else {
      setWinner("none");
    }
  }, []);

  function startGame() {
    const qs = getAllQuestions().slice(0, TOTAL_ROUNDS);
    setQuestions(qs);
    setRound(0);
    setPlayerScore(0);
    setMachineScore(0);
    setSelected(null);
    setMachineAnswer(null);
    setWinner("none");
    setRoundOver(false);
    setPhase("playing");
  }

  // Lance la manche courante
  useEffect(() => {
    if (phase !== "playing" || round >= questions.length) return;
    setSelected(null);
    setMachineAnswer(null);
    setWinner("none");
    setRoundOver(false);
    setTimeLeft(10);
    setMachineThinking(true);

    const q = questions[round];

    // Timer joueur
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    // Machine choisit après un délai aléatoire
    const delay = getMachineDelay(difficulty);
    machineTimerRef.current = setTimeout(() => {
      // Machine répond correctement selon difficulté
      const correctRate = difficulty === 1 ? 0.55 : difficulty === 2 ? 0.72 : 0.88;
      const machineChoice = Math.random() < correctRate
        ? q.answer
        : (q.answer + 1 + Math.floor(Math.random() * (q.options.length - 1))) % q.options.length;
      // Si le joueur n'a pas encore répondu, la machine gagne la vitesse
      setSelected(prev => {
        endRound(prev, machineChoice, q);
        return prev;
      });
    }, delay);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (machineTimerRef.current) clearTimeout(machineTimerRef.current);
    };
  }, [phase, round, questions, difficulty, endRound]);

  // Timeout joueur (temps = 0)
  useEffect(() => {
    if (timeLeft === 0 && !roundOver && phase === "playing" && round < questions.length) {
      const q = questions[round];
      const correctRate = difficulty === 1 ? 0.55 : difficulty === 2 ? 0.72 : 0.88;
      const machineChoice = Math.random() < correctRate
        ? q.answer
        : (q.answer + 1 + Math.floor(Math.random() * (q.options.length - 1))) % q.options.length;
      endRound(null, machineChoice, q);
    }
  }, [timeLeft, roundOver, phase, round, questions, difficulty, endRound]);

  function handlePlayerAnswer(idx: number) {
    if (roundOver || selected !== null) return;
    if (machineTimerRef.current) clearTimeout(machineTimerRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    setSelected(idx);
    const q = questions[round];
    const correctRate = difficulty === 1 ? 0.55 : difficulty === 2 ? 0.72 : 0.88;
    const machineChoice = Math.random() < correctRate
      ? q.answer
      : (q.answer + 1 + Math.floor(Math.random() * (q.options.length - 1))) % q.options.length;
    endRound(idx, machineChoice, q);
  }

  function nextRound() {
    if (round + 1 >= questions.length) {
      setPhase("result");
    } else {
      setRound(r => r + 1);
    }
  }

  if (phase === "menu") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <Link href="/jeux" className="text-amber-700 hover:text-amber-900 text-sm mb-6 inline-block">← Retour aux jeux</Link>
        <div className="text-5xl mb-4">⚔️</div>
        <h1 className="font-serif text-3xl font-bold text-amber-900 mb-2">Contre la machine</h1>
        <p className="text-amber-700 mb-8">
          Duel en {TOTAL_ROUNDS} manches ! Répondez avant la machine pour marquer un point.<br />
          Vous avez 10 secondes par question.
        </p>
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-4">Niveau de la machine</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {[
            { d: 1, label: "Novice", desc: "Lente et peu précise", emoji: "🐢" },
            { d: 2, label: "Abbé", desc: "Vitesse normale", emoji: "📖" },
            { d: 3, label: "Évêque", desc: "Rapide et précise", emoji: "⚡" },
          ].map(({ d, label, desc, emoji }) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`flex-1 flex flex-col items-center gap-2 rounded-2xl p-5 border-2 transition-all ${
                difficulty === d
                  ? "border-amber-600 bg-amber-100 text-amber-900"
                  : "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-400"
              }`}
            >
              <span className="text-3xl">{emoji}</span>
              <span className="font-bold">{label}</span>
              <span className="text-sm opacity-80">{desc}</span>
            </button>
          ))}
        </div>
        <button
          onClick={startGame}
          className="bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-red-600 transition-colors shadow-lg"
        >
          ⚔️ Commencer le duel !
        </button>
      </div>
    );
  }

  if (phase === "playing" && round < questions.length) {
    const q = questions[round];
    const timerPct = (timeLeft / 10) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Tableau des scores */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-center bg-blue-50 border border-blue-200 rounded-xl px-6 py-3">
            <div className="text-xs text-blue-600 mb-1">Vous</div>
            <div className="font-bold text-2xl text-blue-800">{playerScore}</div>
          </div>
          <div className="text-center">
            <div className="text-amber-600 text-sm">Manche {round + 1} / {TOTAL_ROUNDS}</div>
            <div className="font-serif font-bold text-amber-900">⚔️</div>
          </div>
          <div className="text-center bg-red-50 border border-red-200 rounded-xl px-6 py-3">
            <div className="text-xs text-red-600 mb-1">Machine</div>
            <div className="font-bold text-2xl text-red-800">{machineScore}</div>
          </div>
        </div>

        {/* Timer */}
        <div className="w-full h-2 bg-amber-100 rounded-full mb-1 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${timeLeft <= 3 ? "bg-red-500" : "bg-amber-600"}`}
            style={{ width: `${timerPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-amber-600 mb-4">
          <span>{machineThinking && !roundOver ? "🤖 La machine réfléchit…" : ""}</span>
          <span>{!roundOver ? `⏱ ${timeLeft}s` : ""}</span>
        </div>

        {/* Question */}
        <div className="bg-white border border-amber-200 rounded-2xl p-6 mb-4">
          <p className="font-serif text-xl font-bold text-amber-900">{q.question}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {q.options.map((opt, i) => {
            let cls = "border-2 rounded-xl px-4 py-3 text-left transition-all font-medium text-sm ";
            if (!roundOver) {
              cls += "border-amber-200 bg-amber-50 hover:border-amber-500 hover:bg-amber-100 cursor-pointer text-amber-900";
            } else {
              if (i === q.answer) {
                cls += "border-green-500 bg-green-50 text-green-800";
              } else if (i === selected && i !== q.answer) {
                cls += "border-red-400 bg-red-50 text-red-700";
              } else if (i === machineAnswer && i !== q.answer) {
                cls += "border-orange-400 bg-orange-50 text-orange-700";
              } else {
                cls += "border-amber-100 bg-amber-50 text-amber-400";
              }
            }
            return (
              <button key={i} onClick={() => handlePlayerAnswer(i)} className={cls} disabled={roundOver}>
                {roundOver && i === selected && i !== q.answer && "❌ Vous — "}
                {roundOver && i === machineAnswer && i !== q.answer && "🤖 Machine — "}
                {roundOver && i === q.answer && "✅ "}
                {opt}
              </button>
            );
          })}
        </div>

        {/* Résultat de la manche */}
        {roundOver && (
          <div className={`rounded-xl p-4 mb-4 text-center font-bold ${
            winner === "player" ? "bg-blue-100 text-blue-800 border border-blue-300" :
            winner === "machine" ? "bg-red-100 text-red-800 border border-red-300" :
            "bg-amber-100 text-amber-800 border border-amber-300"
          }`}>
            {winner === "player" && "🎉 Point pour vous !"}
            {winner === "machine" && "🤖 Point pour la machine !"}
            {winner === "none" && (selected === q.answer ? "🤝 Égalité — vous aviez tous les deux juste !" : "😮 Personne n'a eu juste !")}
          </div>
        )}

        {roundOver && (
          <button
            onClick={nextRound}
            className="w-full bg-amber-800 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors"
          >
            {round + 1 < TOTAL_ROUNDS ? "Manche suivante →" : "Voir le résultat final"}
          </button>
        )}
      </div>
    );
  }

  // Résultats finaux
  const playerWon = playerScore > machineScore;
  const draw = playerScore === machineScore;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-center">
      <div className="text-6xl mb-4">{draw ? "🤝" : playerWon ? "🏆" : "🤖"}</div>
      <h2 className="font-serif text-3xl font-bold text-amber-900 mb-4">Duel terminé !</h2>
      <div className="flex justify-center gap-8 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6">
          <div className="text-3xl mb-1">👤</div>
          <div className="font-bold text-4xl text-blue-800">{playerScore}</div>
          <div className="text-blue-600 text-sm mt-1">Vous</div>
        </div>
        <div className="flex items-center text-amber-400 font-bold text-2xl">vs</div>
        <div className="bg-red-50 border border-red-200 rounded-2xl px-8 py-6">
          <div className="text-3xl mb-1">🤖</div>
          <div className="font-bold text-4xl text-red-800">{machineScore}</div>
          <div className="text-red-600 text-sm mt-1">Machine</div>
        </div>
      </div>
      <p className="text-lg font-semibold text-amber-800 mb-8">
        {draw ? "Égalité parfaite !" : playerWon ? "Bravo, vous avez battu la machine !" : "La machine a gagné… remontez la prochaine fois !"}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={startGame} className="bg-red-700 text-white font-bold px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
          ⚔️ Rejouer
        </button>
        <Link href="/jeux" className="bg-amber-100 text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-200 transition-colors">
          ← Autres jeux
        </Link>
      </div>
    </div>
  );
}
