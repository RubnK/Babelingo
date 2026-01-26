import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Lock, Play, CheckCircle } from 'lucide-react';

interface Level {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  stars: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export default function LevelSelection() {
  const navigate = useNavigate();
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    // Simulation des niveaux - à remplacer par un appel API
    const mockLevels: Level[] = [
      { id: 1, title: 'Salutations', description: 'Apprendre les salutations de base', isUnlocked: true, isCompleted: true, stars: 3, difficulty: 'easy' },
      { id: 2, title: 'Les nombres', description: 'Compter de 1 à 20', isUnlocked: true, isCompleted: false, stars: 0, difficulty: 'easy' },
      { id: 3, title: 'La famille', description: 'Vocabulaire familial', isUnlocked: true, isCompleted: false, stars: 0, difficulty: 'medium' },
      { id: 4, title: 'Au restaurant', description: 'Commander au restaurant', isUnlocked: false, isCompleted: false, stars: 0, difficulty: 'medium' },
      { id: 5, title: 'Les directions', description: 'Demander son chemin', isUnlocked: false, isCompleted: false, stars: 0, difficulty: 'hard' },
      { id: 6, title: 'Conversation avancée', description: 'Dialogue complexe', isUnlocked: false, isCompleted: false, stars: 0, difficulty: 'hard' },
    ];
    setLevels(mockLevels);
  }, []);

  const startLevel = (level: Level) => {
    if (level.isUnlocked) {
      navigate(`/exercise/${level.id}`);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (count: number) => (
    <div className="flex space-x-1">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= count ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Niveaux</h1>
          <p className="text-xl text-gray-600">Choisissez votre niveau d'apprentissage</p>
        </div>

        {/* Grille des niveaux avec progression visuelle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Ligne de progression (chemin) - Version simplifiée */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ top: '0', left: '0' }}>
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Lignes de connexion entre les niveaux */}
            {levels.length > 1 && (
              <>
                <path 
                  d="M150 120 Q300 120 450 220" 
                  stroke="url(#progressGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <path 
                  d="M150 340 Q300 340 450 440" 
                  stroke="url(#progressGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </>
            )}
          </svg>

          {/* Cartes des niveaux */}
          {levels.map((level, index) => (
            <div key={level.id} className="relative z-10">
              <button
                onClick={() => startLevel(level)}
                disabled={!level.isUnlocked}
                className={`w-full bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ${
                  level.isUnlocked
                    ? 'hover:shadow-xl hover:scale-105 cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                } ${level.isCompleted ? 'ring-2 ring-green-400' : ''}`}
              >
                {/* Badge de difficulté */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(level.difficulty)}`}>
                    {level.difficulty === 'easy' ? 'Facile' : level.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                  </span>
                  
                  {/* Icône d'état */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    {level.isCompleted ? (
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    ) : level.isUnlocked ? (
                      <Play className="w-8 h-8 text-blue-500" />
                    ) : (
                      <Lock className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="text-left mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {level.description}
                  </p>
                </div>

                {/* Étoiles et progression */}
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Niveau {level.id}
                  </div>
                  {level.isCompleted && renderStars(level.stars)}
                </div>

                {/* Barre de progression pour le niveau actuel */}
                {level.isUnlocked && !level.isCompleted && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">33% complété</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Statistiques en bas */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {levels.filter(l => l.isCompleted).length}
              </div>
              <div className="text-sm text-gray-600">Niveaux complétés</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {levels.reduce((total, level) => total + level.stars, 0)}
              </div>
              <div className="text-sm text-gray-600">Étoiles gagnées</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {levels.filter(l => l.isUnlocked).length}
              </div>
              <div className="text-sm text-gray-600">Niveaux débloqués</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
