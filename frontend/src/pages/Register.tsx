import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide')
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      setIsLoading(false)
      return
    }

    const result = await register(email, password)
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.message || 'Erreur lors de la création du compte')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header avec logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-3 group mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Babelingo
            </span>
          </Link>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Créez votre compte
          </h2>
          <p className="text-lg text-gray-600">
            Rejoignez plus de 10 000 apprenants de langues
          </p>
        </div>

        {/* Formulaire principal */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">⚠</span>
                  {error}
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Adresse email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full pl-12 pr-4 py-4 border-2 border-gray-200 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-gray-300 transition-all duration-200 text-lg"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Mot de passe
                  <span className="text-xs text-gray-500 ml-2">(min. 6 caractères)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full pl-12 pr-12 py-4 border-2 border-gray-200 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-gray-300 transition-all duration-200 text-lg"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-50 rounded-r-xl transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none relative block w-full pl-12 pr-4 py-4 border-2 border-gray-200 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-gray-300 transition-all duration-200 text-lg"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {/* Indicateur de force du mot de passe */}
            {password && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700">Force du mot de passe</div>
                <div className="flex space-x-1">
                  <div className={`h-2 w-1/3 rounded-full ${password.length >= 6 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                  <div className={`h-2 w-1/3 rounded-full ${password.length >= 8 && /[A-Z]/.test(password) ? 'bg-orange-400' : 'bg-gray-200'}`}></div>
                  <div className={`h-2 w-1/3 rounded-full ${password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                </div>
                <div className="text-xs text-gray-500">
                  {password.length < 6 && "Trop court"}
                  {password.length >= 6 && password.length < 8 && "Faible"}
                  {password.length >= 8 && /[A-Z]/.test(password) && "Moyen"}
                  {password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && "Fort"}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Création du compte...
                </div>
              ) : (
                <div className="flex items-center">
                  Créer mon compte gratuit
                </div>
              )}
            </button>
          </form>

          {/* Avantages */}
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
            <h4 className="text-sm font-medium text-gray-800 mb-3">Votre compte gratuit inclut :</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Accès à plus de 50 langues
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Communauté mondiale d'apprenants
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Suivi de progression détaillé
              </li>
            </ul>
          </div>

          {/* Lien de connexion */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Déjà membre ?</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                Se connecter à votre compte
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          En créant un compte, vous acceptez nos{' '}
          <Link to="/terms" className="text-purple-600 hover:underline">
            Conditions d'utilisation
          </Link>{' '}
          et notre{' '}
          <Link to="/privacy" className="text-purple-600 hover:underline">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  )
}
