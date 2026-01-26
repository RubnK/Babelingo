import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function LanguageSelection() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const languages: Language[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'Anglais', flag: '🇬🇧' },
    { code: 'es', name: 'Espagnol', flag: '🇪🇸' }
  ];

  const handleNext = () => {
    if (selectedLanguage) {
      localStorage.setItem('selectedLanguage', selectedLanguage);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      {/* Header avec logo */}
      <div className="flex justify-center pt-12 pb-8">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Globe className="h-10 w-10 text-blue-600" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Babelingo
          </span>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col justify-center items-center px-4">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choisissez votre langue principale
          </h1>
          <p className="text-xl text-gray-600">
            Quelle est la langue que vous maîtrisez le mieux&nbsp;? (langue source)
          </p>
        </div>

        {/* Cartes des langues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`cursor-pointer bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                selectedLanguage === language.code
                  ? 'ring-4 ring-blue-500 bg-blue-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="text-6xl mb-4">{language.flag}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language.name}
              </h3>
              <div className={`w-6 h-6 rounded-full mx-auto border-2 ${
                selectedLanguage === language.code
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedLanguage === language.code && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Next */}
        <button
          onClick={handleNext}
          disabled={!selectedLanguage}
          className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
            selectedLanguage
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Continuer</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
