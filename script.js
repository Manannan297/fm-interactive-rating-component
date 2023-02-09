"use strict";

const card = document.querySelector(".card");
const form = document.querySelector(".card__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.querySelector('input[name="rating"]:checked')) return;

  const rating = form.querySelector('input[name="rating"]:checked').value;
  const ratingOut = document.querySelector(".rating__out");
  ratingOut.textContent = rating;

  card.classList.add("submitted");
});
