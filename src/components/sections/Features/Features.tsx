import {
  ChartBarIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function FeaturesPage() {
  const features = [
    {
      icon: ChartPieIcon,
      title: "Tableau de bord global",
      description: "Visualise ton solde global (TMoney + Flooz + espèces) et tes dépenses par catégorie en un coup d'œil. Graphiques intuitifs et indicateur de santé financière.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: ArrowPathIcon,
      title: "Suivi des transactions",
      description: "Ajoute facilement tes transactions, catégorise-les automatiquement et filtre par type, période ou catégorie. Tout ton historique à portée de main.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Gestion des budgets",
      description: "Crée des budgets mensuels par catégorie et reçois des alertes à 80% et 100% de consommation. Garde le contrôle total de tes dépenses.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: BanknotesIcon,
      title: "Dettes & créances",
      description: "Enregistre tes dettes et sommes prêtées avec dates d'échéance. Rappels automatiques pour ne plus jamais oublier un remboursement.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Objectifs financiers",
      description: "Définis tes objectifs (laptop, formation, voyage) avec montant cible et date. Suis ta progression avec une barre d'avancement motivante.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: ChartBarIcon,
      title: "Statistiques & analyse",
      description: "Découvre ton revenu moyen, taux d'épargne et répartition de tes dépenses essentielles vs non-essentielles. Des insights pour mieux dépenser.",
      gradient: "from-emerald-500 to-teal-600"
    },

  ];

  return (
    <div className="bg-white py-20 px-6">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Que proposons nous? </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tout ce dont tu as besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des outils puissants et simples conçus pour les jeunes qui veulent prendre le contrôle total de leurs finances
            </p>
          </div>

          {/* Grille de fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 border-2 border-black rounded-xl bg-gradient-to-b from-white via-emerald-50/30 to-white text-left hover:shadow-xl hover:border-black transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icône avec gradient */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action en bas
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Prêt à transformer ta gestion financière ?
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              <SparklesIcon className="h-5 w-5" />
              Commencer maintenant
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}