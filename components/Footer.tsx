import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 pt-12 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center space-y-3 lg:pl-12">
          <Image
            src="/logo.jpg"
            alt="Logo Diallo Chicken"
            width={160}
            height={160}
            className="rounded-full"
          />
          <h3 className="text-2xl font-semibold">DIALLO CHICKEN</h3>
          <p className="text-gray-300 leading-relaxed">
            Qualité, fraîcheur et satisfaction garanties.
          </p>
        </div>

        {/* Explorer */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-32">
          <h3 className="text-xl font-semibold mb-4">Explorer</h3>
          <ul className="text-gray-300 space-y-3">
            <li><a href="/services" className="hover:text-yellow-500 transition">Nos services</a></li>
            <li><a href="/products" className="hover:text-yellow-500 transition">Nos produits</a></li>
            <li><a href="/delivery" className="hover:text-yellow-500 transition">Livraison</a></li>
            <li><a href="/blocks" className="hover:text-yellow-500 transition">Blogs</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-8">
          <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>

          <ul className="text-gray-300 space-y-3">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} className="text-yellow-500" />
              77 780 13 19
            </li>

            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={18} className="text-yellow-500" />
              diallochicken@gmail.com
            </li>

            <li className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={18} className="text-yellow-500" />
              Dakar, Sénégal
            </li>
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
              <Facebook size={20} />
            </a>

            <a
              href="https://wa.me/221777801319"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition"
            >
              <MessageCircle size={20} />
            </a>

            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 mt-12 pt-6 border-t border-gray-700">
        © {new Date().getFullYear()} Diallo Chicken — Tous droits réservés.
      </div>
    </footer>
  );
}
