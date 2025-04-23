// Add JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', () => {

  // Initialize particles.js
  particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('particles.js loaded');
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Botón volver arriba
  const btnVolverArriba = document.getElementById('btn-volver-arriba');
  
  // Mostrar/ocultar el botón según el scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnVolverArriba.classList.add('visible');
    } else {
      btnVolverArriba.classList.remove('visible');
    }
  });
  
  // Funcionalidad de volver arriba con animación
  btnVolverArriba.addEventListener('click', () => {
    // Animación del botón al hacer clic
    btnVolverArriba.classList.add('clicked');
    
    // Volver arriba con animación suave
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Quitar la clase después de la animación
    setTimeout(() => {
      btnVolverArriba.classList.remove('clicked');
    }, 300);
  });
});