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
  projectIndex: 'showcase-work-1',
  projectName: 'Professional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bd-desk-one.png',
  projectDescription: '1 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectIndex: 'showcase-work-2',
  projectName: 'Data Dashboard Healthcare',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-dash.png',
  projectDescription: '2 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectIndex: 'showcase-work-3',
  projectName: 'Website Portfolio',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-web.png',
  projectDescription: '3 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectIndex: 'showcase-work-4',
  projectName: 'Professional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bd-desk-one.png',
  projectDescription: '4 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectIndex: 'showcase-work-5',
  projectName: 'Data Dashboard Healthcare',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  featureImg: './images/bg-dash.png',
  projectDescription: '5 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}, {
  projectIndex: 'showcase-work-6',
  projectName: 'Website Portfolio',
  projectLang: ['html', 'bootstrap', 'Ruby', 'js'],
  featureImg: './images/bg-web.png',
  projectDescription: '6 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  seeLive: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
  seeSource: 'https://taiwoenoch.github.io/TaiwoEnoch-Portfolio/',
}];

projects.forEach((project, index) => {
  const languages = project.projectLang.map((lang) => `<li id='show-card-${index + 1}' class='language'>${lang}</li>`).join('');
  const list = document.getElementById('work-showcase');
  const item = document.createElement('div');
  item.classList.add('wk-section');
  item.id = `showcase-work-${index + 1}`;
  item.innerHTML = `<h3 class='profession hidden'>${project.projectName}</h3>
  <p class='prof-details hidden'>${project.projectDescription}</p>
  <ul class='lang-list hidden'>
    ${languages}
  </ul>
  <button id='see-popup-${project.projectIndex}' class='b-t-n-2 hide-btn'>See Project</button>`;
  list.appendChild(item);
});

const createPopUpComponent = (project) => {
  const languages = project.projectLang.map((lang) => `<li class='code-list'>${lang}</li>`).join('');
  const detailPopup = document.createElement('section');
  detailPopup.classList.add('full-details');
  detailPopup.id = `card-details-${1}`;
  detailPopup.innerHTML = `<div class='combination'>
  <div class='div-for-details d-flex'>
    <div class='main-heading-detailed d-flex'>
        <p class='heading-data'>${project.projectName}</p>
        <p class='heading-desktop-data-popup'>${project.projectName}</p>
        <nav class='switch-off'></nav>
          <i id='detail-card-off-${1}' class='fa-solid fa-x details-menu'></i>
        </nav>
    </div>
    <ul class='new-list d-flex'>
      ${languages}
    </ul>
    <div class='everything-details'>
      <div class='mobile-snap-popup'>
        <div class='snapshot-image flex-one'>
          <img class='details-popup-img' src='${project.featureImg}' class='snap-shot'>
        </div>
        <div class='detail-words flex-one'>
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
  return detailPopup;
};

const displayPopUp = (project) => {
  const body = document.querySelector('body');
  const popup = createPopUpComponent(project);
  body.appendChild(popup);
};

const checkID = (id) => {
  projects.forEach((pro, index) => {
    if (id === pro.projectIndex) {
      displayPopUp(projects[index]);
    }
  });
};

const seeProjectButtons = document.querySelectorAll('.b-t-n-2');

seeProjectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const projectId = e.target.parentElement.id;
    checkID(projectId);
  });
});
// Details popup ends here

// Contact Validation