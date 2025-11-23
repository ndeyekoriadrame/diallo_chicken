export default function Home() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-yellow-50">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenue chez <span className="text-yellow-600">Diallo Chicken</span> 🐔
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Livraison rapide de poulets de chair et d’œufs frais.
          Qualité garantie, du producteur au consommateur.
        </p>

        <a
          href="/products"
          className="mt-10 bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg shadow hover:bg-yellow-700 transition"
        >
          Voir nos produits
        </a>
      </section>

      {/* AVANTAGES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-3">🐔 Poulets de qualité</h3>
          <p className="text-gray-600">Élevés dans de bonnes conditions, prêts à la consommation.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">🥚 Œufs ultra-frais</h3>
          <p className="text-gray-600">Disponibles en cartons ou en détail, toujours frais.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">🚚 Livraison rapide</h3>
          <p className="text-gray-600">Partout à Dakar, paiement à la livraison.</p>
        </div>
      </section>

      {/* SECTION PRODUITS MIS EN AVANT */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nos produits phares</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Carte 1 */}
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <img
              src="/poulet.jpg"
              alt="Poulets de chair"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">Poulets de chair</h3>
            <p className="text-gray-600 mt-2">Frais, propres et prêts pour toutes vos recettes.</p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <img
              src="/oeufs.jpg"
              alt="Oeufs frais"
              className="w-full h-64 object-cover rounded-lg"
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

    </main>
  );
}
