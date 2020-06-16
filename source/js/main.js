const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--opened');
mainNav.classList.remove('main-nav--no-js');
mainNavToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened');
});
