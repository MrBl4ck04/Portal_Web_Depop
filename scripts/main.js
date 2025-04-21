// Add JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero-section');
  heroSection.addEventListener('mouseover', () => {
    heroSection.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  });
  heroSection.addEventListener('mouseout', () => {
    heroSection.style.backgroundColor = 'transparent';
  });

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