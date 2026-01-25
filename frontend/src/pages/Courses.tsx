import { useState } from 'react'
import { BookOpen, Clock, Star, Users, ChevronRight } from 'lucide-react'

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedLanguage, setSelectedLanguage] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'Anglais - Débutant',
      description: 'Apprenez les bases de l\'anglais avec des leçons interactives.',
      language: 'Anglais',
      level: 'Débutant',
      duration: '4 semaines',
      lessons: 20,
      students: 1250,
      rating: 4.8,
      image: '🇬🇧',
      progress: 0
    },
    {
      id: 2,
      title: 'Espagnol - Intermédiaire',
      description: 'Perfectionnez votre espagnol avec des conversations pratiques.',
      language: 'Espagnol',
      level: 'Intermédiaire',
      duration: '6 semaines',
      lessons: 30,
      students: 890,
      rating: 4.9,
      image: '🇪🇸',
      progress: 0
    },
    {
      id: 3,
      title: 'Français - Avancé',
      description: 'Maîtrisez les subtilités de la langue française.',
      language: 'Français',
      level: 'Avancé',
      duration: '8 semaines',
      lessons: 40,
      students: 654,
      rating: 4.7,
      image: '🇫🇷',
      progress: 0
    },
    {
      id: 4,
      title: 'Allemand - Débutant',
      description: 'Découvrez l\'allemand à travers des exercices ludiques.',
      language: 'Allemand',
      level: 'Débutant',
      duration: '5 semaines',
      lessons: 25,
      students: 432,
      rating: 4.6,
      image: '🇩🇪',
      progress: 0
    },
    {
      id: 5,
      title: 'Italien - Intermédiaire',
      description: 'Explorez la culture italienne à travers sa langue.',
      language: 'Italien',
      level: 'Intermédiaire',
      duration: '6 semaines',
      lessons: 28,
      students: 567,
      rating: 4.8,
      image: '🇮🇹',
      progress: 0
    },
    {
      id: 6,
      title: 'Japonais - Débutant',
      description: 'Initiez-vous au japonais avec les hiragana et katakana.',
      language: 'Japonais',
      level: 'Débutant',
      duration: '10 semaines',
      lessons: 50,
      students: 789,
      rating: 4.9,
      image: '🇯🇵',
      progress: 0
    }
  ]

  const filteredCourses = courses.filter(course => {
    return (selectedLevel === 'all' || course.level === selectedLevel) &&
           (selectedLanguage === 'all' || course.language === selectedLanguage)
  })

  const languages = ['Tous', 'Anglais', 'Espagnol', 'Français', 'Allemand', 'Italien', 'Japonais']
  const levels = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé']

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Cours
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre catalogue de cours conçus par des experts linguistiques pour tous les niveaux
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Langue</label>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Toutes les langues</option>
                {languages.slice(1).map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Niveau</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tous les niveaux</option>
                {levels.slice(1).map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grille de cours */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image/Flag */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">{course.image}</span>
              </div>

              <div className="p-6">
                {/* Titre et description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Méta informations */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} leçons</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} étudiants</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}/5</span>
                    </div>
                  </div>
                </div>

                {/* Badge niveau */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Débutant' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">Gratuit</span>
                </div>

                {/* Bouton d'action */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Commencer le cours</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun cours */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun cours trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres pour voir plus de cours.</p>
          </div>
        )}
      </div>
    </div>
  )
}
