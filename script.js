const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const closeModal = document.querySelector(".close-modal");

for (let card of cards) {
  card.addEventListener("click", () => {
    const videoID = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`;
  })
};

closeModal.addEventListener("click", () => {
  if (modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
  }
})