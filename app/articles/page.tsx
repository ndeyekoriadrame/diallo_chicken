"use client";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    image: "/article1.jpg",
    category: "Conseils cuisine",
    date: "15 Sep 2025",
    title: "Comment reconnaître un poulet vraiment frais ?",
    excerpt: "Découvrez les signes simples pour choisir un poulet de qualité : couleur, odeur, texture et conservation.",
    author: "Diallo Chicken",
  },
  {
    id: 2,
    image: "/article2.jpg",
    category: "Nutrition",
    date: "12 Sep 2025",
    title: "Pourquoi consommer des œufs chaque semaine ?",
    excerpt: "Riches en protéines, vitamines et oméga-3, les œufs sont un allié santé pour toute la famille.",
    author: "Diallo Chicken",
  },
  {
    id: 3,
    image: "/article3.png",
    category: "Recettes",
    date: "10 Sep 2025",
    title: "3 recettes faciles avec du poulet de chair",
    excerpt: "Poulet rôti, Yassa simple, grillades épicées : découvrez des recettes rapides et économiques.",
    author: "Diallo Chicken",
  },
  {
    id: 4,
    image: "/article4.jpg",
    category: "Agriculture locale",
    date: "08 Sep 2025",
    title: "Pourquoi privilégier la volaille locale ?",
    excerpt: "Fraîcheur garantie, circuit court, soutien aux éleveurs : voici les avantages de la volaille locale.",
    author: "Diallo Chicken",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Articles
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez nos conseils, recettes et actualités sur la volaille de qualité
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image de l'article */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Extrait */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Lien vers l'article */}
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                  >
                    Lire l'article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-gray-600 mb-8">
            Notre équipe est là pour vous conseiller et vous accompagner dans vos achats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/products"
              className="bg-white text-yellow-600 border-2 border-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}