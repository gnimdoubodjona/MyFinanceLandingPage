import { 
  WalletIcon,
  SparklesIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl">
                <WalletIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                MyFinance
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ton coach financier digital. Suis tes dépenses, atteins tes objectifs et prends le contrôle de ton avenir financier.
            </p>
            
            {/* Badge sécurité */}
            <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 rounded-lg">
              <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Sécurité & Confidentialité garanties
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-emerald-600" />
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Que proposons-nous ?</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>À propos de nous</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contactez-nous</span>
                </a>
              </li>
              <li>
                <a href="#download" className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Télécharger l'app</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Fonctionnalités rapides */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <InformationCircleIcon className="h-5 w-5 text-emerald-600" />
              Fonctionnalités
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Gestion des budgets</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Suivi des dépenses</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Objectifs financiers</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Alertes intelligentes</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-emerald-600" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <a href="mailto:contact@myfinance.com" className="text-gray-600 hover:text-emerald-600 text-sm">
                    contact@myfinance.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Téléphone</p>
                  <a href="tel:+22890000000" className="text-gray-600 hover:text-emerald-600 text-sm">
                    +228 90 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Adresse</p>
                  <p className="text-gray-600 text-sm">Lomé, Togo</p>
                </div>
              </li>
            </ul> 
          </div>
        </div>
        {/* Bas du footer */}
        <div className="mt-12 pt-3 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-emerald-700">MyFinance</span> — 
            Une solution <span className="text-emerald-600">WeAutomate</span>
          </div>
          
          {/* Mentions légales */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Confidentialité
            </a>
            <a href="#terms" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#cookies" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Cookies
            </a>
          </div>
          

        </div>

        {/* App stores badges (optionnel pour plus tard) */}

      </div>
    </footer>
  );
}