import Link from "next/link";
import Image from "next/image";
import { saints } from "@/data/saints";
import SaintCard from "@/components/SaintCard";

const jeux = [
  {
    emoji: "❓",
    label: "Quiz classique",
    desc: "3 niveaux de difficulté",
    href: "/jeux/quiz",
    color: "bg-amber-700 hover:bg-amber-600",
  },
  {
    emoji: "⚔️",
    label: "Contre la machine",
    desc: "Duel de vitesse",
    href: "/jeux/contre-machine",
    color: "bg-red-800 hover:bg-red-700",
  },
  {
    emoji: "🃏",
    label: "Jeu de Memory",
    desc: "Trouvez les paires",
    href: "/jeux/memoire",
    color: "bg-blue-800 hover:bg-blue-700",
  },
  {
    emoji: "🔤",
    label: "Le Pendu",
    desc: "Devinez le saint",
    href: "/jeux/pendu",
    color: "bg-violet-800 hover:bg-violet-700",
  },
];

export default function Home() {
  const featured = saints.slice(0, 6);

  return (
    <div className="bg-white">

      {/* ── HERO plein écran ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        <Image
          src="/eglise-voide.jpg"
          alt="Église Saint-Pierre du Voide"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(15,42,26,0.55) 0%, rgba(27,61,42,0.82) 100%)" }}
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-24">
          <p className="text-green-300 text-xs tracking-[0.35rem] uppercase mb-5 font-medium">
            Paroisse · 49310 Maine-et-Loire
          </p>

          <h1
            className="font-serif font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            Église Saint-Pierre<br />
            <span style={{ color: "#a3d9b1" }}>du Voide</span>
          </h1>

          <p className="text-white/75 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Découvrez les saints qui veillent sur notre paroisse
            et testez vos connaissances avec nos jeux.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/saints"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl text-sm"
              style={{ background: "#a3d9b1", color: "#0e2a1a" }}
            >
              🙏 Découvrir les Saints
            </Link>
            <Link
              href="/jeux"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border transition-all hover:-translate-y-0.5 text-sm"
              style={{ borderColor: "rgba(163,217,177,0.5)", color: "#d1fae5", background: "rgba(255,255,255,0.08)" }}
            >
              🎮 Jouer &amp; Apprendre
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-8 bg-white/60" />
          <span className="text-white/60 text-xs tracking-widest uppercase">Découvrir</span>
        </div>
      </section>

      {/* ── STATS flottantes ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: "13", label: "Saints" },
            { n: "4",  label: "Jeux" },
            { n: "36", label: "Questions" },
            { n: "3",  label: "Niveaux" },
          ].map(s => (
            <div
              key={s.label}
              className="bg-white rounded-2xl shadow-lg text-center py-4 px-2"
              style={{ boxShadow: "0 8px 32px rgba(27,61,42,0.12)" }}
            >
              <div className="font-serif font-bold text-2xl" style={{ color: "#1b3d2a" }}>{s.n}</div>
              <div className="text-xs text-gray-400 mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PITCH 3 COLONNES ─────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-3" style={{ color: "#1b3d2a" }}>
            Bienvenue
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            L'église Saint-Pierre du Voide, intégrée à la commune de Lys-Haut-Layon,
            vous ouvre ses portes numériques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: "🕍",
              title: "Notre église",
              text: "Dédiée à Saint Pierre, apôtre et premier pape, un joyau du patrimoine de Maine-et-Loire.",
              href: null,
            },
            {
              icon: "🙏",
              title: "Les Saints",
              text: "13 figures sacrées — de Jeanne d'Arc à sainte Thérèse — avec biographies, patronages et prières.",
              href: "/saints",
            },
            {
              icon: "🎮",
              title: "Jeux & Quiz",
              text: "4 jeux pour petits et grands : Quiz, duel, Memory et Pendu. Apprenez en vous amusant !",
              href: "/jeux",
            },
          ].map(col => (
            <div key={col.title} className="flex flex-col items-start gap-3">
              <span className="text-4xl">{col.icon}</span>
              <h3 className="font-serif font-bold text-lg" style={{ color: "#1b3d2a" }}>{col.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{col.text}</p>
              {col.href && (
                <Link
                  href={col.href}
                  className="text-sm font-medium mt-auto transition-colors"
                  style={{ color: "#3a6e49" }}
                >
                  En savoir plus →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SAINTS EN VEDETTE ────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "#f7faf8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.3rem] uppercase mb-1 font-medium" style={{ color: "#3a6e49" }}>À la une</p>
              <h2 className="font-serif text-2xl font-bold" style={{ color: "#1b3d2a" }}>
                Quelques saints
              </h2>
            </div>
            <Link
              href="/saints"
              className="text-sm font-medium transition-colors hidden sm:block"
              style={{ color: "#3a6e49" }}
            >
              Voir les {saints.length} saints →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {featured.map(saint => (
              <SaintCard key={saint.slug} saint={saint} compact />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link
              href="/saints"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-full text-sm"
              style={{ background: "#1b3d2a", color: "#fff" }}
            >
              Voir les {saints.length} saints →
            </Link>
          </div>
        </div>
      </section>

      {/* ── JEUX ─────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #0e2a1a 0%, #1b3d2a 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-green-400 text-xs tracking-[0.3rem] uppercase mb-2 font-medium">Apprendre en jouant</p>
            <h2 className="font-serif text-3xl font-bold text-white">Jeux &amp; Quiz</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {jeux.map(jeu => (
              <Link
                key={jeu.href}
                href={jeu.href}
                className={`group flex items-center gap-4 ${jeu.color} text-white rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="text-4xl shrink-0">{jeu.emoji}</span>
                <div>
                  <p className="font-semibold text-base">{jeu.label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{jeu.desc}</p>
                </div>
                <span className="ml-auto text-white/30 group-hover:text-white transition-colors">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/jeux"
              className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors text-sm font-medium"
            >
              Voir tous les jeux →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif mb-6 italic leading-relaxed" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", color: "#2d4a36" }}>
            « Tu es Pierre, et sur cette pierre je bâtirai mon Église,
            et les portes de l'Hadès ne tiendront pas contre elle. »
          </p>
          <p className="text-gray-400 text-sm tracking-wide">Matthieu 16, 18</p>
        </div>
      </section>

    </div>
  );
}
