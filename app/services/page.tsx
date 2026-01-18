"use client";
import Link from "next/link";
import { useState } from "react";
import { 
  Truck, 
  Package, 
  Clock, 
  Users, 
  Star, 
  CheckCircle,
  ShoppingCart,
  Factory,
  TruckIcon,
  ChefHat,
  Home,
  Shield,
  Award,
  MapPin,
  Phone,
  ArrowRight,
  Leaf,
  Heart,
  Target,
  Zap
} from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      id: 1,
      title: "Vente de Produits Frais",
      description: "Poulets fermiers et œufs de qualité exceptionnelle, livrés quotidiennement depuis notre ferme.",
      icon: Package,
      color: "from-yellow-400 to-yellow-500",
      features: [
        "Poulets de chair soigneusement sélectionnés",
        "Œufs frais pondus dans les 24h",
        "Œufs frais de consommation, disponibles quotidiennement.",
      ],
      pricing: "À partir de 100 FCFA",
      delivery: "Livraison en 2h"
    },
    {
      id: 2,
      title: "Livraison Express",
      description: "Service de livraison rapide et fiable dans tout Dakar.",
      icon: Truck,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Livraison en 2h maximum",
        "Suivi en temps réel",
        "Livraison le dimanche",
        "Zone étendue Dakar et environs"
      ],
      pricing: "Gratuit > 50 000 FCFA",
      delivery: "2h maximum"
    },
    {
      id: 3,
      title: "Vente en Gros",
      description: "Tarifs dégressifs pour restaurants, supermarchés et commandes importantes.",
      icon: Factory,
      color: "from-yellow-600 to-yellow-700",
      features: [
        "Tarifs dégressifs spéciaux",
        "Contrats B2B personnalisés",
        "Livraison programmée",
        "Support dédié professionnel"
      ],
      pricing: "Sur devis",
      delivery: "Planning personnalisé"
    },
    {
      id: 4,
      title: "Services Personnalisés",
      description: "Solutions sur-mesure pour vos événements et besoins spécifiques.",
      icon: ChefHat,
      color: "from-yellow-700 to-yellow-800",
      features: [
        "Préparation spéciale",
        "Événements et mariages",
        "Découpe sur demande",
        "Conditionnement adapté"
      ],
      pricing: "Sur devis",
      delivery: "Planning flexible"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Accompagnement Expert",
      description: "Conseils nutritionnels et recettes personnalisées"
    },
    {
      icon: Shield,
      title: "Garantie Qualité",
      description: "Satisfaction garantie ou remboursé"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Produits certifiés"
    },
    {
      icon: Leaf,
      title: "Agriculture Durable",
      description: "Production respectueuse de l'environnement"
    }
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Commande",
      description: "Passez commande en ligne, par téléphone ou WhatsApp",
      icon: ShoppingCart
    },
    {
      step: "02", 
      title: "Préparation",
      description: "Nos équipes préparent vos produits avec le plus grand soin",
      icon: Package
    },
    {
      step: "03",
      title: "Livraison",
      description: "Livraison express directement à votre porte",
      icon: TruckIcon
    },
    {
      step: "04",
      title: "Satisfaction",
      description: "Votre satisfaction est notre priorité absolue",
      icon: Heart
    }
  ];

  const zonesService = [
    {
      zone: "Banlieue Dakar",
      delay: "30-60 min",
      icon: MapPin,
      color: "text-yellow-700"
    },
    {
      zone: "Dakar Centre",
      delay: "1-2h", 
      icon: MapPin,
      color: "text-yellow-400"
    },
    {
      zone: "Zones rurales",
      delay: "Sur arrangement",
      icon: MapPin,
      color: "text-yellow-700"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Livraison ultra-rapide",
      description: "2h maximum pour votre tranquillité"
    },
    {
      icon: Star,
      title: "Qualité premium",
      description: "Produits de la plus haute qualité"
    },
    {
      icon: Shield,
      title: "Garantie totale",
      description: "Satisfaction 100% garantie"
    },
    {
      icon: Users,
      title: "Service client 7j/7",
      description: "Notre équipe à votre écoute"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     {/* Hero Section Services */}

<section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 overflow-hidden">

{/* Background Decorations */}

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-52 h-52 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>
    <div className="absolute -bottom-10 -left-10 opacity-20 rotate-12">
      <img src="/services.jpg" alt="Services" className="w-80 h-auto" />
    </div>
  </div>

{/* Main Content */}

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

{/* Glassmorphism Card */}
<div className="backdrop-blur-xl bg-white/60 border border-yellow-200/40 rounded-3xl shadow-xl p-10 md:p-16 mx-auto">
  
  <h1 
    className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm"
    style={{ fontFamily: 'Dancing Script, cursive' }}
  >
    Nos Services
  </h1>

  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
    Découvrez notre gamme complète de services professionnels pour particuliers et entreprises. 
    Qualité, rapidité et satisfaction garanties depuis plus de 10 ans.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/contact"
      className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
    >
      Demander un devis
    </a>
    <a
      href="tel:+221337123456"
      className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors"
    >
      Nous appeler
    </a>
  </div>

  {/* Small decorative separator */}
  <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
</div>
  </div>
</section>

      {/* Services Stats */}
      <section className="bg-white py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous vos besoins, du particulier aux grandes entreprises
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                }`}
              >
                <service.icon className="w-5 h-5 inline-block mr-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`bg-gradient-to-r ${mainServices[activeService].color} text-white p-8`}>
              <div className="flex items-center gap-4 mb-4">
                
                <div>
                  <h3 className="text-3xl font-bold">{mainServices[activeService].title}</h3>
                  <p className="text-xl opacity-90">{mainServices[activeService].description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {mainServices[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Tarifs</h4>
                    <p className="text-2xl font-bold text-yellow-600">{mainServices[activeService].pricing}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Délai</h4>
                    <p className="text-lg text-gray-700">{mainServices[activeService].delivery}</p>
                  </div>

                  <Link href="/products">
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      <Target className="w-5 h-5" />
                      Commander maintenant
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Service Process */}
<section className="py-10 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">

  {/* Décoration bulles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-10 right-16 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

    {/* IMAGE */}
    <div className="w-full">
      <img
        src="/service.jpg"
        alt="Processus de commande"
        className="w-full h-[660px] object-cover rounded-3xl shadow-xl"
      />
    </div>

    {/* TEXTE + ETAPES */}
    <div>
      <h2 
        className="text-5xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Comment ça marche
      </h2>

      <p className="text-xl text-gray-700 mb-10">
        Un processus simple et efficace en 4 étapes.
      </p>

      <div className="space-y-8">
        {serviceProcess.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-6 bg-white/70 backdrop-blur-lg border border-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              {step.step}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


      {/* ---------------- ZONES DE SERVICE ---------------- */}
<section className="relative mt-20 py-24 px-6 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">

  {/* Bulles décoratives */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>

  {/* Titre */}
  <h2
    className="text-5xl font-bold mb-16 text-center text-yellow-600 leading-tight"
    style={{ fontFamily: "Dancing Script, cursive" }}
  >
    Zones de Service
  </h2>

  <p className="text-xl text-gray-600 text-center -mt-10 mb-12">
    Nous livrons dans toute la région de Dakar et au-delà
  </p>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {zonesService.map((zone, index) => (
      <div
        key={index}
        className="bg-white/70 backdrop-blur-xl border border-yellow-100 p-10 rounded-3xl shadow-xl hover:scale-[1.03] transition-all relative text-center"
      >
      
        {/* Icône centrée */}
        <div className={`w-20 h-20 ${zone.color} text-white flex items-center justify-center rounded-full text-4xl absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg`}>
          <zone.icon className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-800">
          {zone.zone}
        </h3>

        <p className={`text-gray-600 text-lg leading-relaxed ${zone.color}`}>
          {zone.delay}
        </p>

      </div>
    ))}
  </div>
</section>


      {/* Additional Services */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600">
              Des avantages exclusifs pour nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r mt-12 from-yellow-50 to-yellow-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-600" />
          <h2 className="text-4xl font-bold mb-4">
            Prêt à découvrir nos services ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous dès maintenant pour un devis personnalisé ou pour discuter de vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Demander un devis
            </a>
            <a
              href="https://wa.me/221771234567"
              className="border-2 border-yellow-600 bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
            >
              WhatsApp immédiat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}