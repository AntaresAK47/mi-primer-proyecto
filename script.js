document.addEventListener('DOMContentLoaded', () => {
  const toggleBtns = document.querySelectorAll('.nav-toggle');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      if (!nav) return;

      // toggle con clase en lugar de inline styles
      nav.classList.toggle('active');
    });
  });
});
