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

const projects = [{
  projectName: 'Professional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bd-desk-one.png',
  projectDescription: '1 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectName: 'Data Dashboard Healthcare',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-dash.png',
  projectDescription: '2 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectName: 'Website Portfolio',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-web.png',
  projectDescription: '3 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectName: 'Professional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bd-desk-one.png',
  projectDescription: '4 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectName: 'Data Dashboard Healthcare',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-dash.png',
  projectDescription: '5 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectName: 'Website Portfolio',
  projectLang: ['html', 'bootstrap', 'Ruby', 'js'],
  featureImg: './images/bg-web.png',
  projectDescription: '6 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}];

projects.forEach((project, index) => {
  const laguages = project.projectLang.map((lang) => `<li id='show-card-${index + 1}' class='language'>${lang}</li>`).join('');
  const list = document.getElementById('work-showcase');
  const item = document.createElement('div');
  item.classList.add('wk-section');
  item.id = `showcase-work-${index + 1}`;
  item.innerHTML = `<h3 class='profession hidden'>${project.projectName}</h3>
  <p class='prof-details hidden'>${project.projectDescription}</p>
  <ul class='lang-list hidden'>
    ${laguages}
  </ul>
  <button id='see-popup-${index + 1}' class='b-t-n-2 hide-btn'>See Project</button>`;
  list.appendChild(item);
});

projects.forEach((project, index) => {
  const laguages = project.projectLang.map((lang) => `<li class='code-list'>${lang}</li>`).join('');
  const card = document.getElementById('body');
  const detailPopuop = document.createElement('section');
  detailPopuop.classList.add('full-details');
  detailPopuop.id = `card-details-${index + 1}`;
  detailPopuop.innerHTML = `<div class='combination'>
  <div class='div-for-details d-flex'>
    <div class='main-heading-detailed d-flex'>
        <p class='heading-data'>${project.projectName}</p>
        <p class='heading-desktop-data-popup'>${project.projectName}</p>
        <nav class='switch-off'></nav>
          <i id='detail-card-off-${index + 1}' class='fa-solid fa-x details-menu'></i>
        </nav>
    </div>
    <ul class='new-list d-flex'>
      ${laguages}
    </ul>
    <div class='everything-details'>
      <div class='mobile-snap-popup'>
        <div class='snapshot-image flex-one'>
          <img class='deatails-popup-img' src='${project.featureImg}' class='snap-shot'>
        </div>
        <div class='deatail-words flex-one'>
          <p class='paragraph-desktop-popup'>${project.projectDescription}</p>
          <div class='div-for-button d-flex'>
            <a href='${project.seeLive}' class='details-button'>
              See Live
              <img src='./images/see-live.png'>
            </a>
            <a href='${project.seeSource}' class='details-button-btn'>
              See Source
              <img src='./images/src-gitHub.png'>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  card.appendChild(detailPopuop);
});

const seePopup1 = document.getElementById('see-popup-1');
const seePopup2 = document.getElementById('see-popup-2');
const seePopup3 = document.getElementById('see-popup-3');
const seePopup4 = document.getElementById('see-popup-4');
const seePopup5 = document.getElementById('see-popup-5');
const seePopup6 = document.getElementById('see-popup-6');

const detailCardOff1 = document.getElementById('detail-card-off-1');
const detailCardOff2 = document.getElementById('detail-card-off-2');
const detailCardOff3 = document.getElementById('detail-card-off-3');
const detailCardOff4 = document.getElementById('detail-card-off-4');
const detailCardOff5 = document.getElementById('detail-card-off-5');
const detailCardOff6 = document.getElementById('detail-card-off-6');

const cardDetails1 = document.getElementById('card-details-1');
const cardDetails2 = document.getElementById('card-details-2');
const cardDetails3 = document.getElementById('card-details-3');
const cardDetails4 = document.getElementById('card-details-4');
const cardDetails5 = document.getElementById('card-details-5');
const cardDetails6 = document.getElementById('card-details-6');

// 1 starts
seePopup1.addEventListener('click', () => {
  cardDetails1.classList.toggle('full-details-show');
});

detailCardOff1.addEventListener('click', () => {
  cardDetails1.classList.toggle('full-details-show');
});
// 1 ends

// 2 starts
seePopup2.addEventListener('click', () => {
  cardDetails2.classList.toggle('full-details-show');
});

detailCardOff2.addEventListener('click', () => {
  cardDetails2.classList.toggle('full-details-show');
});
// 2 ends

// 3 starts
seePopup3.addEventListener('click', () => {
  cardDetails3.classList.toggle('full-details-show');
});

detailCardOff3.addEventListener('click', () => {
  cardDetails3.classList.toggle('full-details-show');
});
// 3 ends

// 4 starts
seePopup4.addEventListener('click', () => {
  cardDetails4.classList.toggle('full-details-show');
});

detailCardOff4.addEventListener('click', () => {
  cardDetails4.classList.toggle('full-details-show');
});
// 4 ends

// 5 starts
seePopup5.addEventListener('click', () => {
  cardDetails5.classList.toggle('full-details-show');
});

detailCardOff5.addEventListener('click', () => {
  cardDetails5.classList.toggle('full-details-show');
});
// 5 ends

// 6 starts
seePopup6.addEventListener('click', () => {
  cardDetails6.classList.toggle('full-details-show');
});

detailCardOff6.addEventListener('click', () => {
  cardDetails6.classList.toggle('full-details-show');
});
// 6 ends

// Details popup ends here