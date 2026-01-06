import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  template: `
    <section id="certificaciones" class="py-24 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-pink-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100 to-cyan-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-pink-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
            Cursos de Inglés
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6">
            Cursos para todas
            <span class="block bg-gradient-to-r from-cyan-500 to-pink-400 bg-clip-text text-transparent">las edades</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Desde los más chiquitos hasta adultos, cada uno aprende a su ritmo en grupos reducidos y con mucho acompañamiento.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Kids -->
          <div class="group relative bg-white rounded-3xl p-8 border border-pink-100 hover:border-pink-200 shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">🧒</span>
              </div>
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded-full">6 a 12 años</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Kids 1, 2, 3, 4 y 5</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Clases divertidas donde los chicos aprenden inglés jugando. Cada nivel se adapta a su edad y conocimientos previos.</p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-pink-50 text-pink-600 text-sm font-medium rounded-lg border border-pink-100">Kids 1</span>
                <span class="px-3 py-1.5 bg-pink-50 text-pink-600 text-sm font-medium rounded-lg border border-pink-100">Kids 2</span>
                <span class="px-3 py-1.5 bg-pink-50 text-pink-600 text-sm font-medium rounded-lg border border-pink-100">Kids 3</span>
                <span class="px-3 py-1.5 bg-pink-50 text-pink-600 text-sm font-medium rounded-lg border border-pink-100">Kids 4</span>
                <span class="px-3 py-1.5 bg-pink-50 text-pink-600 text-sm font-medium rounded-lg border border-pink-100">Kids 5</span>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-600">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Aprendizaje a través del juego</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Grupos reducidos (máx. 8 chicos)</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Material y práctica en PDF</span>
                </li>
              </ul>
              <a href="#contacto" class="group/btn inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-800 transition-colors">
                Consultar disponibilidad 
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Adolescentes y Adultos -->
          <div class="group relative bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 shadow-2xl shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-500">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">📚</span>
              </div>
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-sm">Adolescentes y Adultos</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Niveles A1 a B2</h3>
              <p class="text-white/90 mb-6 leading-relaxed">Cursos completos con Writing, Speaking, Listening, Grammar y Vocabulary. Avanzás a tu ritmo.</p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-white/15 text-white text-sm font-medium rounded-lg border border-white/20">A1</span>
                <span class="px-3 py-1.5 bg-white/15 text-white text-sm font-medium rounded-lg border border-white/20">A2</span>
                <span class="px-3 py-1.5 bg-white/15 text-white text-sm font-medium rounded-lg border border-white/20">A2+</span>
                <span class="px-3 py-1.5 bg-white/15 text-white text-sm font-medium rounded-lg border border-white/20">B1</span>
                <span class="px-3 py-1.5 bg-white/15 text-white text-sm font-medium rounded-lg border border-white/20">B1+</span>
                <span class="px-3 py-1.5 bg-yellow-400/90 text-gray-900 text-sm font-bold rounded-lg">B2</span>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-white/90">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Material y práctica en PDF</span>
                </li>
                <li class="flex items-center text-white/90">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Grupos reducidos (máx. 8 alumnos)</span>
                </li>
                <li class="flex items-center text-white/90">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <span class="text-sm">Preparación Cambridge (KET, PET, FCE)</span>
                </li>
              </ul>
              <a href="#contacto" class="group/btn inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                Consultar disponibilidad
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Qué incluyen los cursos -->
        <div class="mt-16 bg-gradient-to-br from-gray-50 to-cyan-50/50 rounded-3xl p-8 md:p-10 border border-gray-100">
          <div class="text-center mb-8">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">¿Qué incluyen los cursos completos?</h3>
            <p class="text-gray-600">Trabajamos todas las habilidades del idioma</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">✍️</span>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Writing</p>
            </div>
            <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">🗣️</span>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Speaking</p>
            </div>
            <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">👂</span>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Listening</p>
            </div>
            <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">📚</span>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Grammar</p>
            </div>
            <div class="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">📖</span>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Vocabulary</p>
            </div>
          </div>
          <p class="text-center text-gray-500 text-sm mt-6">📄 Material y práctica disponible en formato PDF</p>
        </div>

        <!-- Paquetes opcionales -->
        <div class="mt-12 bg-gradient-to-br from-pink-50 to-cyan-50/50 rounded-3xl p-8 md:p-10 border border-pink-100">
          <div class="text-center mb-8">
            <span class="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded-full mb-3">También disponible</span>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Paquetes por habilidad</h3>
            <p class="text-gray-600">Si querés enfocarte en algo específico, podés optar por estos paquetes</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all group">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">📚📖</span>
              </div>
              <p class="font-bold text-gray-800 text-sm">Grammar & Vocabulary</p>
            </div>
            <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all group">
              <div class="w-14 h-14 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">👂🗣️</span>
              </div>
              <p class="font-bold text-gray-800 text-sm">Listening & Speaking</p>
            </div>
            <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all group">
              <div class="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">✍️</span>
              </div>
              <p class="font-bold text-gray-800 text-sm">Writing</p>
            </div>
            <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all group">
              <div class="w-14 h-14 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span class="text-2xl">🌍💬</span>
              </div>
              <p class="font-bold text-gray-800 text-sm">Practical English</p>
              <p class="text-xs text-gray-500 mt-1">Situaciones de la vida real</p>
            </div>
          </div>
        </div>

        <!-- Cambridge Recognition Banner -->
        <div class="mt-20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 rounded-3xl"></div>
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 20px 20px;"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="text-center md:text-left">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">¿Por qué elegir Cambridge?</h3>
                <p class="text-white/80 max-w-xl">Certificación reconocida mundialmente por más de 25,000 organizaciones.</p>
              </div>
              <div class="flex flex-wrap justify-center gap-4">
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <p class="font-bold text-white text-sm">Cambridge Assessment</p>
                    <p class="text-xs text-white/70">Centro oficial preparador</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl">🌎</span>
                  </div>
                  <div>
                    <p class="font-bold text-white text-sm">Reconocido mundialmente</p>
                    <p class="text-xs text-white/70">Universidades y empresas</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="text-2xl">👩‍🏫</span>
                  </div>
                  <div>
                    <p class="font-bold text-white text-sm">Clases presenciales</p>
                    <p class="text-xs text-white/70">En Coronel Suárez, Buenos Aires</p>
                  </div>
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
export class CertificationsComponent {

}
