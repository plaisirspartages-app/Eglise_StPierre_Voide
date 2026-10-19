"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { saints } from "@/data/saints";

interface Card {
  id: string;
  saintSlug: string;
  type: "emoji" | "name";
  content: string;
  matched: boolean;
  flipped: boolean;
}

function buildDeck(count = 8): Card[] {
  const pool = [...saints].sort(() => Math.random() - 0.5).slice(0, count);
  const cards: Card[] = [];
  pool.forEach(saint => {
    cards.push({
      id: `${saint.slug}-emoji`,
      saintSlug: saint.slug,
      type: "emoji",
      content: saint.emoji,
      matched: false,
      flipped: false,
    });
    cards.push({
      id: `${saint.slug}-name`,
      saintSlug: saint.slug,
      type: "name",
      content: saint.name,
      matched: false,
      flipped: false,
    });
  });
  return cards.sort(() => Math.random() - 0.5);
}

export default function MemoirePage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [started, setStarted] = useState(false);
  const [pairCount, setPairCount] = useState(8);

  function startGame(pairs: number) {
    setPairCount(pairs);
    const deck = buildDeck(pairs);
    setCards(deck);
    setFlipped([]);
    setMoves(0);
    setWon(false);
    setStarted(true);
  }

  function handleFlip(id: string) {
    if (flipped.length === 2) return;
    const card = cards.find(c => c.id === id);
    if (!card || card.matched || card.flipped) return;

    const newFlipped = [...flipped, id];
    setCards(prev => prev.map(c => c.id === id ? { ...c, flipped: true } : c));
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newFlipped.map(fid => cards.find(c => c.id === fid)!);
      if (a.saintSlug === b.saintSlug) {
        // Match !
        setTimeout(() => {
          setCards(prev => {
            const next = prev.map(c =>
              c.saintSlug === a.saintSlug ? { ...c, matched: true, flipped: true } : c
            );
            if (next.every(c => c.matched)) setWon(true);
            return next;
          });
          setFlipped([]);
        }, 600);
      } else {
        // Pas de match
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            newFlipped.includes(c.id) ? { ...c, flipped: false } : c
          ));
          setFlipped([]);
        }, 1000);
      }
    }
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <Link href="/jeux" className="text-amber-700 hover:text-amber-900 text-sm mb-6 inline-block">← Retour aux jeux</Link>
        <div className="text-5xl mb-4">🃏</div>
        <h1 className="font-serif text-3xl font-bold text-amber-900 mb-2">Jeu de Memory</h1>
        <p className="text-amber-700 mb-8">
          Retournez les cartes et associez chaque saint à son symbole.<br />
          Deux cartes identiques au même saint font une paire !
        </p>
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-4">Nombre de paires</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { pairs: 6, label: "Facile", desc: "6 paires (12 cartes)", emoji: "🌱" },
            { pairs: 8, label: "Normal", desc: "8 paires (16 cartes)", emoji: "🌿" },
            { pairs: 13, label: "Difficile", desc: "13 paires (26 cartes)", emoji: "🌳" },
          ].map(({ pairs, label, desc, emoji }) => (
            <button
              key={pairs}
              onClick={() => startGame(pairs)}
              className="flex-1 flex flex-col items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white rounded-2xl p-5 transition-all shadow"
            >
              <span className="text-3xl">{emoji}</span>
              <span className="font-bold">{label}</span>
              <span className="text-sm text-blue-200">{desc}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (won) {
    const rating = moves <= pairCount + 2 ? "🏆 Excellent !" : moves <= pairCount * 2 ? "⭐ Bien !" : "😊 Pas mal !";
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="font-serif text-3xl font-bold text-amber-900 mb-2">Bravo !</h2>
        <p className="text-amber-700 mb-2">Vous avez trouvé toutes les paires en <strong>{moves} coups</strong>.</p>
        <p className="text-2xl mb-8">{rating}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => startGame(pairCount)} className="bg-blue-700 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            🔄 Rejouer
          </button>
          <button onClick={() => setStarted(false)} className="bg-amber-100 text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-200 transition-colors">
            Changer de difficulté
          </button>
          <Link href="/jeux" className="bg-white border border-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">
            ← Autres jeux
          </Link>
        </div>
      </div>
    );
  }

  const matchedCount = cards.filter(c => c.matched).length / 2;
  const cols = pairCount <= 6 ? "grid-cols-4" : pairCount <= 8 ? "grid-cols-4" : "grid-cols-5 sm:grid-cols-6";

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <Link href="/jeux" className="text-amber-700 text-sm">← Jeux</Link>
        <div className="flex gap-4 text-sm text-amber-700">
          <span>Paires : {matchedCount} / {pairCount}</span>
          <span>Coups : {moves}</span>
        </div>
        <button onClick={() => startGame(pairCount)} className="text-amber-700 text-sm hover:text-amber-900">
          🔄 Recommencer
        </button>
      </div>

      <div className={`grid ${cols} gap-2 sm:gap-3`}>
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleFlip(card.id)}
            disabled={card.matched || card.flipped}
            className={`aspect-square rounded-xl border-2 transition-all font-medium text-xs sm:text-sm flex items-center justify-center p-1 ${
              card.matched
                ? "border-green-400 bg-green-50 text-green-700"
                : card.flipped
                ? "border-blue-400 bg-blue-50 text-blue-800"
                : "border-amber-300 bg-amber-100 hover:border-amber-500 hover:bg-amber-200 cursor-pointer"
            }`}
          >
            {card.flipped || card.matched ? (
              <span className={`${card.type === "emoji" ? "text-3xl sm:text-4xl" : "text-center leading-tight"}`}>
                {card.content}
              </span>
            ) : (
              <span className="text-2xl text-amber-400">✝</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
