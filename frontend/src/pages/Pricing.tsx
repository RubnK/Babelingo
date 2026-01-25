import { Check, X, Star, Crown } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      period: 'Toujours gratuit',
      description: 'Parfait pour commencer votre apprentissage',
      features: [
        { text: 'Accès aux leçons de base', included: true },
        { text: '5 langues disponibles', included: true },
        { text: 'Exercices interactifs limités', included: true },
        { text: 'Support communautaire', included: true },
        { text: 'Progression sauvegardée', included: false },
        { text: 'Certificats', included: false },
        { text: 'Contenu premium', included: false },
        { text: 'Support prioritaire', included: false }
      ],
      buttonText: 'Commencer gratuitement',
      buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      popular: false
    },
    {
      name: 'Premium',
      price: '9.99',
      period: 'par mois',
      description: 'Pour les apprenants sérieux et motivés',
      features: [
        { text: 'Accès complet aux leçons', included: true },
        { text: 'Toutes les langues disponibles', included: true },
        { text: 'Exercices illimités', included: true },
        { text: 'Support communautaire', included: true },
        { text: 'Progression sauvegardée', included: true },
        { text: 'Certificats officiels', included: true },
        { text: 'Contenu premium exclusif', included: true },
        { text: 'Support prioritaire', included: false }
      ],
      buttonText: 'Choisir Premium',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
      popular: true
    },
    {
      name: 'Pro',
      price: '19.99',
      period: 'par mois',
      description: 'Pour les professionnels et entreprises',
      features: [
        { text: 'Tout du plan Premium', included: true },
        { text: 'Accès prioritaire aux nouveautés', included: true },
        { text: 'Sessions 1-on-1 avec tuteurs', included: true },
        { text: 'Analyse personnalisée', included: true },
        { text: 'Progression sauvegardée', included: true },
        { text: 'Certificats officiels', included: true },
        { text: 'Contenu premium exclusif', included: true },
        { text: 'Support prioritaire 24/7', included: true }
      ],
      buttonText: 'Choisir Pro',
      buttonStyle: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choisissez votre plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Commencez gratuitement et évoluez selon vos besoins d'apprentissage
          </p>
          
          {/* Toggle annuel/mensuel */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium">
              Mensuel
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium">
              Annuel (-20%)
            </button>
          </div>
        </div>

        {/* Grille de prix */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Le plus populaire</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header du plan */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                    {plan.name === 'Pro' && <Crown className="inline-block ml-2 h-6 w-6 text-yellow-500" />}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Liste des fonctionnalités */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.included 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.included ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}
                      </div>
                      <span className={`${feature.included ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bouton d'action */}
                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Questions fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre tableau de bord.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Y a-t-il une période d'essai gratuite ?
              </h3>
              <p className="text-gray-600">
                Tous nos plans premium incluent une période d'essai gratuite de 7 jours, sans engagement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Que se passe-t-il si j'annule ?
              </h3>
              <p className="text-gray-600">
                Vous gardez l'accès jusqu'à la fin de votre période de facturation, puis revenez au plan gratuit.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Offrez-vous des réductions étudiantes ?
              </h3>
              <p className="text-gray-600">
                Oui ! Les étudiants bénéficient de 50% de réduction avec un justificatif de scolarité valide.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez des milliers d'apprenants qui progressent chaque jour
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Commencer gratuitement
          </button>
        </div>
      </div>
    </div>
  )
}
