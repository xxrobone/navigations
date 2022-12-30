let menuBtn = document.querySelector('#hamburger');
let nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  console.log('clicked button');
  menuBtn.classList.toggle('active');

  nav.classList.toggle('open');
});
