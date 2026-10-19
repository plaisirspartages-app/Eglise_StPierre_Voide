"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/saints", label: "Les Saints" },
    { href: "/jeux", label: "Jeux & Quiz" },
  ];

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold tracking-wide hover:text-amber-200 transition-colors">
          <span className="text-2xl">✝</span>
          <span className="hidden sm:inline">Église du Voide</span>
          <span className="sm:hidden">Voide</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
                  ? "bg-amber-700 text-white"
                  : "hover:bg-amber-800 text-amber-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-amber-800 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-amber-50 mb-1" />
          <div className="w-5 h-0.5 bg-amber-50 mb-1" />
          <div className="w-5 h-0.5 bg-amber-50" />
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-amber-700 px-4 pb-3 flex flex-col gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
                  ? "bg-amber-700 text-white"
                  : "hover:bg-amber-800 text-amber-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
