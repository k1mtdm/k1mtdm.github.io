document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-trigger');
  const nav = document.querySelector('.nav');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      nav.classList.toggle('open');
    });
  });
});
