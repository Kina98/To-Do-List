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
    }
}