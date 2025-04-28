
const detailsButton = document.getElementById("btnDatails");
const detailsDiv = document.getElementById("content");
const closeButton = document.getElementById("close");

function openModal(){
  detailsButton.addEventListener("click", () => {
    detailsDiv.style.display = "block";
  });
}


closeButton.addEventListener("click", () => {
  detailsDiv.style.display = "none";
});

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