import {
  UserPlusIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  ChartBarSquareIcon,
  SparklesIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: UserPlusIcon,
      title: "Inscris-toi",
      description: "Crée ton compte en 2 minutes avec ton email ou numéro. C'est gratuit et sans engagement."
    },
    {
      number: "2",
      icon: Cog6ToothIcon,
      title: "Configure",
      description: "Ajoute tes comptes TMoney/Flooz et définis tes catégories de dépenses favorites."
    },
    {
      number: "3",
      icon: CurrencyDollarIcon,
      title: "Enregistre",
      description: "Saisis tes dépenses quotidiennes en quelques secondes. Catégorisation automatique."
    },
    {
      number: "4",
      icon: ChartBarSquareIcon,
      title: "Analyse",
      description: "Suis ton évolution, reçois des insights et atteins tes objectifs financiers."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <SparklesIcon className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Simple et rapide</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prends le contrôle de tes finances en 4 étapes simples
          </p>
        </div>

        {/* Étapes avec flèches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-start">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center relative">
                {/* Flèche entre les étapes (desktop uniquement) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-8 z-0">
                    <ArrowLongRightIcon className="h-6 w-16 text-emerald-200" />
                  </div>
                )}

                {/* Cercle avec icône et effet hover */}
                <div className="relative group mb-6 cursor-pointer">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-b from-white via-emerald-50/40 to-white border-2 border-gray-200 flex items-center justify-center group-hover:border-emerald-400 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10">
                    <IconComponent className="h-12 w-12 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  
                  {/* Badge numéro avec animation */}
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 z-20">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Glow effect en hover */}
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Contenu texte */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Séparateur décoratif */}
        <div className="flex items-center justify-center my-16">
          <div className="h-px w-32 bg-black border-2"></div>
        </div>

        {/* CTA amélioré */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Prêt à transformer ta gestion financière ?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group">
            <span>Commencer maintenant</span>
            <ArrowLongRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Gratuit • Sans carte bancaire • Prêt en 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}