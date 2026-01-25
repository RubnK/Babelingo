import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { BookOpen, Trophy, Target, Clock } from 'lucide-react'

export default function Dashboard() {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bonjour {user.email} ! 👋
          </h1>
          <p className="text-gray-600 mb-4">
            Prêt à continuer votre apprentissage des langues ?
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-primary-100 px-4 py-2 rounded-full">
              <span className="text-primary-800 font-medium">{user.xp} XP</span>
            </div>
            <div className="bg-secondary-100 px-4 py-2 rounded-full">
              <span className="text-secondary-800 font-medium">Niveau débutant</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-primary-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Leçons</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <Trophy className="h-6 w-6 text-secondary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Badges</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Objectif quotidien</p>
                <p className="text-2xl font-bold text-gray-900">0/5</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Temps d'étude</p>
                <p className="text-2xl font-bold text-gray-900">0h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Lessons */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Vos cours actuels</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun cours en cours
                </h3>
                <p className="text-gray-500 mb-4">
                  Commencez votre première leçon pour débloquer du contenu !
                </p>
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Démarrer un cours
                </button>
              </div>
            </div>
          </div>

          {/* Available Languages */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Langues disponibles</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <h3 className="font-medium text-gray-900">Anglais</h3>
                      <p className="text-sm text-gray-500">Niveau débutant</p>
                    </div>
                  </div>
                  <button className="text-primary-600 font-medium hover:text-primary-700">
                    Commencer →
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇪🇸</span>
                    <div>
                      <h3 className="font-medium text-gray-900">Espagnol</h3>
                      <p className="text-sm text-gray-500">Niveau débutant</p>
                    </div>
                  </div>
                  <button className="text-primary-600 font-medium hover:text-primary-700">
                    Commencer →
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇩🇪</span>
                    <div>
                      <h3 className="font-medium text-gray-900">Allemand</h3>
                      <p className="text-sm text-gray-500">Niveau débutant</p>
                    </div>
                  </div>
                  <button className="text-primary-600 font-medium hover:text-primary-700">
                    Commencer →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
