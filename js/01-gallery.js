import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// -------//
const gallery = document.querySelector('.gallery')




function createGallery() {
    for (const item of galleryItems) {
        const markup = document.createElement('li');
        markup.innerHTML = `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</div>`;
        gallery.append(markup);
    }
}

gallery.addEventListener('click', openPicture);

function openPicture(evt) {
    evt.preventDefault()
    // if (evt.target.nodeName !== 'img') {
    //     return;
    // }

    evt.target.src = evt.target.dataset.source
    console.log(evt.target)
};

createGallery()