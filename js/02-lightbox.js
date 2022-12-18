import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ----- //

const container = document.querySelector('.gallery');
const galleryMarkup = createGallery();
container.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
   <a class="gallery__link" href="${original}">
     <img
     class="gallery__image"
     src="${preview}"
     alt="${description}"
     />
     </a>
     `;
    })
    .join('');
}

// container.addEventListener('click', openImage);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 150,
});

gallery.on('show.simplelightbox', function () {
  evt.preventDefault();
  console.log(evt);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.target.open;
});

/* function openImage(evt) {
 
} */
