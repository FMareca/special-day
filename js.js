// photo data object and helpers
// this array will be used to randomize the photos shown in the "historia" section

// list of filenames inside public folder; update as you add/remove images
const filenames = [
  'foto2.jpeg',
  'foto3.jpeg',
  'foto4.jpeg',
  'foto5.jpeg',
  'foto6.png',
  'foto7.jpeg',
  'foto8.jpeg',
  'foto9.jpeg',
  'foto10.jpeg',
  'foto11.jpeg',
  'foto12.jpeg',
  'foto13.jpeg',
  'foto14.jpeg',
  'foto15.jpeg',
  'foto16.jpeg',
  'foto17.jpeg',
  'foto18.jpeg',
  'foto19.jpeg',
  'foto20.jpeg',
  'foto22.jpeg',
  'foto23.jpeg',
  'foto24.jpeg'
];

// build an object array with src and caption derived from filename
const photoData = filenames.map((name) => {
  // remove extension and replace hyphens with spaces for caption
  const caption = name.replace(/\.[^.]+$/, '').replace(/-/g, ' ');
  return {
    src: `/public/${name}`,
    caption
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

  randomPhotos.forEach((photo) => {
    const div = document.createElement('div');
    div.className = 'polaroid';

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;

    const span = document.createElement('span');
    span.textContent = photo.caption;

    div.appendChild(img);
    div.appendChild(span);
    grid.appendChild(div);
  });
}

// run when the DOM is ready
document.addEventListener('DOMContentLoaded', populateHistorySection);
