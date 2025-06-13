document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const buttons = document.querySelectorAll('.btn-trigger');
  const nav = document.querySelector('.nav');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      nav.classList.toggle('open');
    });
  });
});
