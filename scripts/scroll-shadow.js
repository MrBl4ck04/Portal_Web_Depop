window.addEventListener('scroll', function() {
  const headerShadow = document.querySelector('.header-shadow');
  if (window.scrollY > 0) {
    headerShadow.classList.add('visible');
  } else {
    headerShadow.classList.remove('visible');
  }
});