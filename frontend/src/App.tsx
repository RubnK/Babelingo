import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Languages from './pages/Languages'
import Community from './pages/Community'
import LanguageSelection from './pages/LanguageSelection'
import LevelSelection from './pages/LevelSelection'
import Exercise from './pages/Exercise'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/language-selection" element={<LanguageSelection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/level-selection" element={<LevelSelection />} />
            <Route path="/exercise/:levelId" element={<Exercise />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
