// photo data object and helpers
// this array will be used to randomize the photos shown in the "historia" section

// list of filenames inside public folder; update as you add/remove images
const filenames = [
  { foto: 'foto2.jpeg', descricao: 'Momento especial' },
  { foto: 'foto3.jpeg', descricao: 'Dia feliz' },
  { foto: 'foto4.jpeg', descricao: 'Juntos' },
  { foto: 'foto5.jpeg', descricao: 'Sorriso' },
  { foto: 'foto6.png', descricao: 'Diversão' },
  { foto: 'foto7.jpeg', descricao: 'Lembrança' },
  { foto: 'foto8.jpeg', descricao: 'Momento' },
  { foto: 'foto9.jpeg', descricao: 'Alegria' },
  { foto: 'foto10.jpeg', descricao: 'Encontro' },
  { foto: 'foto11.jpeg', descricao: 'Celebração' },
  { foto: 'foto12.jpeg', descricao: 'Memória' },
  { foto: 'foto13.jpeg', descricao: 'Felicidade' },
  { foto: 'foto14.jpeg', descricao: 'Instante' },
  { foto: 'foto15.jpeg', descricao: 'Conexão' },
  { foto: 'foto16.jpeg', descricao: 'Energia' },
  { foto: 'foto17.jpeg', descricao: 'Amor' },
  { foto: 'foto18.jpeg', descricao: 'Companhia' },
  { foto: 'foto19.jpeg', descricao: 'Presente' },
  { foto: 'foto20.jpeg', descricao: 'Eternidade' },
  { foto: 'foto22.jpeg', descricao: 'Encanto' },
  { foto: 'foto23.jpeg', descricao: 'Beleza' },
  { foto: 'foto24.jpeg', descricao: 'Continuação' }
];

// build an object array with src and caption derived from filename
const photoData = filenames.map((name) => {
  // remove extension and replace hyphens with spaces for caption
  return {
    foto: `/public/${name.foto}`,
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
