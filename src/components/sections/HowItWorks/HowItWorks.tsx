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
            title: "Inscris-toi gratuitement",
            description: "Crée ton compte en 2 minutes avec ton email ou numéro. C'est gratuit et sans engagement.",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        },
        {
            number: "2",
            icon: Cog6ToothIcon,
            title: "Configure tes comptes",
            description: "Ajoute tes comptes TMoney/Flooz et définis tes catégories de dépenses favorites.",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        },
        {
            number: "3",
            icon: CurrencyDollarIcon,
            title: "Enregistre tes transactions",
            description: "Saisis tes dépenses quotidiennes en quelques secondes. Catégorisation automatique.",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        },
        {
            number: "4",
            icon: ChartBarSquareIcon,
            title: "Atteins tes objectifs",
            description: "Suis ton évolution, reçois des insights personnalisés et atteins tes objectifs financiers.",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-emerald-50/30 via-white to-blue-50/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
                    <SparklesIcon className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700">Simple et rapide</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Partie gauche - Texte principal */}
                    <div className="space-y-8 text-left pb-12">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Comment ça{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                                marche ?
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Prends le contrôle de tes finances en 4 étapes simples.
                            Aucune connaissance financière requise, juste quelques minutes de configuration.
                        </p>

                    </div>

                    {/* Partie droite - Cards flottantes */}
                    <div className="relative">
                        <div className="space-y-6">
                            {steps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-6 rounded-2xl border-2 border-black bg-white/80 backdrop-blur-sm hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
                                        style={{
                                            animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div key={index} className="flex gap-6 group">
                                            {/* Colonne GAUCHE : Icône + Badge étape sur la même ligne */}
                                            <div className="flex-shrink-0 flex items-start gap-3">
                                                {/* Icône */}
                                                <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className={`h-6 w-6 ${step.iconColor}`} />
                                                </div>

                                                {/* Badge Étape */}
                                                <div className="pt-1"> {/* pt-1 pour aligner verticalement avec l'icône */}
                                                    <span className="inline-block text-sm font-bold text-emerald-600  px-3 py-1 ">
                                                        Étape {step.number}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Colonne DROITE : Titre + Description */}
                                            <div className="flex-grow text-right">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                        {/* Élément décoratif en arrière-plan */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>


        </section>
    );
}