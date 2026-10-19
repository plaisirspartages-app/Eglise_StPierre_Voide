import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Église du Voide — Saints & Jeux",
  description: "Découvrez les saints de l'Église Saint-Pierre du Voide (49310) et testez vos connaissances avec nos jeux et quiz.",
  keywords: ["église", "Voide", "saints", "quiz", "catholicisme", "Maine-et-Loire"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col" style={{ background: "#fdf8f0", color: "#3d2b1f" }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="bg-amber-900 text-amber-200 text-center py-4 text-sm mt-8">
          <p>✝ Église Saint-Pierre du Voide — 49310 Le Voide ✝</p>
        </footer>
      </body>
    </html>
  );
}
