import { saints } from "@/data/saints";
import SaintCard from "@/components/SaintCard";

export const metadata = {
  title: "Les Saints — Église du Voide",
  description: "Découvrez les 13 saints représentés à l'église Saint-Pierre du Voide.",
};

export default function SaintsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl font-bold text-amber-900 mb-2">Les Saints</h1>
        <p className="text-amber-700 text-lg">
          {saints.length} saints et figures sacrées de l'Église du Voide
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {saints.map(saint => (
          <SaintCard key={saint.slug} saint={saint} />
        ))}
      </div>

      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
        <p className="text-amber-800 text-sm leading-relaxed">
          Ces saints sont représentés dans l'église Saint-Pierre du Voide (49310).
          Cliquez sur chaque saint pour découvrir son histoire, son patronage et sa prière.
        </p>
      </div>
    </div>
  );
}
