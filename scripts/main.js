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
});