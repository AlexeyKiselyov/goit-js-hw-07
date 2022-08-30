import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

galleryBox.addEventListener("click", onClickModalOpen);

let instance = null;

function onClickModalOpen(e) {
  e.preventDefault();
  const dataSrc = e.target.dataset.source;
  instance = basicLightbox.create(
    `<img width="1400" height="900" src="${dataSrc}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyEscClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyEscClose);
      },
    }
  );
  instance.show();
}

function onKeyEscClose(e) {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
}

function createGalalery(arr) {
  const galleryStr = arr
    .map(({ preview, original, description }) => {
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
</div>
`;
    })
    .join("");
  galleryBox.insertAdjacentHTML("beforeend", galleryStr);
}

createGalalery(galleryItems);
