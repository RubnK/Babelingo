import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, User, Globe } from 'lucide-react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Globe className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Babelingo
              </span>
            </Link>
          </div>

          {/* Menu de navigation au centre */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Cours
            </Link>
            <Link to="/languages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Langues
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Communauté
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tarifs
            </Link>
          </div> */}

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.email.split('@')[0]}</div>
                      <div className="text-xs text-gray-500">{user.xp} XP</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full font-medium transition-all hover:bg-blue-50"
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  S'inscrire gratuitement
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
