'use client';

import { useState } from 'react';
import { 
  Phone, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Truck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface TrackingStep {
  id: string;
  name: string;
  description: string;
  time: string;
  completed: boolean;
}

const trackingSteps = [
    {
      id: 'commande',
      name: 'Commande confirmée',
      description: 'Votre commande a été validée',
      completed: true
    },
    {
      id: 'preparation',
      name: 'Préparation en cours',
      description: 'Nos équipes préparent vos produits',
      completed: true
    },
    {
      id: 'expedition',
      name: 'En route',
      description: 'Votre livreur est en chemin',
      completed: false
    },
    {
      id: 'livraison',
      name: 'Livré',
      description: 'Votre commande est livrée',
      completed: false
    }
  ];

export default function DeliveryPage() {
  const [isTrackingExpanded, setIsTrackingExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section - Split Layout */}
<section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-8 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-2">
     {/* Image à droite */}
    <div className="md:w-1/2 relative">
      <img
        src="/delivery.jpg"
        alt="Delivery"
        className="w-full h-110 md:h-134 lg:h-110 rounded-3xl shadow-xl object-cover"
      />

      {/* Cercles décoratifs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>
    </div>
    {/* Texte & Boutons */}
    <div className="relative z-10 md:w-1/2 text-center md:text-left">
      <div className="backdrop-blur-lg bg-white/50 border border-yellow-300/40 rounded-3xl shadow-xl p-10 md:p-12">

        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-700 mb-6">
          Livraison Rapide & Fiable
        </h1>

        <p className="text-xl md:text-2xl text-gray-800 max-w-lg mb-10">
          Recevez vos produits frais directement chez vous dans les meilleurs délais.
          Nous couvrons toute la région de Dakar et ses environs.
        </p>

      </div>
    </div>

  </div>
</section>

      {/* Livraison Informations */}
<div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-4xl font-bold text-gray-900 mb-10">
      Comment fonctionne la livraison
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Étape 1 */}
      <div className="bg-white p-8 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <Phone className="w-10 h-10 text-yellow-600 mx-auto mb-4 transition duration-300 hover:text-yellow-700" />
        <h3 className="text-xl font-semibold mb-2">Passez votre commande</h3>
        <p className="text-gray-600">
          Contactez-nous par téléphone ou WhatsApp pour commander vos poulets et œufs.
        </p>
      </div>

      {/* Étape 2 */}
      <div className="bg-white p-8 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <Clock className="w-10 h-10 text-yellow-600 mx-auto mb-4 transition duration-300 hover:text-yellow-700" />
        <h3 className="text-xl font-semibold mb-2">Préparation rapide</h3>
        <p className="text-gray-600">
          Nous préparons votre commande avec des produits frais directement de la ferme.
        </p>
      </div>

      {/* Étape 3 */}
      <div className="bg-white p-8 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <Truck className="w-10 h-10 text-yellow-600 mx-auto mb-4 transition duration-300 hover:text-yellow-700" />
        <h3 className="text-xl font-semibold mb-2">Livraison à domicile</h3>
        <p className="text-gray-600">
          Votre commande est livrée rapidement dans Dakar et ses environs.
        </p>
      </div>

    </div>
  </div>
</div>

      {/* CTA Section */}
<div className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-black py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold mb-4">
      Prêt à Passer une Commande ?
    </h2>
    <p className="text-xl mb-8 max-w-3xl mx-auto">
      Contactez-nous maintenant et recevez vos produits frais en quelques minutes seulement !
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {/* Bouton Appel */}
      <a
        href="tel:+221337123456"
        className="bg-white border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition flex items-center"
      >
        <Phone className="w-5 h-5 mr-2" />
        Appeler maintenant
      </a>

      {/* Bouton WhatsApp */}
      <a
        href="https://wa.me/221771234567?text=Bonjour%20!%20Je%20souhaite%20passer%20une%20commande.%20😊"
        target="_blank"
        className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition flex items-center"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        WhatsApp
      </a>

      {/* Bouton Voir Produits */}
      <a
        href="/products"
        className="bg-white border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition flex items-center"
      >
        Voir produits
        <ArrowRight className="w-5 h-5 ml-2" />
      </a>
    </div>
  </div>
</div>

    </div>
  );
}