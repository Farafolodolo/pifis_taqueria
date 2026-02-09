import React from 'react'
import { 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Phone,
  CreditCard,
  Banknote,
  ChefHat,
  Flame,
  Star,
  Gift,
  Navigation
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar Sticky */}
      <div className="navbar bg-base-200/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-primary/20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#ubicacion">Ubicación</a></li>
            </ul>
          </div>
          <a href="#inicio" className="btn btn-ghost normal-case text-2xl md:text-3xl font-display">
            <Flame className="text-primary" size={32} />
            <span className="fire-text">PIFIS</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
            <li><a href="#menu" className="hover:text-primary">Menú</a></li>
            <li><a href="#ubicacion" className="hover:text-primary">Ubicación</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#ubicacion" className="btn btn-primary gap-2">
            <Navigation size={20} />
            <span className="hidden sm:inline">Cómo llegar</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="hero min-h-screen relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1624300603167-e8f07fa65e97?q=80&w=2000)',
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-75"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-4xl">
            {/* Confetti decorativo */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-4 h-4 bg-primary rotate-45 opacity-60 animate-bounce"></div>
              <div className="absolute top-20 right-20 w-6 h-6 bg-secondary rotate-12 opacity-70 animate-pulse"></div>
              <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full opacity-50 float-animation"></div>
              <div className="absolute top-1/3 right-10 w-5 h-5 bg-golden rotate-45 opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="badge badge-primary badge-lg mb-6 text-base px-6 py-4 font-bold animate-pulse">
              <Gift className="mr-2" size={20} />
              ¡GRAN APERTURA!
            </div>
            
            <h1 className="mb-8 text-5xl md:text-7xl font-display font-black leading-tight">
              El Verdadero Sabor de la{' '}
              <span className="fire-text text-6xl md:text-8xl block mt-2">
                BIRRIA
              </span>
              <span className="text-3xl md:text-5xl block mt-2">
                en Chihuahua
              </span>
            </h1>
            
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary rounded-2xl p-6 mb-8 inline-block">
              <p className="text-2xl md:text-4xl font-bold text-secondary flex items-center gap-3 justify-center flex-wrap">
                <Gift className="text-primary" size={36} />
                ¡Ven por tu <span className="text-primary underline decoration-wavy">Taquito de Cortesía!</span>
              </p>
            </div>

            <p className="mb-10 text-xl md:text-2xl text-gray-300 font-medium">
              🌮 <strong>Birriería • Taquería</strong> 🌮
              <br />
              Tradición, sabor y autenticidad en cada bocado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#menu" className="btn btn-primary btn-lg gap-2 text-lg px-8 shadow-xl hover:shadow-primary/50 transition-all">
                <ChefHat size={24} />
                Ver Menú
              </a>
              <a href="#ubicacion" className="btn btn-outline btn-secondary btn-lg gap-2 text-lg px-8 hover:shadow-xl hover:shadow-secondary/50 transition-all">
                <MapPin size={24} />
                Ubicación
              </a>
            </div>

            {/* Horario destacado */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center text-lg">
              <div className="badge badge-outline badge-lg gap-2 px-6 py-4">
                <Clock className="text-primary" size={20} />
                <span className="font-semibold">Lun-Dom: 7am - 3pm</span>
              </div>
              <div className="badge badge-outline badge-lg gap-2 px-6 py-4">
                <CreditCard className="text-secondary" size={20} />
                <span className="font-semibold">Aceptamos Tarjeta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección: Por qué elegirnos */}
      <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-4">
            ¿Por qué elegir <span className="fire-text">PIFIS</span>?
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            No somos solo una taquería, somos una experiencia gastronómica auténtica
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="card bg-base-300 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-2 border border-primary/10">
              <div className="card-body items-center text-center">
                <div className="rounded-full bg-primary/20 p-6 mb-4">
                  <Flame className="text-primary" size={48} strokeWidth={2.5} />
                </div>
                <h3 className="card-title text-2xl font-display mb-3">Sabor Auténtico</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ingredientes frescos y receta tradicional. Cada plato es preparado con amor y dedicación, justo como en casa.
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-300 shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all hover:-translate-y-2 border border-secondary/10">
              <div className="card-body items-center text-center">
                <div className="rounded-full bg-secondary/20 p-6 mb-4">
                  <Gift className="text-secondary" size={48} strokeWidth={2.5} />
                </div>
                <h3 className="card-title text-2xl font-display mb-3">Taquito Gratis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Promoción de bienvenida: ¡Prueba nuestro taco de cortesía! Una vez que lo pruebes, vas a querer más.
                </p>
                <div className="badge badge-secondary badge-lg mt-4 px-4 py-3">
                  Oferta Especial 🎉
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-300 shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-2 border border-accent/10">
              <div className="card-body items-center text-center">
                <div className="rounded-full bg-accent/20 p-6 mb-4">
                  <CreditCard className="text-accent" size={48} strokeWidth={2.5} />
                </div>
                <h3 className="card-title text-2xl font-display mb-3">Pagos Fáciles</h3>
                <p className="text-gray-300 leading-relaxed">
                  Aceptamos tarjeta (Visa/Mastercard) y efectivo. Tu comodidad es nuestra prioridad.
                </p>
                <div className="flex gap-4 mt-4">
                  <CreditCard className="text-primary" size={32} />
                  <Banknote className="text-secondary" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menú Preview */}
      <section id="menu" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Nuestro <span className="fire-text">Menú</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Platillos que te harán agua la boca, preparados con la mejor calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Platillo 1 */}
            <div className="card bg-base-300 shadow-xl image-full hover:scale-105 transition-transform">
              <figure>
                <img 
                  src="https://canadabeef.mx/wp-content/uploads/2025/11/Tacos-de-birria-tradicional.png" 
                  alt="Birria"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <div className="badge badge-primary mb-2">🔥 Estrella</div>
                <h3 className="card-title text-2xl font-display">Birria Tradicional</h3>
                <p className="text-sm opacity-90">Carne jugosa en consomé especiado, servida con tortillas hechas a mano</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-secondary">$120</span>
                  <div className="badge badge-outline">⭐ Popular</div>
                </div>
              </div>
            </div>

            {/* Platillo 2 */}
            <div className="card bg-base-300 shadow-xl image-full hover:scale-105 transition-transform">
              <figure>
                <img 
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600" 
                  alt="Tacos"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <div className="badge badge-secondary mb-2">🌮 Clásico</div>
                <h3 className="card-title text-2xl font-display">Tacos de Birria</h3>
                <p className="text-sm opacity-90">3 tacos dorados con queso, cebolla y cilantro, bañados en consomé</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-secondary">$85</span>
                  <div className="badge badge-outline">💚 Favorito</div>
                </div>
              </div>
            </div>

            {/* Platillo 3 */}
            <div className="card bg-base-300 shadow-xl image-full hover:scale-105 transition-transform">
              <figure>
                <img 
                  src="https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=600" 
                  alt="Quesabirrias"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <div className="badge badge-accent mb-2">🧀 Especial</div>
                <h3 className="card-title text-2xl font-display">Quesabirrias</h3>
                <p className="text-sm opacity-90">Tortilla crujiente rellena de queso derretido y birria jugosa</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-secondary">$95</span>
                  <div className="badge badge-outline">🔥 Nuevo</div>
                </div>
              </div>
            </div>

            {/* Platillo 4 */}
            <div className="card bg-base-300 shadow-xl image-full hover:scale-105 transition-transform">
              <figure>
                <img 
                  src="https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=600" 
                  alt="Consomé"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <div className="badge badge-warning mb-2">☕ Caliente</div>
                <h3 className="card-title text-2xl font-display">Consomé XL</h3>
                <p className="text-sm opacity-90">Caldo rico y aromático con carne deshebrada, perfecto para desayunar</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-secondary">$70</span>
                  <div className="badge badge-outline">💪 Energía</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg mb-4">...y mucho más en nuestro menú completo</p>
            <div className="badge badge-lg badge-primary gap-2 px-6 py-4">
              <ChefHat size={20} />
              ¡Ven y descubre todos nuestros platillos!
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información (Ubicación y Horario) */}
      <section id="ubicacion" className="py-20 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Encuéntranos <span className="fire-text">Aquí</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Te estamos esperando con los brazos abiertos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Información de contacto */}
            <div className="space-y-6">
              {/* Dirección */}
              <div className="card bg-base-300 shadow-xl border border-primary/20">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-4 shrink-0">
                      <MapPin className="text-primary" size={32} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Dirección</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        <strong className="text-white">Calle Hidalgo #6906</strong>
                        <br />
                        Col. Robinson (Sector 4)
                        <br />
                        Chihuahua, Chih.
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Calle+Hidalgo+6906+Col+Robinson+Chihuahua" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm mt-4 gap-2"
                      >
                        <Navigation size={16} />
                        Abrir en Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="card bg-base-300 shadow-xl border border-secondary/20">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-4 shrink-0">
                      <Clock className="text-secondary" size={32} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">Horario</h3>
                      <div className="space-y-2 text-lg">
                        <div className="flex justify-between items-center bg-base-200 rounded-lg px-4 py-3">
                          <span className="font-semibold">Lunes - Domingo</span>
                          <span className="text-secondary font-bold">7:00 AM - 3:00 PM</span>
                        </div>
                      </div>
                      <div className="alert alert-success mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">¡Abierto todos los días!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Métodos de pago */}
              <div className="card bg-base-300 shadow-xl border border-accent/20">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent/20 p-4 shrink-0">
                      <CreditCard className="text-accent" size={32} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-3">Métodos de Pago</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-base-200 rounded-lg p-4 text-center">
                          <CreditCard className="mx-auto mb-2 text-primary" size={28} />
                          <p className="font-semibold text-sm">Tarjeta</p>
                          <p className="text-xs text-gray-400">Visa/Mastercard</p>
                        </div>
                        <div className="bg-base-200 rounded-lg p-4 text-center">
                          <Banknote className="mx-auto mb-2 text-secondary" size={28} />
                          <p className="font-semibold text-sm">Efectivo</p>
                          <p className="text-xs text-gray-400">MXN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="card bg-base-300 shadow-xl border border-primary/20 overflow-hidden lg:sticky lg:top-24">
              <div className="relative w-full h-[500px] bg-base-200">
                {/* Placeholder para el mapa */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <MapPin className="text-primary mb-4 animate-bounce" size={64} strokeWidth={2} />
                  <h4 className="text-2xl font-display font-bold mb-4">
                    Calle Hidalgo #6906
                  </h4>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Inserta aquí el iframe de Google Maps con tu ubicación exacta
                  </p>
                </div>
                
                {/* Mapa Real de Google Maps */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448162.19296158606!2d-106.49163133815594!3d28.6517191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea45002253c3e7%3A0x2b6d177a21cacf6a!2sPIFIS%20taqueria%20%26%20birrier%C3%ADa!5e0!3m2!1ses-419!2smx!4v1770600814745!5m2!1ses-419!2smx"
                  width="100%" 
                  height="500" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-3xl">
        <div className="grid grid-flow-col gap-4">
          <a href="#inicio" className="link link-hover">Inicio</a>
          <a href="#menu" className="link link-hover">Menú</a>
          <a href="#ubicacion" className="link link-hover">Ubicación</a>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="text-primary" size={40} />
            <span className="text-3xl font-display font-black fire-text">PIFIS</span>
          </div>
          <p className="text-lg font-semibold">Birriería • Taquería</p>
          <p className="text-gray-400 max-w-md">
            El verdadero sabor de la birria en Chihuahua
          </p>
        </div>
        
        <div>
          <div className="text-sm text-gray-400 mb-3">Síguenos en nuestras redes</div>
          <div className="grid grid-flow-col gap-4">
            <a 
              href="https://www.facebook.com/PIFISt&b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-primary transition-all"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/pifist.b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-secondary transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@pifis.tb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline hover:btn-accent transition-all"
              aria-label="TikTok"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="divider"></div>
        
        <div>
          <p className="text-sm text-gray-400">
            📍 Calle Hidalgo #6906, Col. Robinson, Chihuahua
          </p>
          <p className="text-sm text-gray-400">
            🕐 Lun-Dom: 7:00 AM - 3:00 PM
          </p>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} PIFIS - Birriería y Taquería. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
