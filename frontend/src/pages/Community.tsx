import { MessageCircle, Users, Heart, Award } from 'lucide-react'

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Communauté
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez une communauté mondiale d'apprenants passionnés de langues
          </p>
        </div>

        {/* Statistiques communautaires */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-600">Membres actifs</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
            <div className="text-gray-600">Messages échangés</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
        </div>

        {/* En construction */}
        <div className="text-center py-20">
          <div className="text-8xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page en construction</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Notre espace communautaire sera bientôt disponible ! Vous pourrez échanger avec d'autres apprenants, 
            participer à des défis linguistiques et trouver des partenaires de conversation.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prochaines fonctionnalités :</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Forums de discussion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Partenaires de conversation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Défis linguistiques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Événements virtuels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
