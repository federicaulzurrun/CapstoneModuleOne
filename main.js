const hamburger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');
const containerMain = document.querySelector('.container-main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  containerMain.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  containerMain.classList.remove('active');
}));

/* Speakers Cards */
const speakers = [
  {
    id: 1,
    img: './assets/Eunice-Goes.jpg',
    nameS: 'Eunice Goes',
    currentPosition: 'Professor of Politics, Richmond University, London, UK',
    descriptionS: 'Politics at Richmond University, and her area of expertise is ideologies and the role of ideas in the activities of political parties.',
  },
  {
    id: 2,
    img: './assets/Joern-Langhorst.jpg',
    nameS: 'Joern Langhorst',
    currentPosition: 'Associate Professor, University of Colorado Denver, USA',
    descriptionS: 'He was educated in Landscape Architecture, Architecture and Urban Planning, and has taught in Landscape Architecture, Architecture.',
  },
  {
    id: 3,
    img: './assets/Robin-Mansell.jpeg',
    nameS: 'Robin Mansell',
    currentPosition: 'Department of Media and Communications, London School of Economics and Political Science, UK',
    descriptionS: 'Her research focuses on technology innovation, digital platform and governance and its socio-political and economic consequences.',
  },
  {
    id: 4,
    img: './assets/Elzbieta-Korolczuk.jpeg',
    nameS: 'Elzbieta Korolczuk',
    currentPosition: 'Warsaw University, Poland',
    descriptionS: ' Associate Professor in sociology working at Södertörn University in Stockholm and American Studies Center, Warsaw University.',
  },
  {
    id: 5,
    img: './assets/Michał-Garapich.jpeg',
    nameS: 'Michał P. Garapich',
    currentPosition: 'University of Roehampton, UK',
    descriptionS: 'is an anthropologist and author of an award-winning monograph using intimate ethnography (Dzieci Kazimerza 2019), and over 60 publications.',
  },
  {
    id: 6,
    img: './assets/William-Allchorn.png',
    nameS: 'William Allchorn',
    currentPosition: 'Adjunct Associate Professor, American University, London, UK',
    descriptionS: 'He is an expert on radical-right extremist social movements in the UK, Western Europe, and globally. He has most recently advised the UK, US',
  },
];

const speakersContainer = document.getElementById('speakers-container');

const cardsCreation = (speakers, containerName) => {
  speakers.forEach((item) => {
    const card = document.createElement('div');
    card.classList = 'speaker d-flex flex-row';
    card.innerHTML = ` 
      <img class="cards-img" src="${item.img}" alt="">
      <div class="Speaker-info">
        <h5>${item.nameS}</h5>
        <h6>${item.currentPosition}</h6>
        <img class="card-line " src="./assetes/lineSpeakers.svg" alt="">
        <p>${item.descriptionS}</p>
      </div>
    `;
    containerName.appendChild(card);
  });
};

cardsCreation(speakers, speakersContainer);