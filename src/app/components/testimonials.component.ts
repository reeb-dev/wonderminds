import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  template: `
    <section id="testimonios" class="py-24 bg-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-50" style="background-image: radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.05) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-pink-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            Testimonios
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Lo que dicen nuestros
            <span class="block bg-gradient-to-r from-cyan-500 to-pink-400 bg-clip-text text-transparent">estudiantes</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias de alumnos que lograron su certificación Cambridge.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-pink-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div class="relative pt-4">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                  CS
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Carla S.</h4>
                  <div class="flex items-center gap-2">
                    <span class="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">FCE Aprobado</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "Me preparé para el FCE con Sofía y aprobé en el primer intento. Las clases son claras y te ayudan a entender bien cada parte del examen. La recomiendo."
              </p>
              <div class="flex items-center gap-1">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                }
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div class="relative pt-4">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-yellow-500/30">
                  ML
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Martín L.</h4>
                  <div class="flex items-center gap-2">
                    <span class="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">PET Aprobado</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "Los grupos reducidos me permitieron avanzar a mi ritmo. Pude prepararme para el PET con atención personalizada. Los materiales y el seguimiento fueron clave para aprobar."
              </p>
              <div class="flex items-center gap-1">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                }
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div class="relative pt-4">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/30">
                  SG
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Sofía G.</h4>
                  <div class="flex items-center gap-2">
                    <span class="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">KET Aprobado</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                "Mi hijo está preparando el KET y está muy contento. Las clases son entretenidas y Sofía tiene mucha paciencia con los chicos."
              </p>
              <div class="flex items-center gap-1">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                }
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA Banner -->
        <div class="mt-16 text-center">
          <div class="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-cyan-50 to-pink-50 rounded-2xl p-6 border border-cyan-200">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div class="text-center sm:text-left">
              <p class="text-lg font-bold text-gray-900">¿Querés prepararte para Cambridge?</p>
              <p class="text-gray-600">Grupos reducidos con atención personalizada</p>
            </div>
            <a href="#contacto" class="bg-gradient-to-r from-cyan-500 to-pink-400 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Consultá ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class TestimonialsComponent {

}
