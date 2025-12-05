import {
  ChartBarIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { 
      value: "10K+", 
      label: "Utilisateurs actifs",
      icon: UserGroupIcon,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      value: "2M FCFA", 
      label: "Économisés ensemble",
      icon: CurrencyDollarIcon,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      value: "4.8/5", 
      label: "Satisfaction client",
      icon: SparklesIcon,
      color: "from-purple-500 to-pink-600"
    },
    { 
      value: "2.3s", 
      label: "Temps d'analyse",
      icon: ClockIcon,
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: ChartPieIcon,
      title: "Tableau de bord intelligent",
      description: "Vision claire de ton argent en temps réel avec des graphiques interactifs. Tous tes comptes TMoney, Flooz et espèces synchronisés automatiquement.",
      color: "emerald"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Gestion des budgets",
      description: "Définis tes limites par catégorie avec des alertes intelligentes. Reste dans le vert et optimise tes dépenses mensuelles.",
      color: "blue"
    },
    {
      icon: SparklesIcon,
      title: "Objectifs financiers",
      description: "Épargne pour tes projets avec un suivi détaillé. Laptop, voyage, formation... on t'accompagne jusqu'à la réussite.",
      color: "purple"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Suivi des dettes",
      description: "N'oublie plus jamais qui tu dois rembourser. Rappels automatiques et historique complet de toutes tes transactions.",
      color: "orange"
    },
    {
      icon: ChartBarIcon,
      title: "Analytics avancées",
      description: "Comprends tes habitudes financières avec des rapports détaillés. Graphiques interactifs et insights personnalisés.",
      color: "pink"
    },
    {
      icon: BellAlertIcon,
      title: "Alertes intelligentes",
      description: "Reçois des notifications avant de dépasser ton budget. Notre IA te prévient des dépenses inhabituelles.",
      color: "teal"
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheckIcon,
      title: "Sécurisé à 100%",
      description: "Encryption de niveau bancaire. Tes données sont protégées par les standards les plus stricts de l'industrie."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Multi-plateformes",
      description: "Accède à tes finances partout : mobile, tablette, desktop. Synchronisation automatique en temps réel."
    },
    {
      icon: LockClosedIcon,
      title: "Confidentialité totale",
      description: "Nous ne vendons jamais tes données. Ta vie privée est notre priorité absolue et non négociable."
    }
  ];

  const testimonials = [
    {
      name: "Koffi A.",
      role: "Étudiant en informatique",
      content: "Grâce à MyFinance, j'ai économisé 50 000 F en 3 mois pour mon laptop ! L'interface est intuitive et les graphiques m'aident vraiment à visualiser mes progrès.",
      avatar: "KA",
      rating: 5,
      savings: "+50K FCFA"
    },
    {
      name: "Ama D.",
      role: "Auto-entrepreneuse",
      content: "Je gère maintenant mes revenus d'entreprise et mes finances personnelles facilement. Les rapports mensuels sont un vrai plus pour ma comptabilité.",
      avatar: "AD",
      rating: 5,
      savings: "+120K FCFA"
    },
    {
      name: "Yao K.",
      role: "Jeune salarié",
      content: "Plus besoin de galèrer avec Excel ! MyFinance automatise tout et me fait gagner au moins 2h par semaine. Le ROI est incroyable.",
      avatar: "YK",
      rating: 5,
      savings: "+80K FCFA"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Crée ton compte",
      description: "Inscription en 2 minutes. Email, mot de passe et c'est parti. Aucune carte bancaire requise pour commencer.",
      icon: UserGroupIcon
    },
    {
      number: "02",
      title: "Configure tes sources",
      description: "Ajoute tes comptes TMoney, Flooz et tes revenus. Notre système synchronise tout automatiquement.",
      icon: CurrencyDollarIcon
    },
    {
      number: "03",
      title: "Suis tes dépenses",
      description: "Enregistre chaque transaction en un clic. Notre IA catégorise automatiquement tes dépenses.",
      icon: ChartBarIcon
    },
    {
      number: "04",
      title: "Atteins tes objectifs",
      description: "Consulte tes analytics et progresse vers la liberté financière avec des conseils personnalisés.",
      icon: SparklesIcon
    }
  ];

  return (
    <div className="bg-white">
      
      {/* ============ STATS SECTION AMÉLIORÉE ============ */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 relative overflow-hidden">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES SECTION AVEC TABS ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tout ce dont tu as besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des outils puissants et simples conçus pour les jeunes qui veulent prendre le contrôle total de leurs finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Effet de survol avec gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                  
                  {/* Flèche animée au survol */}
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">En savoir plus</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POURQUOI NOUS CHOISIR ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi MyFinance ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La confiance et la sécurité au cœur de notre mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="absolute -top-6 left-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMENT ÇA MARCHE - TIMELINE MODERNE ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              4 étapes simples pour reprendre le contrôle
            </p>
          </div>

          <div className="relative">
            {/* Ligne de connexion */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Numéro et icône */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl font-bold text-emerald-500 opacity-20">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS AVEC CARDS AMÉLIORÉES ============ */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Témoignages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ils ont transformé leurs finances
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 10 000 jeunes nous font confiance chaque jour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-500 relative overflow-hidden"
              >
                {/* Badge d'économies */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-100 rounded-full">
                  <span className="text-xs font-bold text-emerald-700">{testimonial.savings}</span>
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SparklesIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-base italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL AVEC DESIGN MODERNE ============ */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background avec dégradé et motifs */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à transformer<br />tes finances ?
          </h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoins plus de 10 000 jeunes qui ont déjà repris le contrôle de leur argent avec MyFinance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Commencer Gratuitement
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Voir la démo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-50">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-6 w-6" />
              <span className="font-medium">Essai gratuit 30 jours</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-emerald-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-6 w-6" />
              <span className="font-medium">Sans engagement</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-emerald-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-6 w-6" />
              <span className="font-medium">Annulation en 1 clic</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}