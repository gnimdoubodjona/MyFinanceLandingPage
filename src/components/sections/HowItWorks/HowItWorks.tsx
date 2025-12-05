import {
  UserPlusIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  ChartBarSquareIcon,
  SparklesIcon
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
    <section className="py-24 px-6 bg-white">
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

        {/* Étapes avec ligne verticale connectée */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative flex gap-8 pb-16 last:pb-0">
                {/* Ligne verticale de connexion */}
                {!isLast && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-emerald-100"></div>
                )}

                {/* Cercle numéroté */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Contenu de l'étape avec card */}
                <div className="flex-1 group">
                  <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-white via-emerald-50/20 to-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      {/* Icône */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                          <IconComponent className="h-8 w-8 text-emerald-600" />
                        </div>
                      </div>

                      {/* Texte */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Prêt à transformer ta gestion financière ?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Commencer maintenant
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Gratuit • Sans carte bancaire • Prêt en 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}