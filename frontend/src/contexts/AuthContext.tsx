import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios'

// Configuration de l'URL de base pour l'API
axios.defaults.baseURL = 'http://localhost:3000'

interface User {
  id: number
  email: string
  xp: number
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  register: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // Validate token and get user info
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      console.log('AuthContext: Tentative de connexion à l\'API')
      const response = await axios.post('/auth/login', { email, password })
      console.log('AuthContext: Réponse de l\'API:', response.status, response.data)
      
      const { token, user: userData } = response.data
      
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(userData)
      console.log('AuthContext: Connexion réussie, utilisateur défini:', userData)
      return { success: true }
    } catch (error: any) {
      console.error('AuthContext: Erreur de connexion:', error)
      console.error('AuthContext: Status:', error.response?.status)
      console.error('AuthContext: Data:', error.response?.data)
      
      if (error.response?.status === 401) {
        return { success: false, message: 'Email ou mot de passe incorrect.' }
      } else if (error.response?.status === 404) {
        return { success: false, message: 'Aucun compte trouvé avec cet email.' }
      } else if (error.response?.status === 500) {
        return { success: false, message: 'Erreur serveur. Veuillez réessayer plus tard.' }
      } else {
        return { success: false, message: 'Erreur lors de la connexion. Veuillez réessayer.' }
      }
    }
  }

  const register = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await axios.post('/auth/register', { email, password })
      const { token, user: userData } = response.data
      
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(userData)
      return { success: true }
    } catch (error: any) {
      console.error('Register error:', error)
      
      if (error.response?.status === 409) {
        return { success: false, message: 'Cette adresse email est déjà utilisée. Veuillez en choisir une autre.' }
      } else if (error.response?.status === 400) {
        return { success: false, message: 'Données invalides. Vérifiez votre email et mot de passe.' }
      } else if (error.response?.status === 500) {
        return { success: false, message: 'Erreur serveur. Veuillez réessayer plus tard.' }
      } else {
        return { success: false, message: 'Erreur lors de la création du compte. Veuillez réessayer.' }
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
