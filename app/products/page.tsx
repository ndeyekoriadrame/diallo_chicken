"use client";

import { useCart } from "@/context/CartContext";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, ShoppingCart, Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  description: string;
  inStock: boolean;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Poulet de chair fermier",
    category: "poulet",
    price: 3000,
    weight: "1.5 kg",
    image: "/poulet.jpg",
    description: "Poulets de chair soigneusement sélectionnés. Frais, tendre et savoureux.",
    inStock: true,
    tags: ["frais", "fermier"]
  },
  {
    id: 2,
    name: "Œufs frais de ferme",
    category: "oeuf",
    price: 100,
    weight: "50g/pièce",
    image: "/oeuf.jpg",
    description: "Œufs de qualité, bien conservés et adaptés à tous vos besoins culinaires.",
    inStock: true,
    tags: ["frais", "protéines"]
  },
  {
    id: 3,
    name: "Poulet fermier",
    category: "poulet",
    price: 3500,
    weight: "1.6 kg",
    image: "/poulet.jpg",
    description: "Poulets de chair de qualité, élevés selon les pratiques standards et disponibles frais pour vos besoins quotidiens.",
    inStock: true,
    tags: ["fermier", "sans-antibiotiques"]
  },
  {
    id: 4,
    name: "Carton d'œufs (30 unités)",
    category: "oeuf",
    price: 3500,
    weight: "1.8 kg",
    image: "/oeuf.jpg",
    description: "Carton de 30 œufs frais, parfait pour les familles ou restaurants.",
    inStock: true,
    tags: ["carton", "économique", "famille"]
  },
  {
    id: 5,
    name: "Demi-poulet coupé",
    category: "poulet",
    price: 4500,
    weight: "600-700g",
    image: "/poulet.jpg",
    description: "Demi-poulet découpé, prêt pour la cuisson. Idéal pour 2-3 personnes.",
    inStock: true,
    tags: ["portion", "coupé", "pratique"]
  },
  {
    id: 6,
    name: "Œufs extra-frais",
    category: "oeuf",
    price: 150,
    weight: "55g/pièce",
    image: "/oeuf.jpg",
    description: "Œufs extra-frais pondus dans les 24h, qualité exceptionnelle.",
    inStock: true,
    tags: ["extra-frais", "qualité"]
  },
  {
    id: 7,
    name: "Poulet royal",
    category: "poulet",
    price: 4000,
    weight: "2.0 kg",
    image: "/poulet.jpg",
    description: "Poulets de chair de bonne qualité, élevés dans des conditions maîtrisées et disponibles en permanence.",
    inStock: true,
    tags: ["royal", "race-sélectionnée", "rare"]
  },
  {
    id: 8,
    name: "Œufs",
    category: "oeuf",
    price: 180,
    weight: "52g/pièce",
    image: "/oeuf.jpg",
    description: "Œufs frais de consommation, goût unique et texture exceptionnelle.",
    inStock: true,
    tags: ["gout-unique", "spécial"]
  }
];

const categories = [
  { id: "all", name: "Tous les produits", icon: "" },
  { id: "poulet", name: "Poulets", icon: "" },
  { id: "oeuf", name: "Œufs", icon: "" }
];

const sortOptions = [
  { value: "name", label: "Nom A-Z" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" }
];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const itemsPerPage = 6;

  // Filtrage et tri des produits
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Recherche par nom
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filtrage par catégorie
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

      // Filtrage par prix
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      // Filtrage stock
      const matchesStock = !showInStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

    // Tri
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange, showInStockOnly]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("popular");
    setPriceRange([0, 20000]);
    setShowInStockOnly(false);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-yellow-700 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/product.jpg" // remplace par ton image
            alt="Nos Produits"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Gradient overlay avec opacité réduite */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-40"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 opacity-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1
            className="text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-lg animate-fadeIn"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Nos Produits
          </h1>
          <p className="text-xl md:text-2xl font-bold text-yellow-100 max-w-3xl mx-auto leading-relaxed animate-slideUp">
            Découvrez notre gamme complète de produits frais : poulets fermiers et œufs bio de qualité exceptionnelle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filtres</h3>
                <button
                  onClick={resetFilters}
                  className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Réinitialiser
                </button>
              </div>

              {/* Recherche */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rechercher un produit
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nom, description, tags..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Catégories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Catégories
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Plage de prix */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Prix (FCFA)
                </label>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 20000])}
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-md w-full"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtres et options</span>
              </button>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredAndSortedProducts.length} produit{filteredAndSortedProducts.length > 1 ? 's' : ''} trouvé{filteredAndSortedProducts.length > 1 ? 's' : ''}
                </h2>
                {searchQuery && (
                  <p className="text-gray-600 mt-1">
                    Résultats pour "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="hidden lg:block text-sm text-gray-600">
                Affichage de {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} sur {filteredAndSortedProducts.length} produits
              </div>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Weight */}
                        <div className="flex items-center gap-2 mb-4">
                          <Package className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{product.weight}</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">
                                {formatPrice(product.price)} FCFA
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {formatPrice(product.originalPrice)} FCFA
                                </span>
                              )}
                            </div>
                            {product.originalPrice && (
                              <div className="text-sm text-green-600 font-medium">
                                Économisez {formatPrice(product.originalPrice - product.price)} FCFA
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
  disabled={!product.inStock}
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }
  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
    product.inStock
      ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  <ShoppingCart className="w-4 h-4" />
  {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
</button>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Précédent
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg ${
                            page === currentPage
                              ? 'bg-yellow-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Suivant
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

       {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-black py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Besoin d'un produit spécifique ?
          </h2>
          <p className="text-xl text-black mb-8">
            Contactez-nous pour vos commandes spéciales, besoins en volume ou produits personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Nous contacter
            </a>
            <a
              href="tel:+221337123456"
              className="border-2 border-yellow-600 bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}