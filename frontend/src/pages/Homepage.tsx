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
            Découvrez une approche révolutionnaire de l'apprentissage des langues ! 
            Progressez niveau par niveau avec 10 exercices variés dans différentes langues. 
            Validez chaque niveau en réussissant 7 exercices minimum et gagnez de l'XP pour débloquer des récompenses.
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
              <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Niveaux progressifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">7/10</div>
              <div className="text-sm text-gray-600">Seuil de validation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">+XP</div>
              <div className="text-sm text-gray-600">Système de récompenses</div>
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
                ✨ Système de progression innovant
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Un apprentissage par
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}niveaux
                </span>
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">10 Exercices par Niveau</h3>
                    <p className="text-gray-600">Chaque niveau contient 10 exercices variés dans différentes langues pour une progression complète</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Validation par Performance</h3>
                    <p className="text-gray-600">Réussissez 7 exercices minimum pour valider un niveau et débloquer le suivant</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Système XP & Récompenses</h3>
                    <p className="text-gray-600">Gagnez de l'XP, maintenez votre streak et débloquez des coffres remplis de surprises</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Commencer le niveau 1
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <span className="mr-2">🎯</span>
                  Voir les niveaux
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎮</div>
                    <div className="text-2xl font-bold text-gray-700">Progression par niveaux</div>
                    <div className="text-gray-600 mt-2">10 exercices • 7 requis pour valider</div>
                    <div className="mt-6 bg-white px-6 py-3 rounded-full font-semibold shadow-lg">
                      🏆 XP • 🔥 Streak • 💎 Coffres
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⭐
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-xl animate-pulse">
                  💎
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
              � Système de progression gamifié
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explorez nos 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                fonctionnalités
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un système complet de progression avec XP, vies, streaks et récompenses 
              pour maintenir votre motivation à son maximum
            </p>
          </div>
          
          {/* Fonctionnalités principales */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Système de progression</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '❤️', name: 'Système de vies', description: 'Gardez vos vies pour continuer', color: 'bg-red-100 text-red-700' },
                { icon: '⭐', name: 'Points XP', description: 'Gagnez de l\'expérience', color: 'bg-yellow-100 text-yellow-700' },
                { icon: '🔥', name: 'Streak', description: 'Jours d\'apprentissage consécutifs', color: 'bg-orange-100 text-orange-700' },
                { icon: '💎', name: 'Coffres', description: 'Débloqués tous les X niveaux', color: 'bg-purple-100 text-purple-700' }
              ].map((feature, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.name}</h4>
                  <div className="space-y-1">
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${feature.color}`}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fonctionnalités sociales */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fonctionnalités sociales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '👥', name: 'Système d\'amis', description: 'Ajoutez des amis et suivez leur progression' },
                { icon: '📰', name: 'Fil d\'actualité', description: 'Découvrez les réussites de votre communauté' }
              ].map((social, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">{social.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{social.name}</h4>
                  <p className="text-gray-600">{social.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
              <span className="text-gray-600 mr-2">Prêt à commencer votre aventure ?</span>
              <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-700">
                Créer un compte →
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
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un système simple et progressif pour maîtriser les langues étape par étape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                icon: '🎯',
                title: 'Choisir un niveau',
                description: 'Sélectionnez votre niveau et découvrez les 10 exercices qui vous attendent.'
              },
              {
                number: '2',
                icon: '🧩',
                title: 'Répondre aux exercices',
                description: 'Chaque exercice est unique et dans une langue différente pour varier les plaisirs.'
              },
              {
                number: '3',
                icon: '✅',
                title: 'Valider le niveau',
                description: 'Réussissez au minimum 7 exercices sur 10 pour débloquer le niveau suivant.'
              },
              {
                number: '4',
                icon: '🏆',
                title: 'Gagner des récompenses',
                description: 'Obtenez de l\'XP, maintenez votre streak et débloquez des coffres surprises.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 font-bold text-sm mb-4">Étape {step.number}</div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-2xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
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
                name: 'Sophie Martin',
                avatar: '👩‍💼',
                rating: 5,
                text: 'Le système de niveaux est génial ! J\'ai validé 15 niveaux en 2 mois et ma motivation reste au top.'
              },
              {
                name: 'Lucas Dubois',
                avatar: '👨‍🎓',
                rating: 5,
                text: 'Les 10 exercices par niveau dans différentes langues, c\'est parfait pour ne pas s\'ennuyer !'
              },
              {
                name: 'Emma Rodriguez',
                avatar: '👩‍🚀',
                rating: 5,
                text: 'Mon streak de 47 jours me motive chaque matin ! Les coffres surprise sont un vrai plus.'
              },
              {
                name: 'Thomas Chen',
                avatar: '👨‍💻',
                rating: 5,
                text: 'Le fait de devoir réussir 7/10 exercices rend le challenge excitant sans être frustrant.'
              },
              {
                name: 'Camille Singh',
                avatar: '👩‍🔬',
                rating: 5,
                text: 'J\'adore le système d\'XP et les récompenses. Ça gamifie vraiment l\'apprentissage !'
              },
              {
                name: 'Antoine Silva',
                avatar: '👨‍🎨',
                rating: 5,
                text: 'Attention à ne pas rafraîchir pendant un niveau ! Mais sinon l\'expérience est parfaite.'
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
            Prêt à relever le défi des niveaux ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'apprenants qui progressent niveau par niveau avec notre système unique
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Commencer le niveau 1
          </Link>
        </div>
      </section>
    </div>
  )
}
