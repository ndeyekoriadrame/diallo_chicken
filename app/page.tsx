"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Styles have been moved to globals.css

export default function Home() {
  // ---- SLIDER HERO (Auto défilement) ----
  const slides = ["/Hero1.png", "/Hero2.png", "/Hero3.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ---- NAVIGATION VERS ARTICLES ----
  // No expansion needed, articles will link to detailed pages

  // ---- FORMULAIRE DE CONTACT ----
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', contactForm);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    // Reset du formulaire
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // ---- AVIS CLIENTS ----
  const reviews = [
    { 
      text: "Excellente qualité, livraison très rapide. Je recommande !", 
      author: "Mariama S.", 
      role: "Étudiante",
      avatar: "/avatar1.jpg"
    },
    { 
      text: "Les œufs sont très frais, je commande chaque semaine.", 
      author: "Fatou D.", 
      role: "Entrepreneur",
      avatar: "/avatar2.jpg"
    },
    { 
      text: "Poulets bien nettoyés et prêts à cuisson. Je suis satisfaite.", 
      author: "Khadim B.", 
      role: "Productrice locale",
      avatar: "/avatar3.jpg"
    },
    { 
      text: "Excellent service client, je recommande sans hésiter !", 
      author: "Oumar T.", 
      role: "Client fidèle",
      avatar: "/avatar4.jpg"
    },
    { 
      text: "Je suis très satisfaite de la fraîcheur des produits.", 
      author: "Aminata K.", 
      role: "Ménagère",
      avatar: "/avatar5.jpg"
    },
    { 
      text: "Les poulets sont bien nourris, un goût exceptionnel.", 
      author: "Seydou N.", 
      role: "Cuisinier",
      avatar: "/avatar6.jpg"
    },
  ];

  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Styles are now defined in globals.css */}
      
      <main className="w-full">

      {/* ---------------- HERO ---------------- */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-yellow-50">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenue chez <span className="text-yellow-600">Diallo Chicken</span> 🐔
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Livraison rapide de poulets de chair et d'œufs frais.
          Qualité garantie, du producteur au consommateur.
        </p>

        <a
          href="/products"
          className="mt-10 bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg shadow hover:bg-yellow-700 transition"
        >
          Voir nos produits
        </a>
      </section>

      {/* ---------------- QUI SOMMES-NOUS ---------------- */}
      <section className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:pl-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texte */}
            <div>
              <h2
                className="text-5xl font-bold text-primary-500 mb-8 leading-tight"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Qui sommes-nous ?
              </h2>

              <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
                <p>
                  Diallo Chicken est une entreprise familiale sénégalaise spécialisée dans
                  l'élevage de volailles de qualité. Depuis plus de 15 ans, nous nous engageons
                  à vous fournir les meilleurs poulets fermiers et œufs frais du pays.
                </p>

                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">🌱</div>
                  <p>
                    Notre philosophie repose sur le respect de l'animal et l'excellence
                    culinaire. Nous sélectionnons nos poulets avec soin afin de garantir des plats savoureux et accessibles.
                  </p>
                </div>

                <p>
                  En choisissant Diallo Chicken, vous soutenez l'agriculture locale et
                  participez au développement économique de nos communautés rurales.
                  Chaque commande contribue à préserver nos traditions d'élevage ancestral.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
                  <Image
                    src="/nous1.jpg"
                    alt="Femme avec panier"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="w-40 h-40 rounded-full shadow-lg bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                    style={{ backgroundImage: "url('/nous2.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-full"></div>
                    <p className="relative z-10 text-center text-white text-sm font-semibold leading-tight px-2">
                      La volaille locale,<br />
                      au cœur de votre<br />
                      alimentation
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/nous3.jpg"
                    alt="Mains avec pousses"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary-300 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary-400 rounded-full opacity-40"></div>
            </div>

          </div>
        </div>
      </section>

     {/* ---------------- POURQUOI NOUS CHOISIR ---------------- */}
<section className="relative py-24 px-6 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">

  {/* Bulles décoratives */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>

  <h2
    className="text-5xl font-bold mb-16 text-center text-primary-500 leading-tight"
    style={{ fontFamily: "Dancing Script, cursive" }}
  >
    Pourquoi nous choisir ?
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* 1 */}
    <div
      className="bg-white/70 backdrop-blur-xl border border-yellow-100 p-10 rounded-3xl shadow-xl hover:scale-[1.03] transition-all relative text-center"
    >
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-4xl absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg">
        🐔
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800">
        Produits ultra frais
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        Nos poulets et œufs proviennent directement de notre ferme.
        Zéro intermédiaire, fraîcheur garantie pour chaque commande.
      </p>
    </div>

    {/* 2 */}
    <div
      className="bg-white/70 backdrop-blur-xl border border-yellow-100 p-10 rounded-3xl shadow-xl hover:scale-[1.03] transition-all relative text-center"
    >
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-4xl absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg">
        🚚
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800">
        Livraison express
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        Une logistique optimisée pour livrer partout à Dakar
        en un temps record — souvent en moins de 2 heures.
      </p>
    </div>

    {/* 3 */}
    <div
      className="bg-white/70 backdrop-blur-xl border border-yellow-100 p-10 rounded-3xl shadow-xl hover:scale-[1.03] transition-all relative text-center"
    >
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-4xl absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg">
        💰
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800">
        Prix imbattables
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        Des tarifs justes et transparents, adaptés à tous les budgets,
        sans jamais sacrifier la qualité ou la fraîcheur.
      </p>
    </div>

  </div>
</section>


      {/* ---------------- PRODUITS PHARES ---------------- */}
      <section className="bg-gray-100 py-10 px-6">
        <h2
          className="text-5xl font-bold text-center mb-12 text-primary-500 leading-tight"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          Nos produits phares
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <img
              src="/poulet.jpg"
              alt="Poulets de chair"
              className="w-full h-74 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">Poulets de chair</h3>
            <p className="text-gray-600 mt-2">Frais, propres et prêts pour toutes vos recettes.</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <img
              src="/oeuf.jpg"
              alt="Oeufs frais"
              className="w-full h-74 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">Œufs frais</h3>
            <p className="text-gray-600 mt-2">Disponibles en gros (cartons) et en détail.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg shadow hover:bg-yellow-700 transition"
          >
            Explorer tous les produits
          </a>
        </div>
      </section>

      {/* ---------------- HERO CAROUSEL ---------------- */}
      <section className="relative w-full h-[80vh] overflow-hidden lg:mt-12">
        <Image
          src={slides[heroIndex]}
          alt="Hero"
          fill
          className="object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fraîcheur garantie 🐔
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Poulets de chair & œufs frais directement de la ferme à votre table.
          </p>
          <a
            href="/contact"
            className="mt-8 bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg"
          >
            Contactez-nous
          </a>
        </div>
      </section>

       {/* ---------------- LE CHOIX DE LA QUALITÉ - STATISTIQUES ---------------- */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
        {/* Bulles décoratives */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Titre à gauche */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
                L’engagement vers la qualité
              </h2>
            </div>

            {/* Cartes de statistiques à droite */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Carte 1 - Ventes totales */}
              <div className="bg-white/70 backdrop-blur-xl border border-yellow-100 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:scale-[1.03] relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                  Ventes totales
                </div>
                <div className="text-4xl font-bold text-gray-700">
                  10K+
                </div>
              </div>

              {/* Carte 2 - Clients satisfaits */}
              <div className="bg-white/70 backdrop-blur-xl border border-yellow-100 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:scale-[1.03] relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                  Clients satisfaits
                </div>
                <div className="text-4xl font-bold text-gray-700">
                  98%
                </div>
              </div>

              {/* Carte 3 - Produits livrés */}
              <div className="bg-white/70 backdrop-blur-xl border border-yellow-100 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:scale-[1.03] relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                  Produits livrés
                </div>
                <div className="text-4xl font-bold text-gray-700">
                  5000+
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- AVIS CLIENTS ---------------- */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Titre principal */}
          <h2 className="text-5xl md:text-5xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Dancing Script, cursive" }}>
            Ce que disent nos clients
          </h2>

          {/* Témoignages en grille 3 colonnes */}
          <div className="relative overflow-hidden lg:h-80 lg:mt-12">
            <div
              className="flex gap-8 transition-transform duration-700"
              style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, pageIndex) => (
                <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                  {reviews.slice(pageIndex * 3, pageIndex * 3 + 3).map((review, i) => (
                    <div key={`${pageIndex}-${i}`} className="bg-white p-8 rounded-2xl shadow-lg">
                      {/* Guillemets verts */}
                      <div className="text-green-800 text-4xl mb-4 text-left">"</div>
                      
                      {/* Contenu du témoignage */}
                      <p className="text-gray-700 text-left leading-relaxed mb-6">
                        {review.text}
                      </p>
                      
                      {/* Informations de l'auteur */}
                      <div className="flex items-center gap-4 mt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
  <Image
    src={review.avatar}
    alt={review.author}
    width={48}
    height={48}
    className="object-cover w-full h-full"
  />
</div>

                        <div className="text-left">
                          <h4 className="font-bold text-gray-900">{review.author}</h4>
                          <p className="text-gray-500 text-sm">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === reviewIndex ? 'bg-green-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

       {/* ---------------- CONTACT ---------------- */}
      <section className="py-6 px-6 bg-gray-50 lg:mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            
            {/* Image à gauche */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/contact.png"
                  alt="Contact Diallo Chicken"
                  className="w-full h-210 object-cover"
                />
              </div>
             
            </div>

            {/* Formulaire à droite */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 
                  className="text-4xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "Dancing Script, cursive" }}
                >
                  Contactez-nous
                </h2>
                <p className="text-gray-600 text-lg">
                  Une question ? Une commande spéciale ? Nous sommes là pour vous aider !
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Nom complet */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez votre demande, votre commande ou vos questions..."
                  />
                </div>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Envoyer le message
                </button>

                {/* Informations complémentaires */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Contact sécurisé</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DERNIERS ARTICLES ---------------- */}
      <section className="pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Titre centré en haut */}
          <h2 
            className="text-5xl font-bold text-center mb-12 text-primary-500 leading-tight"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Derniers articles
          </h2>

          {/* Grille des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                image: "/article1.jpg",
                category: "Conseils cuisine",
                date: "15 Sep 2025",
                title: "Comment reconnaître un poulet vraiment frais ?",
                excerpt: "Découvrez les signes simples pour choisir un poulet de qualité : couleur, odeur, texture et conservation.",
                author: "Diallo Chicken",
                content: "Acheter un poulet frais est essentiel pour garantizar la qualité de vos repas. Voici les critères essentiels à retenir :\n\n**Couleur et apparence**\nUn poulet frais présente une couleur rose pâle à jaunâtre selon l'âge. Évitez les teintes verdâtres ou grises qui indiquent un produit périmé. La peau doit être légèrement humide mais non visqueuse.\n\n**L'odeur**\nUn poulet frais sent légèrement la volaille, jamais fort ou de manière déplaisante. Une odeur forte ou ammoniaquée est un signe d'alarme.\n\n**Texture**\nLa chair doit être ferme au toucher, élastique. Si elle s'enfonce sous la pression du doigt, le poulet n'est plus frais.\n\n**Conservation**\nUn poulet frais se conserve 1-2 jours au réfrigérateur (0-4°C) et jusqu'à 6 mois au congélateur."
              },
              {
                id: 2,
                image: "/article2.jpg",
                category: "Nutrition",
                date: "12 Sep 2025",
                title: "Pourquoi consommer des œufs chaque semaine ?",
                excerpt: "Riches en protéines, vitamines et oméga-3, les œufs sont un allié santé pour toute la famille.",
                author: "Diallo Chicken",
                content: "Les œufs sont considerés comme un super-aliment pour de bonnes raisons. Découvrez pourquoi les intégrer dans votre alimentation quotidienne est essentiel :\n\n**Valeur nutritionnelle exceptionnelle**\nLes œufs contiennent tous les acides aminés essentiels. Ils sont riches en protéines de haute qualité (12g par œuf), en vitamines A, D, E, B12, et en minéraux comme le fer et le zinc.\n\n**Bénéfices pour la santé**\n- Renforce le système immunitaire\n- Améliore la concentration grâce aux oméga-3\n- Maintient la santé des os grâce à la vitamine D\n- Favorise la satiété pour mieux gérer son poids\n\n**Recettes faciles**\nLes œufs se consomment de multiples façons : brouillés, pochés, durs, en omelette... Variez les préparations pour un plaisir constant !\n\nChez Diallo Chicken, nos œufs frais garantissent une nutrition optimale pour toute la famille."
              },
              {
                id: 3,
                image: "/article3.png",
                category: "Recettes",
                date: "10 Sep 2025",
                title: "3 recettes faciles avec du poulet de chair",
                excerpt: "Poulet rôti, Yassa simple, grillades épicées : découvrez des recettes rapides et économiques.",
                author: "Diallo Chicken",
                content: "Découvrez 3 recettes simples pour cuisiner votre poulet Diallo Chicken avec plaisir :\n\n**1. Poulet rôti traditionnel**\n- 1 poulet Diallo Chicken\n- 2 citrons, ail, thym, laurier\n- Sel, poivre\n\nFarcissez le poulet avec les aromates, arrosez régulièrement. Cuisson : 1h à 180°C.\n\n**2. Yassa au poulet (recette facile)**\n- Poulet coupé en morceaux\n- Oignons, citron, moutarde\n- Huile, sel, poivre\n\nFaites dorer le poulet, ajoutez les oignons caramélisés, ajoutez le mélange citron-moutarde.\n\n**3. Grillades épicées**\n- Morceaux de poulet\n- Épices (gingembre, piment, thym)\n- Sauce soja, huile\n\nMarinez 2h minimum, grillez 15-20 minutes.\n\nCes recettes révèlent toute la saveur de notre poulet fermier !"
              },
              {
                id: 4,
                image: "/article4.jpg",
                category: "Agriculture locale",
                date: "08 Sep 2025",
                title: "Pourquoi privilégier la volaille locale ?",
                excerpt: "Fraîcheur garantie, circuit court, soutien aux éleveurs : voici les avantages de la volaille locale.",
                author: "Diallo Chicken",
                content: "Choisir la volaille locale, c'est faire le choix de la qualité et de l'éthique :\n\n**Fraîcheur incomparable**\nLa volaille locale arrive directement de la ferme, sans temps de transport prolongé. Cela garantit une fraîcheur et une qualité gustative supérieures aux produits importés.\n\n**Circuit court = qualité**\nMoins de transport signifie moins de stress pour les animaux et un produit final plus sain. La chaîne du froid est respectée du producteur au consommateur.\n\n**Soutien à l'économie locale**\nEn achetant local, vous soutenez les familles d'éleveurs de votre région, contribuez à maintenir l'emploi rural et preservez les savoir-faire traditionnels.\n\n**Transparence totale**\nChez Diallo Chicken, nous connaître l'origine exacte de nos produits. Visitez notre ferme, rencontrez nos eleveurs : c'est la garantie d'une volaille élevée dans le respect.\n\n**Impact environnemental réduit**\nMoins de transport = moins d'émissions de CO2. Un choix éco-responsable pour préserver notre planète."
              }
            ].map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image de l'article */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Contenu de l'article */}
                <div className="p-6">
                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="font-medium">Par {article.author}</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>

                  {/* Extrait */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Bouton pour lire l'article complet */}
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 mt-3"
                  >
                    Lire l'article complet
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Lien vers tous les articles centré en bas */}
          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Voir tous les articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}