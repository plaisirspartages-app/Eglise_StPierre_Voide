import Link from "next/link";
import { Saint } from "@/data/saints";

interface Props {
  saint: Saint;
  compact?: boolean;
}

export default function SaintCard({ saint, compact = false }: Props) {
  if (compact) {
    return (
      <Link
        href={`/saints/${saint.slug}`}
        className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all text-center"
      >
        <span className="text-4xl">{saint.emoji}</span>
        <h3 className="font-serif font-bold text-amber-900 text-sm leading-tight group-hover:text-amber-700 transition-colors">
          {saint.name}
        </h3>
        <p className="text-xs text-amber-700 line-clamp-2">{saint.subtitle}</p>
      </Link>
    );
  }

  return (
    <Link
      href={`/saints/${saint.slug}`}
      className={`group relative flex flex-col gap-3 p-5 rounded-2xl bg-gradient-to-br ${saint.color} text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden`}
    >
      <div className="absolute top-0 right-0 text-6xl opacity-10 select-none pointer-events-none p-2">
        {saint.emoji}
      </div>
      <span className="text-3xl">{saint.emoji}</span>
      <div>
        <h3 className="font-serif font-bold text-lg leading-tight">{saint.name}</h3>
        <p className="text-sm text-white/80 mt-0.5">{saint.subtitle}</p>
      </div>
      <div className="mt-auto pt-2 border-t border-white/20">
        <p className="text-xs text-white/70">Fête : {saint.feastDate.split("•")[0].trim()}</p>
      </div>
    </Link>
  );
}
