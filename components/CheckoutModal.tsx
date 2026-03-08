"use client";

import { useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: (data: CheckoutFormData) => void;
  total: number;
  cart: any[];
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  neighborhood: string;
  deliveryNotes: string;
}

const neighborhoods = [
  { name: "Yeumbeul", deliveryFee: 1000 },
  { name: "Keur Massar", deliveryFee: 1500 },
  { name: "Autres quartiers de Dakar", deliveryFee: 3000 },
];

// Fonction pour calculer les frais de livraison selon le nombre de poulets
const calculateDeliveryFee = (neighborhood: string, cartItems: any[]) => {
  // Compter le nombre de poulets dans le panier
  const pouletCount = cartItems.reduce((count: number, item: { name: string; quantity: number }) => {
    if (item.name.toLowerCase().includes('poulet')) {
      return count + item.quantity;
    }
    return count;
  }, 0);

  // Tarifs spéciaux pour Yeumbeul et Keur Massar
  if (neighborhood === "Yeumbeul") return 1000;
  if (neighborhood === "Keur Massar") return 1500;

  // Pour "Autres quartiers de Dakar" et autres quartiers : appliquer la logique dynamique
  if (pouletCount >= 5) {
    return 2000; // 2000 FCFA si 5 poulets ou plus
  }
  
  return 3000; // 3000 FCFA si moins de 5 poulets
};

export default function CheckoutModal({ isOpen, onClose, onCheckout, total, cart }: CheckoutModalProps) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    neighborhood: "",
    deliveryNotes: "",
  });
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<{name: string; deliveryFee: number} | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedNeighborhood) {
      onCheckout({
        ...formData,
        neighborhood: selectedNeighborhood.name,
      });
    }
  };

  const handleNeighborhoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = neighborhoods.find(n => n.name === e.target.value);
    setSelectedNeighborhood(selected || null);
  };

  // Utiliser la nouvelle logique de calcul des frais de livraison
  const deliveryFee = selectedNeighborhood ? calculateDeliveryFee(selectedNeighborhood.name, cart) : 0;
  const totalWithDelivery = total + deliveryFee;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Finalisez votre commande facilement</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Votre nom complet"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="77 123 45 67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse complète *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="N° de rue, immeuble, résidence..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quartier *
              </label>
              <select
                required
                value={selectedNeighborhood?.name || ""}
                onChange={handleNeighborhoodChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre quartier</option>
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood.name} value={neighborhood.name}>
                    {neighborhood.name} - {neighborhood.deliveryFee.toLocaleString()} FCFA
                  </option>
                ))}
              </select>
              
              {/* Message informatif sur les tarifs */}
              <div className="mt-2 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  Profitez de la livraison à seulement 2000 FCFA partout dans les autres quartiers de Dakar dès 5 poulets achetés !
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes pour la livraison (optionnel)
              </label>
              <textarea
                value={formData.deliveryNotes}
                onChange={(e) => setFormData({...formData, deliveryNotes: e.target.value})}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Porte à gauche, interphone cassé, etc."
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <div className="flex justify-between mb-2">
                <span>Sous-total :</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Frais de livraison :</span>
                <span>{deliveryFee > 0 ? `${deliveryFee.toLocaleString()} FCFA` : "À sélectionner"}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200 mt-2">
                <span>Total :</span>
                <span>{totalWithDelivery > total ? `${totalWithDelivery.toLocaleString()} FCFA` : "-"}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={!selectedNeighborhood}
                className="flex-1 px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Valider la commande
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
