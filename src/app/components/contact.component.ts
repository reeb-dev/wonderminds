import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  level: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contacto" class="py-24 bg-gradient-to-b from-white to-cyan-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-pink-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              Contacto
            </span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ¿Listo para
              <span class="bg-gradient-to-r from-cyan-500 to-pink-400 bg-clip-text text-transparent">empezar?</span>
            </h2>
            <p class="text-xl text-gray-600 mb-10 leading-relaxed">
              Completá el formulario y te contacto para charlar sobre tu nivel actual y qué examen te conviene preparar.
            </p>
            
            <div class="space-y-6">
              <div class="group flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-100">
                <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Email</h4>
                  <a href="mailto:sofiaelianaiorio@gmail.com" class="text-gray-600 hover:text-cyan-500 transition-colors">sofiaelianaiorio&#64;gmail.com</a>
                </div>
              </div>
              <div class="group flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-100">
                <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Teléfono / WhatsApp</h4>
                  <a href="https://wa.me/542926404234" target="_blank" class="text-gray-600 hover:text-cyan-500 transition-colors">+54 2926 404234</a>
                </div>
              </div>
              <div class="group flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-100">
                <div class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Ubicación</h4>
                  <p class="text-gray-600">Pueblo San José, Coronel Suárez</p>
                  <p class="text-gray-500 text-sm">Buenos Aires, Argentina</p>
                  <span class="inline-block mt-1 px-2 py-0.5 bg-cyan-100 text-cyan-600 text-xs font-bold rounded-full">Clases presenciales</span>
                </div>
              </div>
              
              <!-- Mapa - Academia Wonder Minds -->
              <div class="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.5!2d-61.9109388!3d-37.5100724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eb73d806e96db5%3A0xa239a90fb9e50745!2sAcademia%20de%20ingl%C3%A9s%20Wonder%20Minds%20de%20Sofia%20Iorio!5e0!3m2!1ses!2sar!4v1704499200000!5m2!1ses!2sar"
                  width="100%" 
                  height="200" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full">
                </iframe>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-[2rem] blur-2xl opacity-20"></div>
            <div class="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10 border border-gray-100">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Formulario de Contacto</h3>
              <p class="text-gray-600 mb-8">Completa tus datos y te contactamos</p>
              
              <form (ngSubmit)="onSubmit()" #contactFormRef="ngForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input type="text" id="name" name="name" [(ngModel)]="contactForm.name" required 
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-400"
                    placeholder="Tu nombre">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" [(ngModel)]="contactForm.email" required email 
                      class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-400"
                      placeholder="tu@email.com">
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
                    <input type="tel" id="phone" name="phone" [(ngModel)]="contactForm.phone" required 
                      class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-400"
                      placeholder="+54 9 ...">
                  </div>
                </div>
                <div>
                  <label for="level" class="block text-sm font-semibold text-gray-700 mb-2">¿Qué curso te interesa?</label>
                  <select id="level" name="level" [(ngModel)]="contactForm.level" required 
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all appearance-none cursor-pointer">
                    <option value="">Selecciona un curso</option>
                    <optgroup label="Kids (6 a 12 años)">
                      <option value="Kids 1">Kids 1</option>
                      <option value="Kids 2">Kids 2</option>
                      <option value="Kids 3">Kids 3</option>
                      <option value="Kids 4">Kids 4</option>
                      <option value="Kids 5">Kids 5</option>
                    </optgroup>
                    <optgroup label="Adolescentes y Adultos">
                      <option value="A1">A1 - Principiante</option>
                      <option value="A2">A2 - Elemental</option>
                      <option value="A2+">A2+ - Pre-Intermedio</option>
                      <option value="B1">B1 - Intermedio</option>
                      <option value="B1+ Plus">B1+ Plus</option>
                      <option value="B2 First">B2 First</option>
                    </optgroup>
                    <option value="No sé">No sé mi nivel</option>
                  </select>
                </div>
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Mensaje (opcional)</label>
                  <textarea id="message" name="message" rows="4" [(ngModel)]="contactForm.message" 
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-400 resize-none"
                    placeholder="Contame un poco sobre vos o tu hijo/a..."></textarea>
                </div>
                <button type="submit" [disabled]="!contactFormRef.form.valid" 
                  class="w-full bg-gradient-to-r from-cyan-500 to-pink-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2">
                  <span>Enviar consulta</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              </form>
              
              <p class="mt-6 text-center text-sm text-gray-500">
                Al enviar, aceptas nuestra 
                <a href="#" class="text-cyan-500 hover:underline">política de privacidad</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    level: '',
    message: ''
  };

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.phone && this.contactForm.level) {
      // Construir el cuerpo del email
      const subject = encodeURIComponent(`Consulta Wonder Minds - ${this.contactForm.level}`);
      const body = encodeURIComponent(
        `Hola Sofía,\n\n` +
        `Mi nombre es ${this.contactForm.name}.\n\n` +
        `Datos de contacto:\n` +
        `- Email: ${this.contactForm.email}\n` +
        `- WhatsApp: ${this.contactForm.phone}\n\n` +
        `Curso de interés: ${this.contactForm.level}\n\n` +
        `${this.contactForm.message ? `Mensaje adicional:\n${this.contactForm.message}\n\n` : ''}` +
        `¡Quedo a la espera de tu respuesta!\n\n` +
        `Saludos.`
      );
      
      // Abrir cliente de correo con los datos
      window.location.href = `mailto:sofiaelianaiorio@gmail.com?subject=${subject}&body=${body}`;
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
