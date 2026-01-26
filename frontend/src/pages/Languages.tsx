import { useState } from 'react'
import { Search, Users, TrendingUp, Globe } from 'lucide-react'

export default function Languages() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const languages = [
    {
      id: 1,
      name: 'Anglais',
      flag: '🇬🇧',
      nativeName: 'English',
      speakers: '1.5 milliard',
      difficulty: 'Facile',
      category: 'Germanique',
      popularity: 95,
      courses: 15,
      description: 'La langue la plus parlée au monde, essentielle pour les affaires internationales.'
    },
    {
      id: 2,
      name: 'Espagnol',
      flag: '🇪🇸',
      nativeName: 'Español',
      speakers: '500 millions',
      difficulty: 'Facile',
      category: 'Romane',
      popularity: 88,
      courses: 12,
      description: 'Deuxième langue la plus parlée, ouvre les portes de l\'Amérique latine.'
    },
    {
      id: 3,
      name: 'Français',
      flag: '🇫🇷',
      nativeName: 'Français',
      speakers: '280 millions',
      difficulty: 'Moyen',
      category: 'Romane',
      popularity: 75,
      courses: 10,
      description: 'Langue de la diplomatie et de la culture, parlée sur 5 continents.'
    },
    {
      id: 4,
      name: 'Allemand',
      flag: '🇩🇪',
      nativeName: 'Deutsch',
      speakers: '100 millions',
      difficulty: 'Difficile',
      category: 'Germanique',
      popularity: 68,
      courses: 8,
      description: 'Langue économique majeure en Europe, importante pour les sciences.'
    },
    {
      id: 5,
      name: 'Italien',
      flag: '🇮🇹',
      nativeName: 'Italiano',
      speakers: '65 millions',
      difficulty: 'Moyen',
      category: 'Romane',
      popularity: 62,
      courses: 7,
      description: 'Langue de l\'art, de la mode et de la gastronomie italienne.'
    },
    {
      id: 6,
      name: 'Japonais',
      flag: '🇯🇵',
      nativeName: '日本語',
      speakers: '125 millions',
      difficulty: 'Très difficile',
      category: 'Japonique',
      popularity: 78,
      courses: 9,
      description: 'Langue de la technologie et de la culture pop mondiale.'
    },
    {
      id: 7,
      name: 'Chinois',
      flag: '🇨🇳',
      nativeName: '中文',
      speakers: '1.1 milliard',
      difficulty: 'Très difficile',
      category: 'Sino-tibétaine',
      popularity: 82,
      courses: 11,
      description: 'Première langue mondiale par le nombre de locuteurs natifs.'
    },
    {
      id: 8,
      name: 'Portugais',
      flag: '🇵🇹',
      nativeName: 'Português',
      speakers: '260 millions',
      difficulty: 'Moyen',
      category: 'Romane',
      popularity: 58,
      courses: 6,
      description: 'Langue officielle du Brésil et de plusieurs pays africains.'
    },
    {
      id: 9,
      name: 'Russe',
      flag: '🇷🇺',
      nativeName: 'Русский',
      speakers: '150 millions',
      difficulty: 'Difficile',
      category: 'Slave',
      popularity: 55,
      courses: 5,
      description: 'Langue de l\'espace et des sciences, parlée en Europe de l\'Est.'
    }
  ]

  const categories = ['Toutes', 'Germanique', 'Romane', 'Slave', 'Japonique', 'Sino-tibétaine']

  const filteredLanguages = languages.filter(lang => {
    const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || lang.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-700'
      case 'Moyen': return 'bg-yellow-100 text-yellow-700'
      case 'Difficile': return 'bg-orange-100 text-orange-700'
      case 'Très difficile': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explorez les Langues du Monde
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre catalogue de langues et choisissez celle qui ouvrira vos horizons
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Langues disponibles</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Apprenants actifs</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Taux de réussite</div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Rechercher une langue</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par nom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Famille de langues</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Toutes les familles</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grille des langues */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLanguages.map((language) => (
            <div key={language.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              
              {/* Header avec flag */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 text-center relative">
                <div className="text-6xl mb-3">{language.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900">{language.name}</h3>
                <p className="text-gray-600">{language.nativeName}</p>
                
                {/* Badge popularité */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold text-blue-600">
                    {language.popularity}% popularité
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Locuteurs</span>
                    <span className="font-semibold text-gray-900">{language.speakers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Famille</span>
                    <span className="font-semibold text-gray-900">{language.category}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Cours disponibles</span>
                    <span className="font-semibold text-gray-900">{language.courses}</span>
                  </div>
                </div>

                {/* Badge difficulté */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(language.difficulty)}`}>
                    {language.difficulty}
                  </span>
                  
                  {/* Barre de popularité */}
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${language.popularity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group">
                    <span>Commencer l'apprentissage</span>
                  </button>
                  
                  <button className="w-full border-2 border-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune langue */}
        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune langue trouvée</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  )
}
