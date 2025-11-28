"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Award, 
  Users, 
  Leaf, 
  MapPin, 
  Calendar,
  Target,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react";

export default function About() {
  const timelineEvents = [
    {
      year: "Juin 2012",
      title: "Les débuts",
      description: "Fondation de Diallo Chicken par M. Thierno Diallo avec quelques dizaines de poulets dans leur ferme familiale à Yeumbeul."
    },
    {
      year: "Decembre 2014", 
      title: "Premier expansion",
      description: "Extension de la ferme et introduction du système d'élevage en plein air pour garantir le bien-être animal."
    },
    {
      year: "Mai 2020",
      title: "Certification bio",
      description: "Obtention de la certification agriculture biologique et création du premier point de vente direct."
    },
    {
      year: "Avril 2025",
      title: "Transformation digitale",
      description: "Lancement de la plateforme en ligne pour permettre aux clients de commander facilement depuis chez eux."
    },
    {
      year: "Juillet 2025",
      title: "Partenariats stratégiques",
      description: "Développement de partenariats avec les restaurants locaux et les grandes surfaces pour élargir notre distribution."
    },
    {
      year: "Octobre 2025",
      title: "Leader du marché",
      description: "Aujourd'hui, nous sommes reconnus comme l'un des principaux producteurs de volaille de qualité au Sénégal."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion & Dévouement",
      description: "Une équipe passionnée qui travaille avec cœur pour vous offrir les meilleurs produits."
    },
    {
      icon: Leaf,
      title: "Écologie & Nature",
      description: "Engagement pour un élevage respectueux de l'environnement et du bien-être animal."
    },
    {
      icon: Shield,
      title: "Qualité & Sécurité",
      description: "Standards de qualité stricts pour garantir des produits sûrs et délicieux."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Fierté de soutenir l'économie locale et les familles de notre région."
    }
  ];

  const stats = [
    { number: "10+", label: "Années d'expérience", icon: Calendar },
    { number: "10,000+", label: "Clients satisfaits", icon: Users },
    { number: "20+", label: "Employés dévoués", icon: Users },
    { number: "98%", label: "Taux de satisfaction", icon: Award }
  ];

  return (
    <main className="w-full">
      
     {/* Hero Section */}
<section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-4 overflow-hidden">
  
  {/* Background Decorations */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Decorative circles */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-52 h-52 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>

    {/* Chicken Silhouette */}
    <div className="absolute -bottom-10 -left-10 opacity-20 rotate-12">
      <img src="/propos.jpg" alt="" className="w-80 h-auto" />
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
        Notre Histoire
      </h1>

      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Depuis plus de <strong>15 ans</strong>, <span className="text-yellow-600 font-semibold"> Diallo Chicken </span> 
        s’engage à offrir une volaille fraîche, locale et élevée avec soin.  
        Nous mettons au cœur de notre mission : la <strong>qualité</strong>, 
        la <strong>traçabilité</strong> et un <strong>savoir-faire familial</strong> transmis de génération en génération.
      </p>

      {/* Small decorative separator */}
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
    </div>
  </div>
</section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-10 rounded-3xl shadow-xl border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fournir aux familles sénégalaises des produits de volaille de la plus haute qualité, 
                tout en préservant les traditions d'élevage responsables et en soutenant notre communauté locale. 
                Nous nous engageons à offrir fraîcheur, goût authentique et transparence dans toute notre chaîne de production.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-600 to-white p-10 rounded-3xl shadow-xl border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Devenir la référence nationale de la volaille de qualité au Sénégal, 
                en innovant continuellement dans nos pratiques d'élevage tout en restant 
                fidèle à nos valeurs d'authenticité et de respect de l'environnement.
              </p>
            </div>

          </div>

          {/* Values Grid */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">Les principes qui nous guident au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline */}
<section className="py-20 px-6 mb-14 bg-gradient-to-r from-yellow-50 to-yellow-100 hidden md:block">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 
        className="text-4xl font-bold text-gray-900 mb-4" 
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Notre Parcours
      </h2>
      <p className="text-xl text-gray-600">
        De nos débuts modestes à aujourd'hui
      </p>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-300 h-full"></div>

      {timelineEvents.map((event, index) => (
        <div 
          key={index} 
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg z-10"></div>
          
          {/* Content */}
          <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-600 font-bold text-lg">
                  {event.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


      {/* Stats Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Nos Réalisations
            </h2>
            <p className="text-xl text-yellow-100">Des chiffres qui témoignent de notre engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-yellow-100">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600">Les visages qui portent notre vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Founder 1 */}
            <div className="text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <Image
                  src="/equipe1.png"
                  alt="M. Ousmane Diallo"
                  fill
                  className="rounded-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-200"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">M. Thierno Diallo</h3>
              <p className="text-yellow-600 font-semibold mb-4">Fondateur & Directeur Général</p>
              <p className="text-gray-600 leading-relaxed">
                Avec plus de 10 ans d'expérience dans l'élevage, M. Diallo a su créer une entreprise 
                respectueuse de l'environnement tout en maintenant l'excellence de ses produits.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <Image
                  src="/equipe2.png"
                  alt="Mme Aminata Diallo"
                  fill
                  className="rounded-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-200"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mme Aminata Diallo</h3>
              <p className="text-yellow-600 font-semibold mb-4">Co-fondatrice & Directrice Qualité</p>
              <p className="text-gray-600 leading-relaxed">
                Passionnée par la qualité et la sécurité alimentaire, Mme Diallo supervise 
                tous les processus de production pour garantir l'excellence de nos produits.
              </p>
            </div>

            {/* Manager */}
            <div className="text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <Image
                  src="/equipe3.png"
                  alt="M. Mamadou Sow"
                  fill
                  className="rounded-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-200"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">M. Mamadou Sow</h3>
              <p className="text-yellow-600 font-semibold mb-4">Directeur des Opérations</p>
              <p className="text-gray-600 leading-relaxed">
                Expert en logistique et distribution, M. Sow assure l'efficacité de notre 
                chaîne d'approvisionnement pour livrer des produits toujours frais.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Nous Trouver
            </h2>
            <p className="text-xl text-gray-600">Venez découvrir notre ferme et notre philosophie</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
        {/* Image de la ferme */}
        <div className="relative h-120 rounded-xl overflow-hidden shadow-xl">
          <img 
          src="/proposcontact.png" 
          alt="Notre Ferme"
          className="w-full h-full object-cover"
        />

          {/* Overlay léger pour effet pro */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-xl font-bold">Notre Ferme</p>
              <p className="text-lg">yeumbeul, Sénégal</p>
            </div>
          </div>
        </div>

            {/* Info */}
            <div className="space-y-14">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse de la Ferme</h3>
                  <p className="text-gray-600">
                    Village de Yeumbeul, Keur Massar<br />
                    Région de Dakar, Sénégal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visites & Dégustations</h3>
                  <p className="text-gray-600">
                    Nous accueillons les familles et groupes pour découvrir notre ferme. 
                    Réservation recommandée pour organiser votre visite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Équipe Locale</h3>
                  <p className="text-gray-600">
                    Plus de 20 employés locaux forment notre équipe dévouée, 
                    tous formés aux bonnes pratiques d'élevage responsable.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r mt-12 from-yellow-50 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: "Dancing Script, cursive" }}>
            Rejoignez l'Aventure Diallo Chicken
          </h2>
          <p className="text-xl text-black mb-10 leading-relaxed">
            Faites le choix de la qualité, de la fraîcheur et de l'authenticité. 
            Découvrez pourquoi des milliers de familles nous font confiance chaque jour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition shadow-lg"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/contact"
              className="border-2 border-yellow-600 bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 hover:text-yellow-700 transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}