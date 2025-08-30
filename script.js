// script.js
document.addEventListener('DOMContentLoaded', () => {
  // toggler simple para mostrar/ocultar el nav en móvil
  const toggleBtns = document.querySelectorAll('.nav-toggle');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      if (!nav) return;
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      // pequeño estilo in-line para móvil, ideal para empezar
      nav.style.flexDirection = 'column';
      nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))';
      nav.style.padding = '0.75rem';
      nav.style.position = 'absolute';
      nav.style.right = '1rem';
      nav.style.top = '64px';
      nav.style.borderRadius = '8px';
    });
  });
});
