document
  .querySelector(".download-link")
  .addEventListener("click", function (event) {
    console.log("Ссылка для скачивания была нажата");
    // Можно добавить дополнительную логику здесь
  });

const modal = document.querySelector("#theme-toggler");
const modalContent = document.querySelector(".modal-content");

if (modal.classList.contains("fa-sun")) {
  modalContent.style.backgroundColor = "black";
} else {
  modalContent.style.backgroundColor = "white";
}
