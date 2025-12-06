import {
  AcademicCapIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function TargetAudience() {
  const profiles = [
    {
      icon: AcademicCapIcon,
      title: "Étudiants",
      subtitle: "Gère ta bourse intelligemment",
      description: "Tu reçois une bourse ou une allocation mensuelle ? MyFinance t'aide à planifier tes dépenses quotidiennes, éviter les fins de mois difficiles et économiser pour tes projets.",
      features: [
        "Suivi des dépenses quotidiennes",
        "Planification de la bourse mensuelle",
        "Économies pour les projets étudiants"
      ],
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BriefcaseIcon,
      title: "Jeunes salariés",
      subtitle: "Optimise ton salaire",
      description: "Tu viens de décrocher ton premier job ? Apprends à gérer ton salaire, créer une épargne de sécurité et atteindre tes objectifs financiers à court et long terme.",
      features: [
        "Budget mensuel par catégorie",
        "Épargne automatique",
        "Objectifs financiers à long terme"
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: RocketLaunchIcon,
      title: "Auto-entrepreneurs",
      subtitle: "Sépare perso et pro",
      description: "Tu gères ta petite activité ? Suis tes entrées et sorties, sépare tes finances personnelles de ton business et prends de meilleures décisions d'investissement.",
      features: [
        "Suivi des revenus variables",
        "Gestion des dépenses business",
        "Analyse de rentabilité"
      ],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <SparklesIcon className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Pour qui ?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            MyFinance est fait pour toi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Que tu sois étudiant, jeune salarié ou entrepreneur, nous avons les outils adaptés à ta situation
          </p>
        </div>

        {/* Grille des profils */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-white via-emerald-50/20 to-white hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icône avec gradient */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${profile.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Titre et sous-titre */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4">
                    {profile.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {profile.description}
                  </p>

                  {/* Features avec checkmarks */}
                  <ul className="space-y-3">
                    {profile.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                        </div>
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bonus en bas */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl border border-emerald-200 bg-gradient-to-b from-white via-emerald-50/30 to-white max-w-3xl">
            <p className="text-xl text-gray-900 font-semibold mb-4">
              Et si tu es entre 18 et 25 ans...
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              MyFinance est spécialement conçu pour ta génération. Interface moderne, intégration TMoney/Flooz, et un ton qui te parle vraiment.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
              Rejoins-nous gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}