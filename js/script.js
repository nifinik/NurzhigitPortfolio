let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
function openTab(evt, tabName) {
  evt.preventDefault(); // Prevent the default action

  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all tab links
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the clicked tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablink").click();
});

// Функция для показа модального окна с деталями товара
function showProductDetails(img) {
  var modal = document.getElementById("productDetailsModal");
  const productTitle = document.getElementById("productTitle");
  const productDescription = document.getElementById("productDescription");
  const productImg = document.getElementById("productImg");
  // productTitle.textContent = title;
  // productDescription.textContent = description;
  productImg.src = img;
  modal.style.display = "block";
}

// Функция для закрытия модального окна с деталями товара
function closeProductDetailsModal() {
  const modal = document.getElementById("productDetailsModal");
  modal.style.display = "none";
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});

function closeModal() {
  var modal2 = document.getElementById("productDetailsModal");
  modal2.style.display = "none";
}

// Функция для переключения вкладок
function openTab(evt, tabName) {
  evt.preventDefault(); // Предотвращение действия по умолчанию

  // Показать выбранную вкладку и скрыть остальные
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  // Установить активный класс для выбранной вкладки
  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
}

// По умолчанию открыть первую вкладку
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablink").click();
});
