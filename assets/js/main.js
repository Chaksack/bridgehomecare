document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const form = document.querySelector('form');
  const note = document.querySelector('.form-note');
  if (form && note) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      note.textContent = 'Thanks for reaching out. We will reply within one business day.';
      form.reset();
    });
  }
});
