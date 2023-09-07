let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nacimiento = document.getElementById("nacimiento");

function enviarDatos (){
fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("nacimiento").value = "";
});
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btn").addEventListener("click", ()=>{
        enviarDatos()
    })
});
