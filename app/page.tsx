import Link from "next/link";
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
    color: "bg-green-800 hover:bg-green-700",
  },
];

export default function Home() {
  const featured = saints.slice(0, 6);

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative text-white text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #5c2e00 0%, #7c3a00 40%, #4a1a00 100%)",
          minHeight: "480px",
        }}
      >
        {/* Motif de fond */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none select-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Bordure dorée supérieure */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

        <div className="relative max-w-3xl mx-auto px-4 py-20">
          {/* Ornement haut */}
          <p className="text-amber-400 text-2xl tracking-[1rem] mb-6 select-none">✦ ✦ ✦</p>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-3 leading-tight" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            Église<br />
            <span style={{ color: "#f0c060" }}>Saint-Pierre</span>
          </h1>

          <p className="text-amber-200 text-xl mt-3 mb-1 tracking-widest uppercase text-sm">
            du Voide — 49310 · Maine-et-Loire
          </p>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg, transparent, #d4a843)" }} />
            <span className="text-amber-400 text-xl">✝</span>
            <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />
          </div>

          <p className="text-amber-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Découvrez les saints qui veillent sur notre paroisse
            et testez vos connaissances avec nos jeux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/saints"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
              style={{ background: "#d4a843", color: "#3d1a00" }}
            >
              🙏 Découvrir les Saints
            </Link>
            <Link
              href="/jeux"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full border-2 border-amber-400 text-amber-100 hover:bg-amber-400/20 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              🎮 Jouer & Apprendre
            </Link>
          </div>
        </div>

        {/* Bordure dorée inférieure */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ background: "#d4a843" }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8 text-amber-900">
          {[
            { n: "13", label: "Saints" },
            { n: "4",  label: "Jeux" },
            { n: "36", label: "Questions" },
            { n: "3",  label: "Niveaux" },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl">{s.n}</span>
              <span className="text-amber-800 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRÉSENTATION 3 COLONNES ──────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-amber-900 mb-2">
            Bienvenue sur notre site
          </h2>
          <p className="text-amber-700 max-w-xl mx-auto">
            L'église Saint-Pierre du Voide, intégrée à la commune de Lys-Haut-Layon, vous ouvre ses portes numériques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🕍",
              title: "Notre église",
              text: "Dédiée à Saint Pierre, apôtre et premier pape, l'église du Voide est un joyau du patrimoine de Maine-et-Loire, construite sur les fondations d'un édifice plus ancien.",
            },
            {
              icon: "🙏",
              title: "Les Saints",
              text: "Découvrez 13 figures sacrées — de Jeanne d'Arc à sainte Thérèse de Lisieux — avec leurs biographies, patronages, anecdotes et prières.",
            },
            {
              icon: "🎮",
              title: "Jeux & Quiz",
              text: "4 jeux ludiques pour petits et grands : Quiz, duel Contre la machine, Memory et Pendu. Apprenez en vous amusant !",
            },
          ].map(col => (
            <div
              key={col.title}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-amber-200 bg-amber-50"
            >
              <span className="text-5xl">{col.icon}</span>
              <h3 className="font-serif font-bold text-xl text-amber-900">{col.title}</h3>
              <p className="text-amber-800 text-sm leading-relaxed">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SAINTS EN VEDETTE ────────────────────────────────── */}
      <section className="py-12 px-4" style={{ background: "#fdf0dc" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-amber-600 text-xs tracking-[0.3rem] uppercase mb-2">À la une</p>
            <h2 className="font-serif text-3xl font-bold text-amber-900">
              Quelques saints de notre église
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {featured.map(saint => (
              <SaintCard key={saint.slug} saint={saint} compact />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/saints"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full shadow transition-all hover:-translate-y-0.5"
              style={{ background: "#7c3a00", color: "#fff" }}
            >
              Voir les {saints.length} saints →
            </Link>
          </div>
        </div>
      </section>

      {/* ── JEUX ─────────────────────────────────────────────── */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #4a1a00 0%, #5c2e00 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-xs tracking-[0.3rem] uppercase mb-2">Apprendre en jouant</p>
            <h2 className="font-serif text-3xl font-bold text-white mb-2">Jeux & Quiz</h2>
            <p className="text-amber-300">
              Pour toute la famille — seul ou contre la machine !
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {jeux.map(jeu => (
              <Link
                key={jeu.href}
                href={jeu.href}
                className={`group flex items-center gap-5 ${jeu.color} text-white rounded-2xl p-5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="text-5xl shrink-0">{jeu.emoji}</span>
                <div>
                  <p className="font-serif font-bold text-xl">{jeu.label}</p>
                  <p className="text-white/70 text-sm mt-0.5">{jeu.desc}</p>
                </div>
                <span className="ml-auto text-white/40 group-hover:text-white transition-colors text-xl">→</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/jeux"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors text-sm"
            >
              Voir tous les jeux →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────── */}
      <section className="py-12 px-4 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-amber-400 text-4xl mb-4 select-none">"</p>
          <blockquote className="font-serif text-xl text-amber-900 italic leading-relaxed mb-4">
            Tu es Pierre, et sur cette pierre je bâtirai mon Église,
            et les portes de l'Hadès ne tiendront pas contre elle.
          </blockquote>
          <p className="text-amber-600 text-sm">— Matthieu 16, 18</p>
        </div>
      </section>

    </div>
  );
}
