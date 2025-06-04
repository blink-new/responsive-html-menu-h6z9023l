import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
              A
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">ARIES</h1>
              <p className="text-blue-200 text-sm md:text-base">vacation club</p>
            </div>
          </div>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8 -mt-4">
        <Card className="shadow-2xl border-0 rounded-t-3xl bg-white/95 backdrop-blur">
          <CardContent className="p-6 md:p-8">
            
            {/* Entradas Section */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">ENTRADAS</h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-900 to-orange-500 rounded"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">Guacamole y chips</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$200</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">Guacamole fresco preparado al momento, servido con chips de tortilla crujientes</p>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1541544181051-e46607bc22ed?w=500&h=300&fit=crop&crop=center" 
                      alt="Guacamole y chips"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent h-px" />

            {/* Tacos Section */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">TACOS</h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-900 to-orange-500 rounded"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1565299585323-38174c32a5f9?w=500&h=300&fit=crop&crop=center" 
                      alt="Tacos"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">Tacos de pescado estilo ensenada</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$250</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">3 tacos con pescado fresco empanizado, repollo, pico de gallo y aderezo especial</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">Tacos de camarón estilo ensenada</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$290</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">3 tacos con camarones empanizados, repollo, pico de gallo y aderezo especial</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent h-px" />

            {/* Principales Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">PRINCIPALES</h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-900 to-orange-500 rounded"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Costillas ahumadas con BBQ</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$520</Badge>
                    </div>
                    <p className="text-gray-600 text-sm italic mb-2">4 pzas con elotes amarillos a la mantequilla, papas fritas y coleslaw</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Hamburguesa AVC</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$360</Badge>
                    </div>
                    <p className="text-gray-600 text-sm italic">Con papas fritas, mix de quesos, cebolla confitada, tocino, chiles toreados, lechuga y aderezo de chipotle</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Sandwich MonteCristo</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$310</Badge>
                    </div>
                    <p className="text-gray-600 text-sm italic">Pan brioche, jamón, tocino, queso, acompañado de papas waffle fritas</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Camarones Costa Azul</h3>
                      <Badge className="bg-blue-900 text-white text-lg px-3 py-1">$590</Badge>
                    </div>
                    <p className="text-gray-600 text-sm italic">5 pzas envueltos en tocino, empanizados rellenos de queso y marlin, cama arroz blanco y salsa de chipotle</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=250&fit=crop&crop=center" 
                      alt="Costillas BBQ"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=250&fit=crop&crop=center" 
                      alt="Hamburguesa"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Prices include tax | Images for illustrative purposes only
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default App