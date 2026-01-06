import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section id="hero" class="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <!-- Background with gradient and pattern -->
      <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-cyan-50/50"></div>
      <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.12) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <!-- Floating decorative elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style="animation-delay: 4s;"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="space-y-8 animate-fade-in-up">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/10">
                <span class="flex h-2 w-2 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Clases de inglés en Coronel Suárez
              </div>
              <h1 class="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                <span class="font-sans font-extrabold text-gray-800">Aprendé inglés</span>
                <span class="block mt-2">
                  <span class="font-display italic text-cyan-500">con Wonder</span>
                  <span class="font-sans font-black bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent ml-2">Minds</span>
                </span>
              </h1>
              <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Clases de inglés para chicos, adolescentes y adultos con <span class="text-cyan-500 font-semibold">Sofía Iorio</span>. 
                Grupos reducidos en Pueblo San José con seguimiento personalizado.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <span class="relative z-10 flex items-center gap-2">
                  Quiero info
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#certificaciones" class="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-cyan-200 text-cyan-600 rounded-2xl font-bold text-lg hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 shadow-lg">
                <span class="flex items-center gap-2">
                  Ver cursos
                  <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </a>
            </div>

            <div class="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-pink-200/50">
              <div class="text-center sm:text-left">
                <p class="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">8</p>
                <p class="text-sm text-gray-600 mt-1 font-medium">Alumnos por grupo</p>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">95%</p>
                <p class="text-sm text-gray-600 mt-1 font-medium">Aprobación</p>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">+5</p>
                <p class="text-sm text-gray-600 mt-1 font-medium">Años enseñando</p>
              </div>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="relative">
              <!-- Decorative rings -->
              <div class="absolute -inset-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
              
              <!-- Main card -->
              <div class="relative bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-500 rounded-[2rem] p-10 text-white shadow-2xl shadow-cyan-500/30 transform hover:scale-[1.02] transition-transform duration-500">
                <!-- Glass overlay -->
                <div class="absolute inset-0 bg-white/5 rounded-[2rem]"></div>
                
                <div class="relative text-center space-y-6">
                  <!-- Logo Wonder Minds - Integrado con fondo suave -->
                  <div class="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl p-3 border border-white/30">
                    <img src="assets/logo.png" alt="Wonder Minds Logo" class="w-full h-full object-contain drop-shadow-lg rounded-2xl">
                  </div>
                  <div>
                    <h3 class="text-4xl font-black tracking-tight">
                      <span class="font-display italic">Wonder Minds</span>
                    </h3>
                    <p class="text-lg mt-2 text-white/80 font-medium tracking-wide">Inglés para todos</p>
                  </div>
                  
                  <div class="flex justify-center gap-3 flex-wrap">
                    <span class="px-4 py-2 bg-pink-400/30 rounded-xl text-sm font-bold backdrop-blur-sm border border-pink-300/30">🧒 Kids</span>
                    <span class="px-4 py-2 bg-white/20 rounded-xl text-sm font-bold backdrop-blur-sm border border-white/20">A1-A2</span>
                    <span class="px-4 py-2 bg-white/20 rounded-xl text-sm font-bold backdrop-blur-sm border border-white/20">B1</span>
                    <span class="px-4 py-2 bg-yellow-400/30 rounded-xl text-sm font-bold backdrop-blur-sm border border-yellow-300/30">B2</span>
                  </div>
                  
                  <div class="pt-6 border-t border-white/20">
                    <div class="flex items-center justify-center gap-2 text-white/90">
                      <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <p class="text-sm font-medium">Preparación Cambridge oficial</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating badges -->
              <div class="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl shadow-cyan-500/20 animate-bounce-subtle">
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold text-gray-800 text-sm">Grupos reducidos</p>
                    <p class="text-xs text-gray-500">Atención personalizada</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl shadow-pink-500/20 animate-bounce-subtle" style="animation-delay: 1s;">
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                    <span class="text-xl">📄</span>
                  </div>
                  <div>
                    <p class="font-bold text-gray-800 text-sm">Material en PDF</p>
                    <p class="text-xs text-gray-500">Incluido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#certificaciones" class="flex flex-col items-center text-cyan-500 hover:text-pink-400 transition-colors">
          <span class="text-xs font-medium mb-2 tracking-widest uppercase">Conocé más</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: ``
})
export class HeroComponent {

}
