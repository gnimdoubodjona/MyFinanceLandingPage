import {
    SparklesIcon,
    CheckCircleIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    RocketLaunchIcon,
    AdjustmentsHorizontalIcon,
    FunnelIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function Hero() {
    // Données pour le graphique avec des valeurs plus variées pour un meilleur effet visuel
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Partie gauche - Texte */}
                    <div className="space-y-8 text-left relative z-20 bg-white pr-16 -mr-16">
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

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <RocketLaunchIcon className="h-5 w-5" />
                                Commencer Gratuitement
                            </button>
                        </div>
                    </div>

                    {/* Partie droite - Dashboard mockup */}
                    <div className="relative lg:-ml-24 z-10">
                        <div className="flex gap-3 mb-4 justify-end">
                            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-emerald-500 transition-colors flex items-center gap-2">
                                <AdjustmentsHorizontalIcon className="h-4 w-4" />
                                Filter
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-emerald-500 transition-colors flex items-center gap-2">
                                <FunnelIcon className="h-4 w-4" />
                                Filter
                            </button>
                        </div>

                        {/* Carte principale avec le graphique */}
                        <div className="p-8 border border-gray-200 bg-white rounded-xl">
                            <ResponsiveContainer width="100%" height={350}>
                                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorEconomies" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis 
                                        dataKey="month" 
                                        stroke="#9ca3af" 
                                        style={{ fontSize: '12px' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis 
                                        stroke="#9ca3af" 
                                        style={{ fontSize: '12px' }}
                                        axisLine={false}
                                        tickLine={false}
                                        domain={[0, 1000]}
                                        ticks={[0, 200, 400, 600, 800, 1000]}
                                    />
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
                                        dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="depenses"
                                        stroke="#d1d5db"
                                        strokeWidth={2}
                                        dot={{ fill: '#9ca3af', r: 4, strokeWidth: 2, stroke: 'white' }}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Cards en bas du graphique */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Card 1 - Économies totales */}
                            <div className="rounded-xl border border-gray-200 shadow-sm p-6 text-left bg-white">
                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-sm text-gray-500">Économies totales</p>
                                    <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                                </div>
                                <p className="text-3xl font-bold text-gray-900">2 900€</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm text-emerald-600 font-medium">+12.5%</span>
                                    <span className="text-sm text-gray-500">ce mois</span>
                                </div>
                            </div>

                            {/* Card 2 - Dépenses */}
                            <div className="rounded-xl border border-gray-200 shadow-sm p-6 text-left bg-white">
                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-sm text-gray-500">Dépenses totales</p>
                                    <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <p className="text-3xl font-bold text-gray-900">4 810€</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-sm text-gray-600 font-medium">-8.2%</span>
                                    <span className="text-sm text-gray-500">vs mois dernier</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}