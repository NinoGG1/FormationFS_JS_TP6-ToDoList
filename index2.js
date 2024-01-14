const form = document.querySelector("form");

window.addEventListener("load", getList());

// Storage part
function storageList() {
  window.localStorage.todoList = list.innerHTML;
}

function getList() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur une tâche pour la supprimer</li>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";

  storageList();
});

// Remove element
list.addEventListener("click", (e) => {
  e.target.remove();
  storageList();
});
