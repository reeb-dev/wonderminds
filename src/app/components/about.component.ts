import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="nosotros" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-1/2 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2"></div>
      <div class="absolute top-1/3 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-pink-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              Sobre Wonder Minds
            </span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Preparamos mentes 
              <span class="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">para el futuro</span>
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              En <strong class="text-gray-900">Wonder Minds</strong> creemos que aprender inglés abre puertas. Desde Pueblo San José, Coronel Suárez, acompañamos a chicos, adolescentes y adultos en su camino hacia el dominio del idioma.
            </p>
            <p class="text-gray-600 text-lg mb-10 leading-relaxed">
              Con grupos reducidos y un ambiente cálido, cada alumno recibe la atención que necesita para crecer y alcanzar sus metas.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-cyan-50 transition-colors duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Material Cambridge</h4>
                  <p class="text-gray-600 text-sm mt-1">Avalado internacionalmente</p>
                </div>
              </div>
              <div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-green-50 transition-colors duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Grupos reducidos</h4>
                  <p class="text-gray-600 text-sm mt-1">Atención personalizada</p>
                </div>
              </div>
              <div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-cyan-50 transition-colors duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Horarios flexibles</h4>
                  <p class="text-gray-600 text-sm mt-1">Adaptados a tu rutina</p>
                </div>
              </div>
              <div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-pink-50 transition-colors duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Método dinámico</h4>
                  <p class="text-gray-600 text-sm mt-1">Clases entretenidas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <!-- Main card -->
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-[2rem] blur-2xl opacity-20"></div>
              <div class="relative bg-gradient-to-br from-cyan-500 via-cyan-400 to-pink-400 rounded-[2rem] p-10 text-white shadow-2xl shadow-cyan-500/30">
                <div class="absolute inset-0 bg-white/5 rounded-[2rem]"></div>
                <div class="relative text-center">
                  <div class="w-36 h-36 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto mb-6 flex items-center justify-center border-4 border-white/30 shadow-xl p-3">
                    <img src="assets/logo.png" alt="Wonder Minds Logo" class="w-full h-full object-contain rounded-2xl">
                  </div>
                  <h3 class="text-3xl font-black">
                    <span class="font-serif italic">Sofía</span> <span class="font-sans">Iorio</span>
                  </h3>
                  <p class="text-white/80 mb-6 font-medium tracking-wide">Fundadora & Directora</p>
                  <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <svg class="w-8 h-8 text-white/60 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p class="text-white/90 text-sm leading-relaxed italic">
                      "Me encanta ver el progreso de cada alumno. Cada logro, por más pequeño que sea, es un paso hacia su futuro."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating decorations -->
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl -z-10 shadow-lg shadow-yellow-500/30"></div>
            <div class="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl -z-10 shadow-lg shadow-pink-500/30"></div>
            
            <!-- Stats floating card -->
            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl shadow-cyan-500/10 animate-bounce-subtle">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-black text-2xl text-gray-900">8 max</p>
                  <p class="text-xs text-gray-500 font-medium">Alumnos por grupo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class AboutComponent {

}
