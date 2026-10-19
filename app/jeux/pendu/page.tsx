"use client";
import { useState } from "react";
import Link from "next/link";
import { saints } from "@/data/saints";

const MAX_ERRORS = 6;

const HANGMAN_STAGES = [
  // 0 erreurs
  `  +---+
  |   |
      |
      |
      |
      |
=========`,
  // 1 erreur
  `  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  // 2 erreurs
  `  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  // 3 erreurs
  `  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  // 4 erreurs
  `  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  // 5 erreurs
  `  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  // 6 erreurs
  `  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

function pickSaint() {
  return saints[Math.floor(Math.random() * saints.length)];
}

function normalizeChar(c: string): string {
  return c.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export default function PenduPage() {
  const [saint, setSaint] = useState(saints[0]);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [started, setStarted] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);

  const nameToGuess = saint.name.toUpperCase();
  const letters = nameToGuess.split("").filter(c => c !== " " && c !== "-" && c !== "'" && c !== ".");
  const uniqueLetters = [...new Set(letters.map(c => normalizeChar(c)))];

  const errors = [...guessed].filter(c => !uniqueLetters.includes(c)).length;
  const won = uniqueLetters.every(c => guessed.has(c));
  const lost = errors >= MAX_ERRORS;

  function guess(letter: string) {
    if (won || lost) return;
    setGuessed(prev => new Set([...prev, normalizeChar(letter)]));
  }

  function restart() {
    setSaint(pickSaint());
    setGuessed(new Set());
    setStarted(true);
    setHintUsed(false);
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <Link href="/jeux" className="text-amber-700 hover:text-amber-900 text-sm mb-6 inline-block">← Retour aux jeux</Link>
        <div className="text-5xl mb-4">🔤</div>
        <h1 className="font-serif text-3xl font-bold text-amber-900 mb-2">Le Pendu des Saints</h1>
        <p className="text-amber-700 mb-8 max-w-md mx-auto">
          Devinez le nom d'un saint de l'église du Voide lettre par lettre.
          Vous avez <strong>6 erreurs</strong> maximum. Un indice est disponible si vous bloquez !
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-left max-w-sm mx-auto">
          <h2 className="font-serif font-bold text-amber-900 mb-2">Règles</h2>
          <ul className="text-amber-800 text-sm space-y-1">
            <li>✦ Cliquez sur une lettre pour la proposer</li>
            <li>✦ Les espaces, tirets et apostrophes sont donnés</li>
            <li>✦ Les accents ne comptent pas (É = E)</li>
            <li>✦ 6 erreurs = perdu !</li>
          </ul>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="bg-green-700 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg"
        >
          🔤 Commencer !
        </button>
      </div>
    );
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <Link href="/jeux" className="text-amber-700 text-sm">← Jeux</Link>
        <button onClick={restart} className="text-amber-700 text-sm hover:text-amber-900">🔄 Nouveau mot</button>
      </div>

      {/* Dessin du pendu */}
      <div className="bg-white border border-amber-200 rounded-2xl p-4 mb-4 text-center">
        <pre className="font-mono text-amber-900 text-sm leading-tight inline-block text-left">
          {HANGMAN_STAGES[errors]}
        </pre>
        <div className="text-sm text-amber-600 mt-2">{errors} / {MAX_ERRORS} erreurs</div>
      </div>

      {/* Mot à deviner */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {nameToGuess.split("").map((char, i) => {
          if (char === " ") return <div key={i} className="w-4" />;
          if (char === "-" || char === "'" || char === ".") {
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-bold text-amber-900">{char}</span>
                <div className="w-6 h-0.5 bg-amber-300" />
              </div>
            );
          }
          const normalized = normalizeChar(char);
          const revealed = guessed.has(normalized) || won;
          return (
            <div key={i} className="flex flex-col items-center w-7">
              <span className={`text-xl font-bold ${revealed ? "text-amber-900" : "text-transparent"}`}>
                {char}
              </span>
              <div className="w-full h-0.5 bg-amber-400" />
            </div>
          );
        })}
      </div>

      {/* Indice */}
      {!hintUsed && !won && !lost && (
        <div className="text-center mb-4">
          <button
            onClick={() => setHintUsed(true)}
            className="text-sm text-amber-700 underline hover:text-amber-900"
          >
            💡 Utiliser un indice
          </button>
        </div>
      )}
      {hintUsed && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 mb-4 text-center text-sm text-amber-800">
          <strong>Indice :</strong> {saint.emoji} {saint.subtitle}
        </div>
      )}

      {/* Victoire / Défaite */}
      {(won || lost) && (
        <div className={`rounded-2xl p-5 mb-4 text-center ${won ? "bg-green-50 border border-green-300" : "bg-red-50 border border-red-300"}`}>
          {won ? (
            <>
              <div className="text-4xl mb-2">🎉</div>
              <p className="font-bold text-green-800 text-lg">Bravo ! C'était bien <em>{saint.name}</em> !</p>
              <p className="text-green-700 text-sm mt-1">{saint.emoji} {saint.subtitle}</p>
            </>
          ) : (
            <>
              <div className="text-4xl mb-2">😢</div>
              <p className="font-bold text-red-800 text-lg">Perdu ! C'était : <em>{saint.name}</em></p>
              <p className="text-red-700 text-sm mt-1">{saint.emoji} {saint.subtitle}</p>
            </>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <button onClick={restart} className="bg-green-700 text-white font-bold px-5 py-2 rounded-full hover:bg-green-600 transition-colors text-sm">
              🔄 Autre saint
            </button>
            <Link href={`/saints/${saint.slug}`} className="bg-amber-100 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-amber-200 transition-colors text-sm">
              Découvrir {saint.name} →
            </Link>
          </div>
        </div>
      )}

      {/* Clavier */}
      {!won && !lost && (
        <div className="flex flex-wrap justify-center gap-2">
          {alphabet.split("").map(letter => {
            const norm = normalizeChar(letter);
            const isGuessed = guessed.has(norm);
            const isCorrect = isGuessed && uniqueLetters.includes(norm);
            const isWrong = isGuessed && !uniqueLetters.includes(norm);
            return (
              <button
                key={letter}
                onClick={() => guess(letter)}
                disabled={isGuessed}
                className={`w-9 h-9 rounded-lg font-bold text-sm transition-all ${
                  isCorrect ? "bg-green-500 text-white cursor-default" :
                  isWrong ? "bg-red-300 text-red-800 cursor-default opacity-50" :
                  "bg-amber-100 text-amber-900 hover:bg-amber-300 border border-amber-300"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
