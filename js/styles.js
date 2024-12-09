const hamburger = document.getElementById('hamburger-container');

hamburger.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
})