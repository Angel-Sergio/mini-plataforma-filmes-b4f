const detailsDiv = document.getElementById("content");

const detailsButton = document.getElementById("detailsButton");

const closeButton = document.getElementsByClassName("close")[0];

detailsButton.onclick = function () {
  detailsDiv.style.display = "block";
};

closeButton.onclick = function () {
  detailsDiv.style.display = "none";
};

// Função para mostrar detalhes de um filme

import { films } from "../data/db.js";
function newfilms() {
  document.addEventListener("DOMContentLoaded", () => {
    const idInput = document.getElementById("id");
    const titleInput = document.getElementById("title");
    const genderInput = document.getElementById("gender");
    const yearInput = document.getElementById("year");
    const rateInput = document.getElementById("rate");
    const descriptionInput = document.getElementById("description");
    const imageUrlInput = document.getElementById("imageUrl");
  });
}

console.log(newfilms);
