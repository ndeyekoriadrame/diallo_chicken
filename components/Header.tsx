"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo Diallo Chicken"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Diallo Chicken</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li><a href="/" className="hover:text-yellow-600 transition">Accueil</a></li>
          <li><a href="/about" className="hover:text-yellow-600 transition">À propos</a></li>
          <li><a href="/products" className="hover:text-yellow-600 transition">Nos produits</a></li>
          <li><a href="/contact" className="hover:text-yellow-600 transition">Contact</a></li>
          <li>
            <a
              href="/auth/login"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Connexion
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg w-full py-6 px-6 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li><a href="/" className="hover:text-yellow-600 transition">Accueil</a></li>
            <li><a href="/about" className="hover:text-yellow-600 transition">À propos</a></li>
            <li><a href="/products" className="hover:text-yellow-600 transition">Nos produits</a></li>
            <li><a href="/contact" className="hover:text-yellow-600 transition">Contact</a></li>
            <li>
              <a
                href="/auth/login"
                className="bg-yellow-600 text-white px-4 py-2 rounded-md text-center hover:bg-yellow-700 transition"
              >
                Connexion
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
