const inputText = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const list = document.querySelector(".list"); // Récupérer l'élément parent

let toDo = "";
let toDos = [];
let nextId = 0;

loadToDos();
updateList(); // Mettre à jour la liste au chargement de la page

// Fonction pour stocker la valeur de l'input text dans la variable
inputText.addEventListener("input", (e) => {
  toDo = e.target.value;
});

// Fonction pour ajouter la tâche au tableau des tâches
function addTodo() {
  if (toDo) {
    toDos.push({ id: nextId++, task: toDo });
    saveToDos();
    updateList();
  }
}

// Fonction pour sauvegarder les tâches dans le local storage
function saveToDos() {
  localStorage.setItem("Todos", JSON.stringify(toDos));
}

// Fonction pour charger les tâches du local storage
function loadToDos() {
  const storedToDos = localStorage.getItem("Todos");
  if (storedToDos) {
    toDos = JSON.parse(storedToDos);
  }
}

// Fonction pour mettre à jour la liste dans le DOM
function updateList() {
  list.innerHTML = "";
  toDos.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.task;
    listItem.setAttribute("data-id", item.id); // Ajouter l'ID comme attribut
    list.appendChild(listItem);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  inputText.value = ""; // Réinitialiser le champ de saisie
  toDo = ""; // Réinitialiser la variable toDo
});

// Supprimer la tâche
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const idToRemove = parseInt(e.target.getAttribute("data-id"));
    toDos = toDos.filter((item) => item.id !== idToRemove);
    saveToDos();
    updateList();
  }
});
