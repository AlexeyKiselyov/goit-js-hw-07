import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function createGalalery(arr) {
  const galleryStr = arr
    .map(({ preview, original, description }) => {
      return `  
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"        
      />
    </a>
`;
    })
    .join("");
  galleryBox.insertAdjacentHTML("beforeend", galleryStr);
}

createGalalery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
