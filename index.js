let tasks = document.getElementById("tasks");
let form = document.getElementById("form");
let msg = document.getElementById("msg");
let categorie = document.getElementById("categorie");
let titre = document.getElementById("titre");
let date = document.getElementById("date");
let textarea = document.getElementById("textarea");
let statut = document.getElementById("statut");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if (categorie.value === "" || titre.value === "" || date.value === "" || textarea.value === "" || statut.value === "") {
        msg.innerHTML = "La tâche ne peut pas être vide";
    } else {
        msg.innerHTML = "";

        acceptData();
    }
}
// local storage
let data = [];
let acceptData = () => {
    data.push({
        categorie: categorie.value,
        titre: titre.value,
        date: date.value,
        textarea: textarea.value,
        statut:statut.value,
    })

    localStorage.setItem("data", JSON.stringify(data));
    
    createTasks();
}

// Creation de nouvelles taches
let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
      <div class="taches" id=${y}>
            <p>${x.date}</p>
            <p>${x.titre}</p>
            <p>${x.categorie}</p>
    
            <p class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </p>
          </div>
      `);
    });
  
    resetForm();
  };
