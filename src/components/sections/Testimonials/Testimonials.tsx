import {
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';
import {
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aïcha Mensah",
      role: "Étudiante en Marketing",
      age: "22 ans",
      image: "AM",
      quote: "Avant MyFinance, je finissais toujours mon mois à découvert. Maintenant, j'arrive même à économiser 15 000 FCFA par mois pour mes projets !",
      rating: 5,
      color: "bg-blue-500"
    },
    {
      name: "Koffi Adama",
      role: "Développeur Junior",
      age: "24 ans",
      image: "KA",
      quote: "L'intégration TMoney/Flooz change tout ! Je vois exactement où part mon argent et j'ai déjà économisé pour mon nouveau laptop.",
      rating: 5,
      color: "bg-emerald-500"
    },
    {
      name: "Ama Koné",
      role: "Auto-entrepreneuse",
      age: "23 ans",
      image: "AK",
      quote: "Je gère ma petite boutique en ligne et MyFinance m'aide à séparer mes finances perso et pro. C'est devenu indispensable !",
      rating: 5,
      color: "bg-purple-500"
    },
    {
      name: "Jean-Marc Bah",
      role: "Étudiant en Médecine",
      age: "21 ans",
      image: "JB",
      quote: "Les alertes budget m'ont sauvé plusieurs fois ! Maintenant je sais quand je dépense trop en sorties et je peux m'ajuster.",
      rating: 5,
      color: "bg-orange-500"
    },
    {
      name: "Fatou Diallo",
      role: "Graphiste freelance",
      age: "25 ans",
      image: "FD",
      quote: "Mes revenus varient chaque mois. MyFinance m'aide à planifier et à toujours garder une réserve de sécurité. Top !",
      rating: 5,
      color: "bg-pink-500"
    },
    {
      name: "Seyni Touré",
      role: "Commercial",
      age: "23 ans",
      image: "ST",
      quote: "J'ai atteint mon objectif d'épargne en 6 mois grâce aux rappels et au suivi. MyFinance m'a vraiment aidé à être discipliné.",
      rating: 5,
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ils ont transformé leurs finances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rejoins des milliers de jeunes qui ont repris le contrôle de leur argent avec MyFinance
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-white via-emerald-50/20 to-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header avec avatar et infos */}
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar avec initiales */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.image}
                  </span>
                </div>

                {/* Nom et rôle */}
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.age}
                  </p>
                </div>
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Citation */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats en bas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white via-emerald-50/30 to-white border border-emerald-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              2 500+
            </div>
            <p className="text-gray-600 font-medium">
              Utilisateurs actifs
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white via-emerald-50/30 to-white border border-emerald-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              85%
            </div>
            <p className="text-gray-600 font-medium">
              Atteignent leurs objectifs
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white via-emerald-50/30 to-white border border-emerald-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              4.8/5
            </div>
            <p className="text-gray-600 font-medium">
              Note moyenne
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Prêt à écrire ta success story ?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            <SparklesIcon className="h-5 w-5" />
            Commence gratuitement
          </button>
        </div>
      </div>
    </section>
  );
}