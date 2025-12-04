import { 
  WalletIcon,
  SparklesIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 mx-auto mt-4 max-w-7xl
        flex items-center justify-between px-8 py-4 
        backdrop-blur-md bg-white/70 
        border border-emerald-100/50
        rounded-2xl
        transition-all duration-300
        ${isScrolled ? 'shadow-lg bg-white/80' : 'shadow-sm'}
      `}
    >
      {/* Logo avec icône */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-xl backdrop-blur-sm">
          <WalletIcon className="h-6 w-6 text-emerald-600" />
        </div>
        <p className="font-bold text-xl text-gray-900">MyFinance</p>
      </div>

      {/* Navigation sans icônes pour plus de propreté */}
      <nav>
        <ul className="flex gap-8 text-base items-center">
          <li className="text-gray-700 hover:text-emerald-600 cursor-pointer transition-colors duration-200 font-medium">
            Que proposons-nous ?
          </li>
          <li className="text-gray-700 hover:text-emerald-600 cursor-pointer transition-colors duration-200 font-medium">
            À propos de nous
          </li>
          <li className="text-gray-700 hover:text-emerald-600 cursor-pointer transition-colors duration-200 font-medium">
            Contactez-nous
          </li>
        </ul>
      </nav>

      {/* Connexion avec trait vert en dessous */}
      <div className="relative group">
        <button className="flex items-center gap-2 text-base text-gray-900 font-medium transition-colors duration-200 group-hover:text-emerald-600 pb-1">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Connexion</span>
        </button>
        {/* Trait vert animé */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></div>
      </div>
    </header>
  );
}