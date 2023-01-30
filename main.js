const closeNav = document.getElementById('mobile-menu-icon');
const openNav = document.getElementById('toggle-button');
const mobileMenu = document.getElementById('mobile-menu');

closeNav.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu-show') {
    mobileMenu.className = 'mobile-menu-hide';
  }
  openNav.addEventListener('click', () => {
    if (mobileMenu.className === 'mobile-menu-hide') {
      mobileMenu.className = 'mobile-menu-show';
    }
  });
});