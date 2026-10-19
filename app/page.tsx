import Link from "next/link";
import { saints } from "@/data/saints";
import SaintCard from "@/components/SaintCard";

export default function Home() {
  const featured = saints.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-900 to-amber-800 text-white text-center py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-4">✝</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3">
            Église Saint-Pierre
          </h1>
          <p className="text-amber-200 text-xl mb-1">du Voide — 49310</p>
          <p className="text-amber-300 mt-4 text-lg max-w-xl mx-auto">
            Découvrez les saints qui veillent sur notre paroisse et testez vos connaissances avec nos jeux.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/saints"
              className="bg-white text-amber-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-100 transition-colors shadow"
            >
              🙏 Découvrir les Saints
            </Link>
            <Link
              href="/jeux"
              className="bg-amber-700 border border-amber-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-600 transition-colors shadow"
            >
              🎮 Jouer & Apprendre
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-amber-900 mb-3">
            Bienvenue sur le site de notre église
          </h2>
          <p className="text-amber-800 leading-relaxed max-w-2xl mx-auto">
            L'église Saint-Pierre du Voide est un lieu de foi ancré dans la commune du Voide,
            aujourd'hui intégrée à Lys-Haut-Layon (Maine-et-Loire). Ce site vous invite à
            découvrir les saints qui ornent notre église à travers leurs histoires et leur message,
            et à jouer pour en apprendre davantage sur notre foi.
          </p>
        </div>
      </section>

      {/* Saints en vedette */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <h2 className="font-serif text-2xl font-bold text-amber-900 mb-6 text-center">
          Quelques saints de notre église
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {featured.map(saint => (
            <SaintCard key={saint.slug} saint={saint} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-block bg-amber-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-700 transition-colors shadow"
          >
            Voir tous les {saints.length} saints →
          </Link>
        </div>
      </section>

      {/* Jeux */}
      <section className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Jeux & Quiz</h2>
          <p className="text-amber-200 mb-8">
            Quatre jeux pour apprendre en s'amusant — seul ou contre la machine !
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: "❓", label: "Quiz classique", desc: "3 niveaux", href: "/jeux/quiz" },
              { emoji: "⚔️", label: "Contre la machine", desc: "Duel de questions", href: "/jeux/contre-machine" },
              { emoji: "🃏", label: "Memory", desc: "Retrouvez les paires", href: "/jeux/memoire" },
              { emoji: "🔤", label: "Pendu", desc: "Devinez le saint", href: "/jeux/pendu" },
            ].map(jeu => (
              <Link
                key={jeu.href}
                href={jeu.href}
                className="flex flex-col items-center gap-2 bg-amber-800 hover:bg-amber-700 rounded-xl p-4 transition-colors"
              >
                <span className="text-3xl">{jeu.emoji}</span>
                <span className="font-bold text-sm">{jeu.label}</span>
                <span className="text-amber-300 text-xs">{jeu.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
