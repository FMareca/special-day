// photo data object and helpers
// this array will be used to randomize the photos shown in the "historia" section

// list of filenames inside public folder; update as you add/remove images
const filenames = [
  { foto: 'foto2.jpeg', descricao: 'Sempre a Mais Bela' },
  { foto: 'foto3.jpeg', descricao: 'Um dia Especial' },
  { foto: 'foto4.jpeg', descricao: 'Tuezin do 085' },
  { foto: 'foto5.jpeg', descricao: 'Diazao lindo com você' },
  { foto: 'foto6.png', descricao: 'Primeira viagem juntos' },
  { foto: 'foto7.jpeg', descricao: 'Amo essa foto ❤' },
  { foto: 'foto8.jpeg', descricao: 'Squad Completo' },
  { foto: 'foto9.jpeg', descricao: 'Quando a gente decidiu estar junto' },
  { foto: 'foto10.jpeg', descricao: 'Gosto mt desse dia' },
  { foto: 'foto11.jpeg', descricao: 'Eu dramático e você carinhosa' },
  { foto: 'foto12.jpeg', descricao: 'Mr. Doo ❤' },
  { foto: 'foto13.jpeg', descricao: 'Vechis House ❤' },
  { foto: 'foto14.jpeg', descricao: 'Caos controlado' },
  { foto: 'foto15.jpeg', descricao: 'O melhor abraço do mundo' },
  { foto: 'foto16.jpeg', descricao: 'Lindos e bobos' },
  { foto: 'foto17.jpeg', descricao: 'Gótica, emo e MARAVILHOSA' },
  { foto: 'foto18.jpeg', descricao: '1º musical' },
  { foto: 'foto19.jpeg', descricao: 'A minha paixão vendo sua paixão' },
  { foto: 'foto20.jpeg', descricao: 'Detalhes, Carinhos' },
  { foto: 'foto22.jpeg', descricao: 'Sem foto por favor (lindissima)' },
  { foto: 'foto23.jpeg', descricao: 'O sol é pequeno perto de voce' },
  { foto: 'foto24.jpeg', descricao: 'Natalinos ❤' }
];

// build an object array with src and caption derived from filename
const photoData = filenames.map((name) => {
  // remove extension and replace hyphens with spaces for caption
  return {
    foto: `./imagens/${name.foto}`,
    descricao: name.descricao
  };
});

// shuffle helper (Fisher–Yates)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// populate the .photo-grid inside #historia with randomized photos
function populateHistorySection() {
  const grid = document.querySelector('#historia .photo-grid');
  if (!grid) return;

  // clear any existing children
  grid.innerHTML = '';

  // clone and shuffle data so we don't mutate original
  const randomPhotos = shuffleArray([...photoData]);

  randomPhotos.slice(0, 7).forEach((photo, index) => {
    const div = document.createElement('div');
    div.className = `polaroid photo-${index + 1}`;

    const img = document.createElement('img');
    img.src = photo.foto;
    img.alt = photo.descricao;

    const span = document.createElement('span');
    span.textContent = photo.descricao;

    div.appendChild(img);
    div.appendChild(span);
    grid.appendChild(div);
  });
}

// run when the DOM is ready
document.addEventListener('DOMContentLoaded', populateHistorySection);
