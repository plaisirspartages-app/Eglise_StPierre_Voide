import { saints, getSaintBySlug } from "@/data/saints";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return saints.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const saint = getSaintBySlug(slug);
  if (!saint) return {};
  return {
    title: `${saint.name} — Église du Voide`,
    description: saint.subtitle,
  };
}

export default async function SaintPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const saint = getSaintBySlug(slug);
  if (!saint) notFound();

  const idx = saints.findIndex(s => s.slug === slug);
  const prev = saints[idx - 1];
  const next = saints[idx + 1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/saints" className="text-amber-700 hover:text-amber-900 text-sm mb-6 inline-flex items-center gap-1">
        ← Tous les saints
      </Link>

      {/* En-tête */}
      <div className={`rounded-3xl bg-gradient-to-br ${saint.color} text-white mb-8 overflow-hidden`}>
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={saint.image}
            alt={saint.name}
            fill
            className="object-cover"
            unoptimized={saint.image.startsWith("http")}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-1 drop-shadow">{saint.name}</h1>
            <p className="text-white/90 text-base drop-shadow">{saint.subtitle}</p>
          </div>
        </div>
        <div className="px-6 py-3 flex flex-wrap gap-2 items-center">
          <span className="bg-white/20 rounded-full px-3 py-1 text-sm">🗓 {saint.feastDate}</span>
          <span className="text-white/50 text-xs ml-auto italic">{saint.imageCredit}</span>
        </div>
      </div>

      {/* Patronages */}
      <section className="mb-6">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">Patron(e) de…</h2>
        <div className="flex flex-wrap gap-2">
          {saint.patronOf.map(p => (
            <span key={p} className="bg-amber-100 text-amber-800 border border-amber-300 rounded-full px-3 py-1 text-sm">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Biographie */}
      <section className="mb-6 bg-white rounded-2xl border border-amber-200 p-6">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">Biographie</h2>
        <p className="text-amber-900 leading-relaxed">{saint.bio}</p>
      </section>

      {/* Le saviez-vous ? */}
      <section className="mb-6">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">Le saviez-vous ?</h2>
        <ul className="space-y-3">
          {saint.funFacts.map((fact, i) => (
            <li key={i} className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4">
              <span className="text-amber-600 font-bold mt-0.5">✦</span>
              <span className="text-amber-900 text-sm leading-relaxed">{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Symbole */}
      <section className="mb-6">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-2">Symbole</h2>
        <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          {saint.emoji} {saint.symbol}
        </p>
      </section>

      {/* Prière */}
      <section className="mb-8 bg-gradient-to-br from-amber-800 to-amber-900 text-white rounded-2xl p-6">
        <h2 className="font-serif text-xl font-bold mb-3">Prière</h2>
        <blockquote className="italic leading-relaxed text-amber-100 border-l-4 border-amber-500 pl-4">
          {saint.prayer}
        </blockquote>
      </section>

      {/* Navigation entre saints */}
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link href={`/saints/${prev.slug}`} className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-4 hover:border-amber-400 transition-colors text-left">
            <div className="text-xs text-amber-600 mb-1">← Précédent</div>
            <div className="font-serif font-bold text-amber-900 text-sm">{prev.emoji} {prev.name}</div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link href={`/saints/${next.slug}`} className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-4 hover:border-amber-400 transition-colors text-right">
            <div className="text-xs text-amber-600 mb-1">Suivant →</div>
            <div className="font-serif font-bold text-amber-900 text-sm">{next.name} {next.emoji}</div>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
