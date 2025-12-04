import { 
  SparklesIcon, 
  CheckCircleIcon,
   ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function Hero() {
  // Données pour le graphique
  const data = [
    { month: 'Jan', depenses: 850, economies: 400 },
    { month: 'Fev', depenses: 920, economies: 350 },
    { month: 'Mar', depenses: 650, economies: 600 },
    { month: 'Avr', depenses: 780, economies: 520 },
    { month: 'Mai', depenses: 890, economies: 450 },
    { month: 'Jun', depenses: 720, economies: 580 },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenu principal : Texte + Graphique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Partie gauche - Texte */}
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 backdrop-blur-sm rounded-full border border-emerald-200/50">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Ton coach financier personnel</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Prends le Contrôle de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                Ton Argent
              </span>{' '}
              Facilement
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Suis tes dépenses, fixe des objectifs et atteins la liberté financière avec MyFinance. 
              Simple, intelligent et toujours à tes côtés.
            </p>

            {/* penser à une petite animation ici pourque ça n'ai pas l'air trop bizarre oub */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Commencer Gratuitement
              </button>
              
            </div>

            <div className="flex items-center gap-2 text-sm text-black">
              <CheckCircleIcon className="h-5 w-4 text-emerald-500" />
              <span>Aucune carte bancaire requise • Pendant 30 jours profitez de toutes les fonctionnalités </span>
            </div>
          </div>

          {/* Partie droite - Dashboard mockup */}
          <div className="relative">
            {/* Carte principale avec le graphique */}
            <div className=" rounded-2xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Aperçu Financier</h3>
                  <p className="text-sm text-gray-500">6 derniers mois</p>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-gray-600">Économies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="text-gray-600">Dépenses</span>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorEconomies" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="economies" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fill="url(#colorEconomies)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="depenses" 
                    stroke="#d1d5db" 
                    strokeWidth={2}
                    dot={{ fill: '#9ca3af', r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>

              {/* Stats rapides dans la carte */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Économies totales</p>
                  <p className="text-2xl font-bold text-emerald-600">2 900 €</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Budget restant</p>
                  <p className="text-2xl font-bold text-gray-900">580 €</p>
                </div>
              </div>
            </div>

            {/* Badge flottant */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="text-sm font-medium">✨ +15% ce mois-ci</p>
            </div>
          </div>
        </div>




        {/* Stats en bas */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <UserGroupIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">10K+</p>
              <p className="text-sm text-gray-600">Utilisateurs actifs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <CurrencyDollarIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">2M €</p>
              <p className="text-sm text-gray-600">Économisés ensemble</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <ArrowTrendingUpIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Taux de satisfaction</p>
            </div>
          </div>
        
        
        </div> */}
      </div>
    </section>
  );
}