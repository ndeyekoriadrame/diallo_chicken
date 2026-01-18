"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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
          <li><a href="/" className="hover:text-yellow-600">Accueil</a></li>
          <li><a href="/about" className="hover:text-yellow-600">À propos</a></li>
          <li><a href="/products" className="hover:text-yellow-600">Nos produits</a></li>
          <li><a href="/contact" className="hover:text-yellow-600">Contact</a></li>

          {/* Panier */}
          <li className="relative">
            <a href="/cart" className="flex items-center">
              <ShoppingCart size={28} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg w-full py-6 px-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/products">Nos produits</a></li>
            <li><a href="/contact">Contact</a></li>

            {/* Panier mobile */}
            <li>
              <a href="/cart" className="flex items-center gap-2">
                <ShoppingCart />
                Panier
                {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
