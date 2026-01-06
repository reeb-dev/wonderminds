import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed w-full z-50 transition-all duration-300" [class]="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-pink-500/5' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="#hero" class="flex items-center space-x-3 group">
            <!-- Logo Wonder Minds - Integrado con fondo suave -->
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-cyan-50 p-1.5 shadow-sm group-hover:shadow-md transition-all duration-300">
              <img src="assets/logo.png" alt="Wonder Minds Logo" class="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-bold">
                <span class="font-display italic text-cyan-500">Wonder</span>
                <span class="font-sans font-extrabold text-pink-400 ml-1">Minds</span>
              </h1>
              <p class="text-[10px] text-gray-500 font-semibold tracking-ultra-wide uppercase">Inglés en Coronel Suárez</p>
            </div>
          </a>
          
          <div class="hidden lg:flex items-center space-x-1">
            <a href="#hero" class="relative text-gray-700 hover:text-cyan-500 font-medium px-4 py-2 rounded-xl transition-all duration-300 group">
              Inicio
              <span class="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
            <a href="#certificaciones" class="relative text-gray-700 hover:text-cyan-500 font-medium px-4 py-2 rounded-xl transition-all duration-300 group">
              Cursos
              <span class="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
            <a href="#nosotros" class="relative text-gray-700 hover:text-cyan-500 font-medium px-4 py-2 rounded-xl transition-all duration-300 group">
              Sobre mí
              <span class="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
            <a href="#testimonios" class="relative text-gray-700 hover:text-cyan-500 font-medium px-4 py-2 rounded-xl transition-all duration-300 group">
              Testimonios
              <span class="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
            <a href="#contacto" class="ml-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Contacto
            </a>
          </div>

          <button class="lg:hidden p-2 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-xl transition-all" (click)="toggleMenu.emit()">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (menuOpen) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              }
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (menuOpen) {
          <div class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-xl shadow-pink-500/10 animate-fade-in-up">
            <div class="py-4 px-4 space-y-1">
              <a href="#hero" (click)="toggleMenu.emit()" class="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-cyan-500 hover:bg-pink-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Inicio
              </a>
              <a href="#certificaciones" (click)="toggleMenu.emit()" class="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-cyan-500 hover:bg-pink-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Cursos
              </a>
              <a href="#nosotros" (click)="toggleMenu.emit()" class="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-cyan-500 hover:bg-pink-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Sobre mí
              </a>
              <a href="#testimonios" (click)="toggleMenu.emit()" class="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-cyan-500 hover:bg-pink-50 rounded-xl font-medium transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Testimonios
              </a>
              <div class="pt-3 mt-3 border-t border-pink-100">
                <a href="#contacto" (click)="toggleMenu.emit()" class="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-pink-500/20">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Contacto
                </a>
              </div>
            </div>
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
  @Output() toggleMenu = new EventEmitter<void>();
  scrolled = false;
  
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
  }
}
