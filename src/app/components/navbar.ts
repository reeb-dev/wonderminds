import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed w-full z-50 bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Wonder Minds</h1>
              <p class="text-xs text-gray-500">Cambridge English</p>
            </div>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#hero" class="text-gray-700 hover:text-blue-600 font-medium transition">Inicio</a>
            <a href="#certificaciones" class="text-gray-700 hover:text-blue-600 font-medium transition">Certificaciones</a>
            <a href="#ventajas" class="text-gray-700 hover:text-blue-600 font-medium transition">Por qué nosotros</a>
            <a href="#testimonios" class="text-gray-700 hover:text-blue-600 font-medium transition">Testimonios</a>
            <a href="#contacto" class="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all">
              Contáctanos
            </a>
          </div>

          <button class="md:hidden text-gray-700" (click)="toggleMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        @if (menuOpen) {
          <div class="md:hidden pb-4 space-y-2">
            <a href="#hero" class="block py-2 text-gray-700 hover:text-blue-600">Inicio</a>
            <a href="#certificaciones" class="block py-2 text-gray-700 hover:text-blue-600">Certificaciones</a>
            <a href="#ventajas" class="block py-2 text-gray-700 hover:text-blue-600">Por qué nosotros</a>
            <a href="#testimonios" class="block py-2 text-gray-700 hover:text-blue-600">Testimonios</a>
            <a href="#contacto" class="block py-2 text-blue-600 font-semibold">Contáctanos</a>
          </div>
        }
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
  @Input() menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
