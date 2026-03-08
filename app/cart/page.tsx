"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingCart, ShoppingBag, Phone } from "lucide-react";
import CheckoutModal, { CheckoutFormData } from "@/components/CheckoutModal";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const total = cart.reduce(
    (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
    0
  );

  // Fonction pour calculer les frais de livraison selon le nombre de poulets
  const calculateDeliveryFee = (neighborhood: string) => {
    // Compter le nombre de poulets dans le panier
    const pouletCount = cart.reduce((count: number, item: { name: string; quantity: number }) => {
      if (item.name.toLowerCase().includes('poulet')) {
        return count + item.quantity;
      }
      return count;
    }, 0);

    // Si plus de 5 poulets : 2000 FCFA partout à Dakar
    if (pouletCount > 5) {
      return 2000;
    }
    
    // Si moins de 5 poulets : 3000 FCFA partout à Dakar
    return 3000;
  };

  const handleCheckout = (data: CheckoutFormData) => {
    const itemsText = cart.map(item => 
      `- ${item.name} (${item.quantity} x ${formatPrice(item.price)} FCFA)`
    ).join('\n');

    // Utiliser la nouvelle logique de calcul des frais de livraison
    const deliveryFee = data.neighborhood ? calculateDeliveryFee(data.neighborhood) : 0;
    const totalWithDelivery = total + deliveryFee;

    const message = `NOUVELLE COMMANDE DE DIALLO CHICKEN\n\nClient: ${data.fullName}\nArticles commandes:\n${itemsText}\n\nSous-total: ${formatPrice(total)} FCFA\nFrais de livraison: ${formatPrice(deliveryFee)} FCFA\nTotal a payer: ${formatPrice(totalWithDelivery)} FCFA\n\nContact: ${data.phone}\nEmail: ${data.email}\nAdresse: ${data.address}\nQuartier: ${data.neighborhood}\nNotes: ${data.deliveryNotes || 'Aucune note'}`;

    window.open(`https://wa.me/221777801319?text=${encodeURIComponent(message)}`, '_blank');
    setIsCheckoutOpen(false);
  };

  // Vérifier si le panier est vide
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
        <p className="text-gray-600 mb-6">
          Ajoutez des produits pour commencer vos achats.
        </p>
        <a
          href="/products"
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700"
        >
          Voir les produits
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Mon panier</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Liste produits */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex gap-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    {formatPrice(item.price)} FCFA
                  </p>
                  <p className="font-semibold mt-3">
                    {formatPrice(item.price * item.quantity)} FCFA
                  </p>
                </div>

                {/* Quantité */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    className="p-1 border rounded"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="p-1 border rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Supprimer */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Résumé */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Résumé</h2>

          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">
              {formatPrice(total)} FCFA
            </span>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Commander
          </button>
          
          <button
            onClick={clearCart}
            className="w-full mt-4 bg-red-100 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-200"
          >
            Vider le panier
          </button>
          
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            onCheckout={handleCheckout}
            total={total}
            cart={cart}
          />
        </div>
      </div>


      {/* CTA Commande rapide */}
<section className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 py-14 rounded-xl">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Finalisez votre commande facilement
    </h2>

    <p className="text-lg text-gray-700 mb-8">
      Une question sur votre panier ou besoin d’une livraison rapide ?
      Contactez-nous directement pour une réponse immédiate.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Appel */}
      <a
        href="tel:+221337123456"
        className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Appeler maintenant
      </a>

      <a
        href="/products"
        target="_blank"
        className="border-2 border-yellow-600 bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 hover:text-yellow-700 transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Continuer mes achats
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
