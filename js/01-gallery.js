import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// -------//
const container = document.querySelector('.gallery');
const gallery = createGallery();
container.insertAdjacentHTML('beforeend', gallery);

function createGallery() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
    <div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
     />
     </a>
     </div>`;
    })
    .join('');
}
console.log(gallery);

/* function createGallery() {
  for (const item of galleryItems) {
    const markup = document.createElement('div');
    markup.innerHTML = `<div class="gallery__item">
    <div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
     <img
     class="gallery__image"
     src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}"
     />
     </a>
     </div>;`;

    container.append(markup);
  }
}
createGallery(); */

container.addEventListener('click', openImage);

function openImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const overlay = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.getAttribute(
      'alt'
    )}">`
  );
  overlay.show();
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      overlay.close();
    }
  });
}
