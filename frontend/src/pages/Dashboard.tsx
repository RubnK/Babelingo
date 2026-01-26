import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login')
    }
    // Récupérer la langue sélectionnée
    const lang = localStorage.getItem('selectedLanguage') || 'fr'
    setSelectedLanguage(lang)
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) return null

  // Statistiques utilisateur simulées
  const stats = [
    { value: 19, label: 'Leçons', sublabel: 'complétées' },
    { value: 127, label: 'Points', sublabel: 'gagnés' },
    { value: 8, label: 'Jours', sublabel: 'de suite' },
    { value: 3, label: 'Niveaux', sublabel: 'débloqués' }
  ]

  const progressData = [
    { label: 'Vocabulaire', sublabel: '45 mots appris', percentage: 75 },
    { label: 'Grammaire', sublabel: '12 règles maîtrisées', percentage: 60 },
    { label: 'Expression', sublabel: '8 dialogues pratiqués', percentage: 40 }
  ]

  const getLanguageInfo = (code: string) => {
    const languages: Record<string, {name: string, flag: string}> = {
      fr: { name: 'Français', flag: '🇫🇷' },
      en: { name: 'Anglais', flag: '🇬🇧' },
      es: { name: 'Espagnol', flag: '🇪🇸' }
    }
    return languages[code] || { name: 'Français', flag: '🇫🇷' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header avec profil utilisateur */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">👤</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">
                Salut, {user.email.split('@')[0]} !
              </h1>
              <p className="text-gray-600">
                Continuons à apprendre le {getLanguageInfo(selectedLanguage).name} {getLanguageInfo(selectedLanguage).flag}
              </p>
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-900">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Section progression */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">📈</span>
            Votre progression
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {progressData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${item.percentage * 1.885} 188.5`}
                      className="text-blue-600"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid md:grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/level-selection')}
            className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Continuer l'apprentissage</h3>
                <p className="text-sm text-gray-600">Reprendre où vous vous êtes arrêté</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>

          <button className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Paramètres</h3>
                <p className="text-sm text-gray-600">Personnaliser votre expérience</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
