import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

const galleryList = galleryItems.map(el => {
 
 return ` <li class="gallery__item">
   <a class="gallery__link" href=${el.original}>
      <img class="gallery__image" src=${el.preview} alt=${el.description} title=${el.description} />
   </a>
</li>`
}).join('')
const galleryImage = document.querySelector('.gallery__image')
gallery.innerHTML = galleryList
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
})


