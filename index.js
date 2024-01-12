const inputText = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const list = document.querySelector(".list"); // Récupérer l'élément parent

let todo = "";

inputText.addEventListener("input", (e) => {
  todo = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${todo}</li>`; // Ajouter un élément à la liste

  inputText.value = "";
  todo = null;
});

// Utiliser la délégation d'événements
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
