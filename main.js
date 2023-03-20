const hamburger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/* Speakers Cards */
const speakers = [
  {
    grid: 1,
    id: 1,
    img: './assets/1.svg',
    nameS: 'Eunice Goes',
    currentPosition: 'Professor of Politics, Richmond University, London, UK',
    descriptionS: 'Politics at Richmond University, and her area of expertise is ideologies and the role of ideas in the activities of political parties.',
  },
  {
    grid: 2,
    id: 2,
    img: './assets/2.svg',
    nameS: 'Joern Langhorst',
    currentPosition: 'Associate Professor, University of Colorado Denver, USA',
    descriptionS: 'He was educated in Landscape Architecture, Architecture and Urban Planning, and has taught in Landscape Architecture, Architecture.',
  },
  {
    grid: 1,
    id: 3,
    img: './assets/3.svg',
    nameS: 'Robin Mansell',
    currentPosition: 'Department of Media and Communications, London School of Economics and Political Science, UK',
    descriptionS: 'Her research focuses on technology innovation, digital platform and governance and its socio-political and economic consequences.',
  },
  {
    grid: 2,
    id: 4,
    img: './assets/4.svg',
    nameS: 'Elzbieta Korolczuk',
    currentPosition: 'Warsaw University, Poland',
    descriptionS: ' Associate Professor in sociology working at Södertörn University in Stockholm and American Studies Center, Warsaw University.',
  },
  {
    grid: 1,
    id: 5,
    img: './assets/5.svg',
    nameS: 'Michał P. Garapich',
    currentPosition: 'University of Roehampton, UK',
    descriptionS: 'is an anthropologist and author of an award-winning monograph using intimate ethnography (Dzieci Kazimerza 2019), and over 60 publications.',
  },
  {
    grid: 2,
    id: 6,
    img: './assets/6.svg',
    nameS: 'William Allchorn',
    currentPosition: 'Adjunct Associate Professor, American University, London, UK',
    descriptionS: 'He is an expert on radical-right extremist social movements in the UK, Western Europe, and globally. He has most recently advised the UK, US',
  },
];

const speakersContainer = document.getElementById('speakers-container');

const cardsCreation = (speakers, containerName) => {
  speakers.forEach((item) => {
    const card = document.createElement('div');
    if (item.id > 2) {
      card.classList = 'speaker speaker-hidden';
    } else {
      card.classList = 'speaker d-flex';
    }
    card.innerHTML = ` 
      <img class="cards-img" src="${item.img}" alt="${item.nameS}">
      <div class="Speaker-info">
        <h5>${item.nameS}</h5>
        <h6>${item.currentPosition}</h6>
        <img class="card-line" src="./assets/line.svg" alt="">
        <p>${item.descriptionS}</p>
      </div>
    `;
    containerName.appendChild(card);
  });
};

cardsCreation(speakers, speakersContainer);

const btnSpeakers = document.getElementById('btn-speaker');
const btnText = document.querySelector('.btn-more');
const arrow = document.querySelector('.arrow');

btnSpeakers.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.speaker-hidden');
  hiddenCards.forEach((card) => {
    card.classList.toggle('active');
    card.classList.toggle('speaker-hidden');
  });
  if (btnText.innerText === 'MORE') {
    btnText.innerText = 'Less';
    arrow.classList.toggle('active');
  } else {
    btnText.innerText = 'More ';
    const visibleCards = document.querySelectorAll('.speaker.active');
    visibleCards.forEach((card) => {
      card.classList.remove('active');
      card.classList.toggle('speaker-hidden');
      arrow.classList.remove('active');
    });
  }
});
