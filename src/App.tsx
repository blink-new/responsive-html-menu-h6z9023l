import { Badge } from './components/ui/badge'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-4 md:p-8">
      {/* Menu Card with curved background */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top curved section with pattern */}
          <div className="relative h-32 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 overflow-hidden">
            {/* Decorative curves */}
            <div className="absolute inset-0">
              <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 600,50 C850,0 1050,100 1200,0 L1200,120 L0,120 Z" 
                      fill="white" fillOpacity="0.1"/>
              </svg>
              <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,20 C300,80 900,20 1200,60 L1200,120 L0,120 Z" 
                      fill="white" fillOpacity="0.2"/>
              </svg>
            </div>
            
            {/* Header content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold tracking-wide">ARIES</h1>
                    <p className="text-blue-200 text-lg tracking-widest">vacation club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-8 md:p-12">
            
            {/* ENTRADAS Section */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-wide">ENTRADAS</h2>
                <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image placeholder with curved border */}
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <div className="w-full h-64 bg-gray-100 rounded-3xl border-4 border-orange-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2">🖼️</div>
                          <p className="text-sm">Espacio para imagen</p>
                          <p className="text-xs">Guacamole y chips</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Guacamole y chips</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $200
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Guacamole fresco preparado al momento, servido con chips de tortilla crujientes
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              <div className="mx-6 w-4 h-4 bg-orange-500 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            </div>

            {/* TACOS Section */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-wide">TACOS</h2>
                <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image placeholder */}
                <div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gray-100 rounded-3xl border-4 border-orange-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2">🌮</div>
                          <p className="text-sm">Espacio para imagen</p>
                          <p className="text-xs">Tacos estilo Ensenada</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Tacos de pescado estilo ensenada</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $250
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      3 tacos con pescado fresco empanizado, repollo, pico de gallo y aderezo especial
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Tacos de camarón estilo ensenada</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $290
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      3 tacos con camarones empanizados, repollo, pico de gallo y aderezo especial
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              <div className="mx-6 w-4 h-4 bg-orange-500 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            </div>

            {/* PRINCIPALES Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-wide">PRINCIPALES</h2>
                <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left column - Menu items */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Costillas ahumadas con BBQ</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $520
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      4 pzas con elotes amarillos a la mantequilla, papas fritas y coleslaw
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Hamburguesa AVC</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $360
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Con papas fritas, mix de quesos, cebolla confitada, tocino, chiles toreados, lechuga y aderezo de chipotle
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Sandwich MonteCristo</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $310
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Pan brioche, jamón, tocino, queso, acompañado de papas waffle fritas
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">Camarones Costa Azul</h3>
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-4 py-2 rounded-full">
                        $590
                      </Badge>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      5 pzas envueltos en tocino, empanizados rellenos de queso y marlin, cama arroz blanco y salsa de chipotle
                    </p>
                  </div>
                </div>
                
                {/* Right column - Image placeholders */}
                <div className="space-y-8">
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-100 rounded-3xl border-4 border-orange-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-3xl mb-2">🍖</div>
                          <p className="text-sm">Espacio para imagen</p>
                          <p className="text-xs">Costillas BBQ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-100 rounded-3xl border-4 border-orange-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-3xl mb-2">🍔</div>
                          <p className="text-sm">Espacio para imagen</p>
                          <p className="text-xs">Hamburguesa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-32 bg-gray-100 rounded-3xl border-4 border-orange-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-2xl mb-1">🦐</div>
                          <p className="text-xs">Imagen adicional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center mt-16 pt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="mx-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              </div>
              <p className="text-gray-500 text-lg uppercase tracking-widest font-medium">
                Los precios incluyen impuestos
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Las imágenes son únicamente con fines ilustrativos
              </p>
            </div>
          </div>

          {/* Bottom curved section */}
          <div className="relative h-20 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 overflow-hidden">
            <svg className="absolute top-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,120 C300,40 900,80 1200,60 L1200,0 L0,0 Z" 
                    fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App