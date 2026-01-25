import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Section principale */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
              🚀 Plus de 10 000 apprenants nous font confiance
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Maîtrisez les langues du 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}monde entier
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Babelingo révolutionne l'apprentissage des langues avec une méthode interactive, 
            ludique et personnalisée. Progressez à votre rythme, où que vous soyez, 
            et rejoignez une communauté mondiale de passionnés de langues.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Commencer gratuitement
            </Link>
            <Link
              to="/login"
              className="inline-block border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Se connecter
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Langues disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the app Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-6">
                ✨ Innovation pédagogique
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Une application qui s'adapte à 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}vous
                </span>
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligence Artificielle Adaptative</h3>
                    <p className="text-gray-600">Chaque leçon s'adapte automatiquement à votre niveau et style d'apprentissage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Méthode Scientifique Prouvée</h3>
                    <p className="text-gray-600">Basée sur la recherche cognitive et les techniques de mémorisation espacée</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Communauté Active</h3>
                    <p className="text-gray-600">Échangez avec des natifs et d'autres apprenants du monde entier</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Découvrir l'app
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <span className="mr-2">▶</span>
                  Voir la démo
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <div className="text-2xl font-bold text-gray-700">Vidéo de démonstration</div>
                    <div className="text-gray-600 mt-2">Découvrez Babelingo en action</div>
                    <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
                      ▶ Regarder (2:30)
                    </button>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  🎯
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-xl animate-pulse">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Langues Section */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
              🌍 50+ langues disponibles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explorez le monde des 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                langues
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des langues les plus parlées aux dialectes régionaux, découvrez notre sélection 
              soigneusement conçue pour tous les niveaux et objectifs d'apprentissage
            </p>
          </div>
          
          {/* Langues populaires */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Langues les plus populaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { flag: '🇬🇧', name: 'Anglais', learners: '4.2M', difficulty: 'Facile' },
                { flag: '🇪🇸', name: 'Espagnol', learners: '2.8M', difficulty: 'Facile' },
                { flag: '🇫🇷', name: 'Français', learners: '2.1M', difficulty: 'Moyen' },
                { flag: '🇩🇪', name: 'Allemand', learners: '1.9M', difficulty: 'Moyen' },
                { flag: '🇮🇹', name: 'Italien', learners: '1.5M', difficulty: 'Facile' },
                { flag: '🇯🇵', name: 'Japonais', learners: '1.3M', difficulty: 'Difficile' }
              ].map((lang, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">{lang.flag}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{lang.name}</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-blue-600 font-semibold">{lang.learners} apprenants</div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                      lang.difficulty === 'Facile' ? 'bg-green-100 text-green-700' :
                      lang.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {lang.difficulty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Autres langues */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Découvrez d'autres langues</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { flag: '🇨🇳', name: 'Chinois' },
                { flag: '🇰🇷', name: 'Coréen' },
                { flag: '🇷🇺', name: 'Russe' },
                { flag: '🇵🇹', name: 'Portugais' },
                { flag: '🇳🇱', name: 'Néerlandais' },
                { flag: '🇸🇪', name: 'Suédois' },
                { flag: '🇳🇴', name: 'Norvégien' },
                { flag: '🇩🇰', name: 'Danois' },
                { flag: '🇵🇱', name: 'Polonais' },
                { flag: '🇹🇷', name: 'Turc' },
                { flag: '🇬🇷', name: 'Grec' },
                { flag: '🇮🇳', name: 'Hindi' }
              ].map((lang, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{lang.flag}</div>
                  <p className="font-medium text-gray-800 text-sm">{lang.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
              <span className="text-gray-600 mr-2">Et bien plus encore...</span>
              <Link to="/languages" className="text-blue-600 font-semibold hover:text-blue-700">
                Voir toutes les langues →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Type d'exo Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Type d'exo
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Variez les plaisirs avec nos différents types d'exercices conçus pour tous les styles d'apprentissage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: 'N°1',
                icon: '📚',
                title: 'Vocabulaire',
                description: 'Enrichissez votre vocabulaire avec des mots du quotidien et des expressions idiomatiques.'
              },
              {
                number: 'N°2',
                icon: '💬',
                title: 'Conversation',
                description: 'Pratiquez la conversation avec notre IA conversationnelle avancée.'
              },
              {
                number: 'N°3',
                icon: '🎮',
                title: 'Mini-jeux',
                description: 'Apprenez en vous amusant avec nos mini-jeux interactifs et addictifs.'
              },
              {
                number: 'N°4',
                icon: '🏆',
                title: 'Défis',
                description: 'Relevez des défis quotidiens et affrontez d\'autres apprenants.'
              }
            ].map((exercise, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-bold text-sm mb-4">{exercise.number}</div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-2xl">{exercise.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{exercise.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Rejoignez des milliers d'apprenants satisfaits qui ont transformé leur vie grâce à Babelingo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Dubois',
                avatar: '👩‍💼',
                rating: 5,
                text: 'Grâce à Babelingo, j\'ai décroché un poste international ! L\'apprentissage est ludique et efficace.'
              },
              {
                name: 'Carlos Rodriguez',
                avatar: '👨‍🎓',
                rating: 5,
                text: 'L\'application s\'adapte parfaitement à mon rythme. Je progresse plus vite qu\'avec mes cours traditionnels.'
              },
              {
                name: 'Sarah Johnson',
                avatar: '👩‍🚀',
                rating: 5,
                text: 'Interface intuitive et méthode révolutionnaire. Je recommande vivement à tous ceux qui veulent apprendre !'
              },
              {
                name: 'Ahmed Bennani',
                avatar: '👨‍💻',
                rating: 5,
                text: 'Les mini-jeux rendent l\'apprentissage addictif. J\'ai appris plus en 3 mois qu\'en 2 ans d\'école.'
              },
              {
                name: 'Lisa Chen',
                avatar: '👩‍🔬',
                rating: 5,
                text: 'Perfect pour les personnes occupées. 15 minutes par jour suffisent pour progresser significativement.'
              },
              {
                name: 'Marco Silva',
                avatar: '👨‍🎨',
                rating: 5,
                text: 'La communauté est fantastique ! J\'ai trouvé des partenaires de conversation du monde entier.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {testimonial.avatar}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{testimonial.name}</h4>
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-center italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Commencez votre voyage linguistique dès maintenant
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez plus de 10 000 apprenants qui font confiance à Babelingo pour maîtriser de nouvelles langues
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Inscription gratuite
          </Link>
        </div>
      </section>
    </div>
  )
}
