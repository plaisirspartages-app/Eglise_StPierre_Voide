import Link from "next/link";
import Image from "next/image";
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
        className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all text-center overflow-hidden"
      >
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-amber-100">
          <Image
            src={saint.image}
            alt={saint.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={saint.image.startsWith("http")}
          />
        </div>
        <h3 className="font-serif font-bold text-amber-900 text-xs leading-tight group-hover:text-amber-700 transition-colors line-clamp-2">
          {saint.name}
        </h3>
      </Link>
    );
  }

  return (
    <Link
      href={`/saints/${saint.slug}`}
      className={`group relative flex flex-col rounded-2xl bg-gradient-to-br ${saint.color} text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={saint.image}
          alt={saint.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized={saint.image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Texte sur l'image */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="font-serif font-bold text-sm leading-tight">{saint.name}</h3>
        <p className="text-xs text-white/70 mt-0.5 line-clamp-1">{saint.feastDate.split("•")[0].trim()}</p>
      </div>
    </Link>
  );
}
