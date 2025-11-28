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

      {/* Suivi de Commande Bloc */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Suivi de votre Livraison
            </h2>
            
            {/* Commande cliquable */}
            <button
              onClick={() => setIsTrackingExpanded(!isTrackingExpanded)}
              className="inline-flex items-center space-x-3 bg-white border-2 border-yellow-600 hover:border-yellow-700 rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-yellow-700" />
              <span className="text-lg font-semibold text-gray-800">Commande #DC-2025-001</span>
              {isTrackingExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Contenu expandable */}
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isTrackingExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                      En cours de préparation
                    </span>
                  </div>
                </div>

                <div className="relative">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center mb-6 last:mb-0">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-yellow-600 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="ml-6 flex-grow">
                        <h4 className={`text-lg font-medium ${
                          step.completed ? 'text-yellow-700' : 'text-gray-500'
                        }`}>
                          {step.name}
                        </h4>
                        <p className={`text-sm ${
                          step.completed ? 'text-yellow-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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