"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Navigation,
  User,
  Building,
  Package
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    messageType: "general",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const messageTypes = [
    { value: "general", label: "Demande générale", icon: MessageCircle },
    { value: "order", label: "Commande spéciale", icon: Package },
    { value: "wholesale", label: "Vente en gros", icon: Building },
    { value: "complaint", label: "Réclamation", icon: CheckCircle },
    { value: "partnership", label: "Partenariat", icon: User }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+221 77 780 13 19",
      subContent: "+221 77 977 32 17",
      action: "tel:+221777801319",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "diallochicken@gmail.com",
      subContent: "ventes@diallochicken.com",
      action: "mailto:contact@diallochicken.com",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Yeumbeul, Region de Dakar",
      subContent: "Dakar, Sénégal",
      action: "#",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Sam: 7h00 - 19h00",
      subContent: "Dimanche: 8h00 - 17h00",
      action: "#",
      color: "bg-yellow-600 text-yellow-100"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:bg-blue-600",
      followers: "12.5K"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "#",
      color: "hover:bg-pink-600",
      followers: "8.2K"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#", 
      color: "hover:bg-blue-400",
      followers: "5.1K"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "hover:bg-red-600", 
      followers: "2.8K"
    }
  ];

  const faqs = [
    {
      question: "Quelle est votre zone de livraison ?",
      answer: "Nous livrons dans tout Dakar. Pour les zones rurales, contactez-nous pour arrangements spéciaux."
    },
    {
      question: "Combien de temps pour la livraison ?",
      answer: "Livraison express en 2h maximum pour les commandes passées avant 17h. Le lendemain pour les commandes tardives."
    },
    {
      question: "Proposez-vous des prix de gros ?",
      answer: "Oui, nous offrons des tarifs dégressifs pour les restaurants, supermarchés et commandes importantes. Contactez notre service commercial."
    },
    
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "L'objet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Formulaire soumis:", formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        messageType: "general",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-16 overflow-hidden">
  
  {/* Background Decorations */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Decorative circles */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-52 h-52 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>

    {/* Contact Image */}
    <div className="absolute -bottom-10 -left-10 opacity-20 rotate-12">
      <img src="/contact.jpg" alt="Contact" className="w-80 h-auto" />
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    
    {/* Glassmorphism Card */}
    <div className="backdrop-blur-xl bg-white/60 border border-green-200/40 rounded-3xl shadow-xl p-10 md:p-16 mx-auto">
      
      <h1 
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm"
        style={{ fontFamily: 'Dancing Script, cursive' }}
      >
        Contactez-nous
      </h1>

      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Une question ou une commande spéciale ? <span className="text-yellow-600 font-semibold">Notre équipe </span> 
        est là pour vous accompagner et répondre à toutes vos demandes avec rapidité et professionnalisme.
      </p>

      {/* Small decorative separator */}
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
    </div>
  </div>
</section>


      {/* Contact Info Cards */}
      <section className="bg-white py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.subContent}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre nom complet"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Téléphone et Type de message */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+221 XX XXX XX XX"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Type de demande
                      </label>
                      <select
                        name="messageType"
                        value={formData.messageType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        {messageTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Objet */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Objet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Résumé de votre demande"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez votre demande en détail..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Navigation className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Notre Localisation</h3>
                    <p className="text-green-100">Km 12, Route de yeumbeul, Dakar</p>
                  </div>
                  
                  {/* Map markers */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Actions rapides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+221337123456"
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Appeler</div>
                      <div className="text-sm text-gray-600">+221 77 780 13 19</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/221771234567"
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-600">+221 77 977 32 17</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Suivez-nous
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:text-white transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm opacity-75">{social.followers} abonnés</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Dancing Script, cursive" }}>
              Questions fréquentes
            </h2>
            <p className="text-gray-600 text-lg">
              Retrouvez les réponses aux questions les plus posées par nos clients.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <details className="group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      <div className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Besoin d'une réponse immédiate ?
          </h2>
          <p className="text-xl text-black mb-8">
            Appelez-nous directement ou écrivez-nous sur WhatsApp pour une réponse instantanée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221337123456"
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/221771234567"
              className="border-2 border-yellow-600 bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 hover:text-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
