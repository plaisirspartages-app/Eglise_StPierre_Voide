import Link from "next/link";

export const metadata = {
  title: "Jeux & Quiz — Église du Voide",
  description: "4 jeux pour apprendre en s'amusant sur les saints et l'Église.",
};

const jeux = [
  {
    emoji: "❓",
    title: "Quiz classique",
    desc: "Répondez à des questions sur les saints et l'Église. Choisissez votre niveau : Débutant, Confirmé ou Expert !",
    href: "/jeux/quiz",
    color: "from-amber-600 to-amber-800",
    tags: ["3 niveaux", "Questions à choix multiples", "Score et explications"],
  },
  {
    emoji: "⚔️",
    title: "Contre la machine",
    desc: "Duel de vitesse ! Répondez plus vite que l'ordinateur pour marquer des points. Qui connaît le mieux les saints ?",
    href: "/jeux/contre-machine",
    color: "from-red-700 to-red-900",
    tags: ["Joueur vs CPU", "Vitesse & précision", "10 manches"],
  },
  {
    emoji: "🃏",
    title: "Jeu de Memory",
    desc: "Retournez les cartes pour associer chaque saint à son symbole. Entraînez votre mémoire !",
    href: "/jeux/memoire",
    color: "from-blue-600 to-blue-900",
    tags: ["Cartes à retourner", "Paires à trouver", "Pour tous âges"],
  },
  {
    emoji: "🔤",
    title: "Le Pendu",
    desc: "Devinez le nom d'un saint lettre par lettre. Un indice vous aide à trouver de qui il s'agit !",
    href: "/jeux/pendu",
    color: "from-green-700 to-green-900",
    tags: ["Nom à trouver", "6 vies", "Avec indices"],
  },
];

export default function JeuxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl font-bold text-amber-900 mb-2">Jeux & Quiz</h1>
        <p className="text-amber-700 text-lg">Apprendre en s'amusant — sur les saints et l'Église du Voide</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {jeux.map(jeu => (
          <Link
            key={jeu.href}
            href={jeu.href}
            className={`group flex flex-col gap-4 rounded-2xl bg-gradient-to-br ${jeu.color} text-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all`}
          >
            <div className="text-5xl">{jeu.emoji}</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">{jeu.title}</h2>
              <p className="text-white/80 text-sm leading-relaxed">{jeu.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {jeu.tags.map(tag => (
                <span key={tag} className="bg-white/20 rounded-full text-xs px-3 py-1">{tag}</span>
              ))}
            </div>
            <div className="text-white/60 text-sm group-hover:text-white transition-colors">
              Jouer →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
        <p className="text-amber-800 text-sm">
          Tous les jeux portent sur les saints de l'église du Voide et la foi catholique.
          Parfait pour les catéchismes, les familles et toute la paroisse !
        </p>
      </div>
    </div>
  );
}
