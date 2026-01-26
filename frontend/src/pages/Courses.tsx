import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BookOpen, ChevronRight } from 'lucide-react'

interface Level {
  id: number
  number: number
  category: string
  questionsCount: number
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_GAMEPLAY}/levels`);
        setLevels(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des niveaux:', error);
        setLevels([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLevels();
  }, []);

  // Extraire les catégories uniques pour le filtre
  const categories = ['Toutes', ...Array.from(new Set(levels.map(l => l.category)))];

  const filteredLevels = levels.filter(level => {
    return selectedCategory === 'all' || level.category === selectedCategory;
  });

  const handleStartLevel = (levelId: number) => {
    // Naviguer directement vers la page d'exercice pour ce niveau
    navigate(`/exercise/${levelId}`);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement des niveaux...</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Niveaux
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les niveaux disponibles pour progresser dans votre apprentissage.
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Catégorie</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Toutes les catégories</option>
                {categories.slice(1).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grille de niveaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLevels.map((level) => (
            <div key={level.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Illustration avec emoji en fonction de la catégorie */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">
                  {level.category === 'animaux' ? '🐾' :
                   level.category === 'nourriture' ? '�' :
                   level.category === 'maison' ? '🏠' :
                   level.category === 'couleurs' ? '🎨' :
                   level.category === 'transport' ? '🚗' :
                   level.category === 'sport' ? '⚽' :
                   level.category === 'famille' ? '👨‍👩‍👧‍👦' :
                   '📚'}
                </span>
              </div>

              <div className="p-6">
                {/* Titre et description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Niveau {level.number} : {level.category}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Progressez sur le thème « {level.category} » avec des exercices variés.
                </p>

                {/* Nombre de questions réel */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{level.questionsCount} exercices</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </span>
                    <span>Minimum 7/10 pour valider</span>
                  </div>
                </div>

                {/* Badge niveau */}
                <div className="flex items-center mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    Niveau {level.number}
                  </span>
                </div>

                {/* Bouton d'action */}
                <button 
                  onClick={() => handleStartLevel(level.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Commencer ce niveau</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun niveau */}
        {filteredLevels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun niveau trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres pour voir plus de niveaux.</p>
          </div>
        )}
      </div>
    </div>
  )
}
