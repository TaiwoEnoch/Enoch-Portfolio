const closeNav = document.getElementById('mobile-menu-icon');
const openNav = document.getElementById('toggle-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.getElementById('mobile-menu-links');

closeNav.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu-show') {
    mobileMenu.className = 'mobile-menu-hide';
  }
});

openNav.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu-hide') {
    mobileMenu.className = 'mobile-menu-show';
  }
});

mobileMenuLinks.addEventListener('click', () => {
  if (mobileMenu.className === 'mobile-menu-show') {
    mobileMenu.className = 'mobile-menu-hide';
  }
});
// Details popup starts here
const checkProject = document.getElementById('check-project-popup');
const cardDetails = document.getElementById('card-details');

checkProject.addEventListener('click', () => {
  cardDetails.classList.toggle('full-details-show');
});

const detailCardOff = document.getElementById('detail-card-off');
detailCardOff.addEventListener('click', () => {
  cardDetails.classList.toggle('full-details-show');
});
// Details popup ends here