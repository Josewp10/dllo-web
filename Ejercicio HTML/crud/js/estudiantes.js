
let estudiantes = [];

function obtenerValores(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;        
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let carrera = document.getElementById("carrera").value;

    //Primera forma
    /**let miEstudiante = {};
    miEstudiante.id = id;*/

    //Segunda Forma
    let miEstudiante = {id, name, lastName, age, email, carrera}
    console.log(miEstudiante);
    return miEstudiante;
}

function crearEstudiantes(){
    let estudiante = obtenerValores();
    estudiantes.push(estudiante);
}
