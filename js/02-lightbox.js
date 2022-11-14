import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const markUp = galleryItems
  .map(
    (item) =>
      `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
       data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
  )
    .join("");
  
    const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", markUp);
    
new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
})
