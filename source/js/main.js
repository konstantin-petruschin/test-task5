const toggleButtonElement = document.querySelector('.header__toggle');
const menuElement = document.querySelector('.header__menu');
const headerElement = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo-image');
const headerLogoText = document.querySelector('.header__logo-text')

toggleButtonElement.addEventListener('click', function () {
  toggleButtonElement.classList.toggle('header__toggle--closed');
  menuElement.classList.toggle('header__menu--open');

  if (menuElement.classList.contains('header__menu--open')) {
    document.body.style.overflow = 'hidden';
    headerElement.classList.add('header--white');
    headerLogo.classList.add('logo--black');
    headerLogoText.classList.add('logo--black');
  } else {
    document.body.style.overflow = '';
    headerElement.classList.remove('header--white');
    headerLogo.classList.remove('logo--black');
    headerLogoText.classList.remove('logo--black');
  }
});

const dropdownLinks = Array.from(document.querySelectorAll('.nav__link--dropdown'));
// const dropdownLinks = document.querySelectorAll('.nav__link--dropdown');
dropdownLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = this.nextElementSibling;
    this.classList.toggle('nav__link--active');
    dropdown.classList.toggle('nav__link-dropdawn--open');
    dropdownLinks.forEach(otherLink => {
      if (otherLink !== this) {
        const otherDropdown = otherLink.nextElementSibling;
        if (otherDropdown.classList.contains('nav__link-dropdawn--open')) {
          otherDropdown.classList.remove('nav__link-dropdawn--open');
          otherLink.classList.remove('nav__link--active');
        }
      }
    });
  });
});



document.addEventListener('click', function(event) {
  const isClickInsideMenu = dropdownLinks.some(link => link.contains(event.target));

  if (!isClickInsideMenu) {
    dropdownLinks.forEach(link => {
      const dropdown = link.nextElementSibling;
      if (link.classList.contains('nav__link--active')) {
        link.classList.remove('nav__link--active');
        dropdown.classList.remove('nav__link-dropdawn--open');
      }
    });
  }
});

