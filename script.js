const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const closeModal = document.querySelector(".close-modal");

closeModal.addEventListener("click", () => {
  if (modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active");
  }
})

for (let card of cards) {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`;
  })
};

