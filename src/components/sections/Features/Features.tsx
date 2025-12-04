import {
  ChartBarIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Features() {
  // Données des fonctionnalités
  const features = [
    {
      icon: ChartPieIcon,
      title: "Tableau de bord intelligent",
      description: "Vision claire de ton argent en temps réel. Solde TMoney, Flooz et espèces réunis en un seul endroit."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Gestion des budgets",
      description: "Définis tes limites par catégorie et reste dans le vert. Reçois des alertes avant de dépasser."
    },
    {
      icon: SparklesIcon,
      title: "Objectifs financiers",
      description: "Épargne pour tes projets, pas à pas. Laptop, voyage, formation... on t'accompagne jusqu'au bout."
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Suivi des dettes",
      description: "N'oublie plus jamais qui tu dois rembourser. Rappels automatiques et historique complet."
    },
    {
      icon: ChartBarIcon,
      title: "Statistiques détaillées",
      description: "Comprends où part ton argent. Graphiques interactifs et rapports mensuels personnalisés."
    },
    {
      icon: BellAlertIcon,
      title: "Alertes intelligentes",
      description: "Sois notifié avant de dépasser ton budget. On te prévient quand quelque chose cloche."
    }
  ];

  // Étapes "Comment ça marche"
  const steps = [
    {
      number: "01",
      title: "Crée ton compte",
      description: "Inscription en 2 minutes. Aucune carte bancaire requise."
    },
    {
      number: "02",
      title: "Ajoute tes sources",
      description: "Configure tes comptes TMoney, Flooz et revenus mensuels."
    },
    {
      number: "03",
      title: "Suis tes dépenses",
      description: "Enregistre facilement chaque transaction au quotidien."
    },
    {
      number: "04",
      title: "Atteins tes objectifs",
      description: "Consulte tes stats et progresse vers la liberté financière."
    }
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Koffi A.",
      role: "Étudiant en informatique",
      content: "Grâce à MyFinance, j'ai économisé 50 000 F en 3 mois pour mon laptop ! Je sais enfin où part mon argent.",
      avatar: "KA"
    },
    {
      name: "Ama D.",
      role: "Auto-entrepreneuse",
      content: "Je sais enfin où part mon argent chaque mois. L'app est simple, intuitive et m'aide à rester disciplinée.",
      avatar: "AD"
    },
    {
      name: "Yao K.",
      role: "Jeune salarié",
      content: "Plus besoin de galèrer avec Excel ! MyFinance me fait gagner du temps et me rassure sur ma santé financière.",
      avatar: "YK"
    }
  ];

  // Stats
  const stats = [
    { value: "10K+", label: "Utilisateurs actifs" },
    { value: "2M FCFA", label: "Économisés ensemble" },
    { value: "4.8/5", label: "Satisfaction" },
    { value: "95%", label: "Atteignent leurs objectifs" }
  ];

  return (
    <div className="bg-white">
      
      {/* ============ SECTION FEATURES ============ */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 backdrop-blur-sm rounded-full border border-emerald-200/50 mb-4">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tout ce dont tu as besoin pour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                gérer ton argent
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils simples et puissants pensés pour les jeunes qui veulent prendre le contrôle de leurs finances.
            </p>
          </div>

          {/* Grille de fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-emerald-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION HOW IT WORKS ============ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Commence à gérer tes finances en 4 étapes simples
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Contenu */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-block lg:block">
                      <h3 className="text-5xl font-bold text-emerald-500 mb-2">{step.number}</h3>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Espace vide pour l'autre côté */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION TESTIMONIALS ============ */}
      <section className="py-20 px-6 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ils ont repris le contrôle
            </h2>
            <p className="text-xl text-gray-600">
              Rejoins des milliers de jeunes qui gèrent mieux leur argent
            </p>
          </div>

          {/* Grille de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION STATS ============ */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION CTA FINAL ============ */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à prendre le contrôle de ton argent ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Rejoins des milliers de jeunes qui gèrent mieux leurs finances avec MyFinance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Commencer Gratuitement
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-emerald-50">
            <CheckCircleIcon className="h-5 w-5" />
            <span>Gratuit pendant 30 jours • Aucune carte bancaire requise</span>
          </div>
        </div>
      </section>
    </div>
  );
}