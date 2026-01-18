"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const id = params.id;

  // Articles data
  const articles = {
    "1": {
      id: 1,
      image: "/article1.jpg",
      category: "Conseils cuisine",
      date: "15 Sep 2025",
      title: "Comment reconnaître un poulet vraiment frais ?",
      excerpt: "Découvrez les signes simples pour choisir un poulet de qualité : couleur, odeur, texture et conservation.",
      author: "Diallo Chicken",
      content: "Acheter un poulet frais est essentiel pour garantir la qualité de vos repas. Voici les critères essentiels à retenir :\n\nCouleur et apparence\nUn poulet frais présente une couleur rose pâle à jaunâtre selon l'âge. Évitez les teintes verdâtres ou grises qui indiquent un produit périmé. La peau doit être légèrement humide mais non visqueuse.\n\nLa couleur est le premier indicateur visuel. Un poulet qui a perdu sa fraîcheur présentera des teintes ternes ou verdâtres. La peau doit avoir un aspect naturel, légèrement moist, mais jamais gluante.\n\nL'odeur\nUn poulet frais sent légèrement la volaille, jamais fort ou de manière déplaisante. Une odeur forte ou ammoniaquée est un signe d'alarme.\n\nL'odorat est un outil précieux. Un poulet frais a une odeur neutre, parfois légèrement métallisée, mais jamais désagréable. L'ammoniaque indique une décomposition avancée.\n\nTexture\nLa chair doit être ferme au toucher, élastique. Si elle s'enfonce sous la pression du doigt, le poulet n'est plus frais.\n\nLa texture révèle beaucoup sur la fraîcheur. Une chair ferme et élastique témoigne d'un producto récent. Évitez les chairs molles ou visqueuses.\n\nConservation\nUn poulet frais se conserve 1-2 jours au réfrigérateur (0-4°C) et jusqu'à 6 mois au congélateur.\n\nLa conservation optimale nécessite une chaîne du froid respectée. Au réfrigérateur, gardez-le dans la partie la plus froide, idéalement à 0-2°C. Au congélateur, emballez-le soigneusement pour éviter les brûlures de froid.\n\nConseils pratiques chez Diallo Chicken\nChez Diallo Chicken, nous garantissons la fraîcheur avec :\n- Contrôle qualité systématique\n- Chaîne du froid respectée\n- Élevage en plein air\n- Livraison rapide\n- Traçabilité complète\n\nChoisissez la qualité, faites confiance à Diallo Chicken!"
    },
    "2": {
      id: 2,
      image: "/article2.jpg",
      category: "Nutrition",
      date: "12 Sep 2025",
      title: "Pourquoi consommer des œufs chaque semaine ?",
      excerpt: "Riches en protéines, vitamines et oméga-3, les œufs sont un allié santé pour toute la famille.",
      author: "Diallo Chicken",
      content: "Les œufs sont considerés comme un super-aliment pour de bonnes raisons. Découvrez pourquoi les intégrer dans votre alimentation quotidienne est essentiel :\n\nValeur nutritionnelle exceptionnelle\nLes œufs contiennent tous les acides aminés essentiels. Ils sont riches en protéines de haute qualité (12g par œuf), en vitamines A, D, E, B12, et en minéraux comme le fer et le zinc.\n\nLes protéines des œufs sont dites 'complètes' car elles contiennent tous les acides aminés indispensables dans les bonnes proportions. C'est rare dans l'alimentation et fait des œufs une protéine de référence.\n\nBénéfices pour la santé\n- Renforce le système immunitaire grâce aux vitamines A et E\n- Améliore la concentration grâce aux oméga-3\n- Maintient la santé des os grâce à la vitamine D\n- Favorise la satiété pour mieux gérer son poids\n- Protège la vue avec la lutéine et la zéaxanthine\n\nLa choline présente dans les œufs est essentielle pour le développement du cerveau chez les enfants et le maintien des fonctions cognitives chez les adultes.\n\nOméga-3 : pourquoi c'est important\nLes œufs enrichis en oméga-3 (comme ceux de nos poules élevées en plein air) contribuent à :\n- Réduire l'inflammation\n- Améliorer la santé cardiovasculaire\n- Optimiser les fonctions cérébrales\n- Maintenir une peau saine\n\nRecettes faciles et délicieuses\nLes œufs se consomment de multiples façons : brouillés, pochés, durs, en omelette, à la coque... Variez les préparations pour un plaisir constant !\n\nPetits-déjeuners énergétiques\n- Œufs brouillés aux épinards\n- Omelette aux champignons\n- Œuf poché sur toast complet\n- Œuf dur en salade\n\nDéjeuners et dîners équilibré\n- Salade César avec œuf mollet\n- Œuf poché sur asperges\n- Omelette aux herbes\n- Œuf au four avec tomate\n\nPourquoi choisir les œufs Diallo Chicken ?\nNos œufs frais garantissent :\n- Fraîcheur optimale (pondus depuis moins de 7 jours)\n- Poules élevées en plein air\n- Alimentation naturelle\n- Pas d'antibiotiques ni d'hormones\n- Contrôle qualité rigoureux\n\nIntégrez dès maintenant les œufs Diallo Chicken dans votre alimentation quotidienne !"
    },
    "3": {
      id: 3,
      image: "/article3.png",
      category: "Recettes",
      date: "10 Sep 2025",
      title: "3 recettes faciles avec du poulet de chair",
      excerpt: "Poulet rôti, Yassa simple, grillades épicées : découvrez des recettes rapides et économiques.",
      author: "Diallo Chicken",
      content: "Découvrez 3 recettes simples et délicieuses pour cuisiner votre poulet Diallo Chicken avec plaisir et facilité :\n\n**1. Poulet rôti traditionnel sénégalais**\n*Temps de préparation : 20 min | Cuisson : 1h*\n\n*Ingredients :*\n- 1 poulet Diallo Chicken entier (1.5kg)\n- 2 citrons jaunes\n- 4 gousses d'ail\n- Thym frais\n- 2 feuilles de laurier\n- Sel et poivre noir\n- 2 cs d'huile d'arachide\n\n*Préparation :*\n1. Préchauffez le four à 180°C\n2. Assaisonnez le poulet intérieurement avec sel, poivre, ail haché\n3. Farcissez avec les citrons coupés en quartier, thym et laurier\n4. Badigeonnez d'huile, salez et poivrez l'extérieur\n5. Enfournez 1h en l'arrosant toutes les 20 minutes\n6. Laissez reposer 10 min avant de servir\n\nLe poulet rôti révèle toute sa saveur avec cette préparation simple mais efficace. La chair reste tendre et juteuse.\n\n**2. Yassa au poulet (recette facile express)**\n*Temps de préparation : 15 min | Cuisson : 30 min*\n\n*Ingredients :*\n- 1 poulet Diallo Chicken coupé en morceaux\n- 4 gros oignons\n- 2 citrons\n- 2 cs de moutarde forte\n- 4 cs d'huile d'arachide\n- Sel, poivre, piment de Cayenne\n- 2 gousses d’ail\n\n*Préparation :*\n1. Coupez les morceaux de poulet en deux\n2. Faites dorer les morceaux dans l'huile 10 min\n3. Ajoutez les oignons en lamelles, laissez caraméliser\n4. Dans un bol, mélangez jus de citron + moutarde + ail haché\n5. Versez cette sauce, salez, poivrez\n6. Laissez mijoter 20 min à feu moyen\n\nLe yassa est un plat convivial qui révèle la tendreté du poulet fermier. Parfait avec du riz blanc !\n\n**3. Grillades épicées africaines**\n*Temps de préparation : 30 min (marinade) | Cuisson : 25 min*\n\n*Ingredients :*\n- 8 morceaux de poulet (cuisse, escalope)\n- 2 cs d'épices cajun\n- 1 cs de piment en poudre\n- 1 cs de gingembre râpé\n- 3 cs de sauce soja\n- 3 cs d'huile\n- 1 citron vert\n- 2 gousses d’ail\n\n*Préparation :*\n1. Mélangez toutes les épices avec l'huile et la sauce soja\n2. Incisez légèrement les morceaux, badigeonnez de marinade\n3. Laissez mariner 2h minimum (idéalement 4h)\n4. Grillez 12-15 min par côté sur feu moyen-vif\n5. Arrosez du jus de citron vert avant de servir\n\nCette recette met en valeur les épices et la texture du poulet fermier. Accompagnez de légumes grillés !\n\n**Conseils du chef Diallo Chicken :**\n\n*Pour un poulet toujours tendre :*\n- Ne pas trop saler avant cuisson (cela resserre les fibres)\n- Ne pas trop cuisson (45 min par kg en moyenne)\n- Laissez reposer après cuisson pour que les jus se redistribuent\n\n*Astuces économies :*\n- Utilisez les carcasse pour faire du bouillon\n- Les abattis sont délicieux en sauce\n- Gardez les peaux pour faire du saindoux naturel\n\n*Conservation optimale :*\n- Cuisson immédiate recommandée\n- Si non consommé, conserver 2-3 jours au frigo\n- Peut être congelé 3 mois\n\nCes recettes simples révèlent toute la qualité et la saveur de votre poulet Diallo Chicken. Cuisinez avec plaisir !"
    },
    "4": {
      id: 4,
      image: "/article4.jpg",
      category: "Agriculture locale",
      date: "08 Sep 2025",
      title: "Pourquoi privilégier la volaille locale ?",
      excerpt: "Fraîcheur garantie, circuit court, soutien aux éleveurs : voici les avantages de la volaille locale.",
      author: "Diallo Chicken",
      content: "Choisir la volaille locale, c'est faire le choix de la qualité, de l'éthique et de l'impact positif sur votre communauté :\n\n**Fraîcheur incomparable et qualité supérieure**\nLa volaille locale arrive directement de la ferme, sans temps de transport prolongé. Cela garantit une fraîcheur et une qualité gustative supérieures aux produits importés.\n\nLa fraîcheur est le premier critère de qualité. Un poulet qui parcourt moins de distance preserve toutes ses qualités nutritionnelles et gustatives. La texture reste plus tendre, les saveurs plus authentiques.\n\n**Circuit court = traçabilité et contrôle qualité**\nMoins de transport signifie moins de stress pour les animaux et un produit final plus sain. La chaîne du froid est respectée du producteur au consommateur.\n\nLa traçabilité est totale avec la volaille locale. Vous connaissez l'origine, les méthodes d'élevage, l'alimentation. C'est la garantie d'un produit sain et éthique.\n\n**Soutien à l'économie locale et aux familles d'éleveurs**\nEn achetant local, vous soutenez les familles d'éleveurs de votre région, contribuez à maintenir l'emploi rural et preservez les savoir-faire traditionnels.\n\nVotre choix a un impact direct :\n- Maintien de l'emploi rural\n- Soutien aux familles locales\n- Préservation des traditions d'élevage\n- Développement économique régional\n\n**Impact environnemental positif**\nMoins de transport = moins d'émissions de CO2. Un choix éco-responsable pour préserver notre planète.\n\n*Réduction de l'empreinte carbone :*\n- Transport local : 0-50 km vs 1000+ km pour l'import\n- Émissions CO2 divisées par 20\n- Emballages réduits\n- Chaîne logistique optimisée\n\n**Qualité nutritionnelle supérieure**\nLes volailles locales, élevées en plein air, ont une alimentation plus variée et naturelle, ce qui améliore leur profil nutritionnel.\n\n*Avantages nutritionnels :*\n- Plus d'oméga-3 (élevage en plein air)\n- Vitamines A et E plus élevées\n- Protéines de meilleure qualité\n- Pas d'antibiotiques ni d'hormones\n- Alimentation naturelle aux grains\n\n**Transparence totale et relations directes**\nChez Diallo Chicken, nous offrons une transparence totale :\n- Visites de ferme possibles\n- Rencontre avec les eleveurs\n- Connaissance de l'origine exacte\n- Traçabilité complète\n- Engagement qualité visible\n\n**Avantages pour votre santé**\n- Produits plus frais = plus de nutriments\n- Pas de conservateurs ajoutés\n- Moins d'allergies (moins de résidus chimiques)\n- Meilleure digestibilité\n- Goût authentique\n\n**L'engagement Diallo Chicken :**\n\n*Nos valeurs :*\n- Élevage éthique et respectueux\n- Alimentation 100% naturelle\n- Bien-être animal prioritaire\n- Innovation au service de la qualité\n- Relation de confiance avec nos clients\n\n*Nos engagements qualité :*\n- Contrôle à chaque étape\n- Chaîne du froid respectée\n- Livraison ultra-rapide\n- Service client dédié\n- Garantie fraîcheur\n\n**Comment reconnaît-on la vraie volaille locale ?**\n- Étiquette d'origine claire\n- Logo de l'éleveur local\n- Délai de livraison court\n- Élevage en plein air mentionné\n- Absence d'antibiotiques certifiée\n\n**L'avenir de l'agriculture locale**\nEn choosing la volaille locale, vous participez à :\n- La pérennité de l'agriculture familiale\n- La préservation de la biodiversité\n- La souveraineté alimentaire\n- L'innovation agricole locale\n\nChoisissez la qualité, privilégiez le local, madez confiance à Diallo Chicken pour une volaille authentique et responsable !"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Article Content */}
      <article className="px-6 py-12">
        {/* Article Header */}
        <div className="mb-8">
          {/* Category Badge */}
          <span className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-gray-600 mb-8">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Par {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto relative h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Excerpt */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <p className="text-xl text-gray-700 leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none text-gray-700">
            {article.content.split('\n\n').map((paragraph, index) => {
              // Section headers
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                    {paragraph.slice(2, -2)}
                  </h2>
                );
              }
              
              // List items
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 mb-2 ml-6">
                    {paragraph.slice(2)}
                  </li>
                );
              }
              
              // Regular paragraphs
              return (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-yellow-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez apprécié cet article ?
          </h3>
          <p className="text-gray-600 mb-6">
            Découvrez tous nos produits frais et nos conseils culinaires !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Voir nos produits
            </Link>
            <Link
              href="/"
              className="bg-white text-yellow-600 border-2 border-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              Lire d'autres articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}