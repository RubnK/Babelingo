import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';
import axios from 'axios';

export default function Exercise() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [connections, setConnections] = useState<{left: string, right: string}[]>([]);
  const [selectedMCQ, setSelectedMCQ] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState(false);

  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const lang = localStorage.getItem('selectedLanguage') || 'fr';
        const res = await axios.get(`${import.meta.env.VITE_API_GAMEPLAY}/levels/${levelId}/exercises?lang=${lang}`);
        setExercises(res.data);
      } catch (err) {
        setExercises([]);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, [levelId]);

  const currentExercise = exercises[currentExerciseIndex];
  const progress = exercises.length > 0 ? ((currentExerciseIndex + 1) / exercises.length) * 100 : 0;

  const handleWordSelection = (word: string) => {
    if (selectedAnswers.includes(word)) {
      setSelectedAnswers(prev => prev.filter(w => w !== word));
    } else {
      setSelectedAnswers(prev => [...prev, word]);
    }
  };

  const handleWordMatching = (word: string, column: 'left' | 'right') => {
    // Logique simplifiée de matching
    if (column === 'left') {
      // Pour cette démonstration, on connecte automatiquement au premier mot de droite disponible
      const rightWord = currentExercise.rightWords?.find(w => 
        !connections.some(c => c.right === w)
      );
      if (rightWord && !connections.some(c => c.left === word)) {
        setConnections(prev => [...prev, { left: word, right: rightWord }]);
      }
    }
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      // Reset des states
      setSelectedAnswers([]);
      setConnections([]);
      setSelectedMCQ('');
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setConnections([]);
    setSelectedMCQ('');
  };

  const isAnswerCorrect = () => {
    switch (currentExercise.type) {
      case 'word-selection':
        return selectedAnswers.length === currentExercise.correctAnswers?.length &&
               selectedAnswers.every(answer => currentExercise.correctAnswers?.includes(answer));
      case 'word-matching':
        return connections.length === currentExercise.correctPairs?.length;
      case 'mcq':
        return selectedMCQ === currentExercise.correctAnswer;
      default:
        return false;
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement des exercices...</div>;
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Félicitations !</h1>
          <p className="text-gray-600 mb-6">Vous avez terminé ce niveau avec succès !</p>
          <button
            onClick={() => navigate('/level-selection')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Retour aux niveaux
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header avec titre et progression */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentExercise.title}
            </h1>
            <button
              onClick={handleReset}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">{Math.round(progress)}% complété</p>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {currentExercise.instruction}
          </h2>
          {currentExercise.type === 'mcq' && (
            <p className="text-lg text-gray-700">{currentExercise.question}</p>
          )}
        </div>

        {/* Zone d'exercice */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          {/* Exercice de sélection de mots */}
          {currentExercise.type === 'word-selection' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentExercise.words?.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleWordSelection(word)}
                  className={`p-4 rounded-xl border-2 transition-all font-medium ${
                    selectedAnswers.includes(word)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          )}

          {/* Exercice de correspondance */}
          {currentExercise.type === 'word-matching' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonne de gauche */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Français</h3>
                {currentExercise.leftWords?.map((word, index) => (
                  <button
                    key={index}
                    onClick={() => handleWordMatching(word, 'left')}
                    className={`w-full p-4 rounded-xl border-2 transition-all font-medium text-left ${
                      connections.some(c => c.left === word)
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>

              {/* Colonne de droite */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Anglais</h3>
                {currentExercise.rightWords?.map((word, index) => (
                  <div
                    key={index}
                    className={`w-full p-4 rounded-xl border-2 font-medium text-left ${
                      connections.some(c => c.right === word)
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-gray-50 text-gray-700'
                    }`}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* QCM */}
          {currentExercise.type === 'mcq' && (
            <div className="space-y-3">
              {currentExercise.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMCQ(option)}
                  className={`w-full p-4 rounded-xl border-2 transition-all font-medium text-left ${
                    selectedMCQ === option
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bouton Next */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={!isAnswerCorrect()}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all ${
              isAnswerCorrect()
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>
              {currentExerciseIndex < exercises.length - 1 ? 'Suivant' : 'Terminer'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
