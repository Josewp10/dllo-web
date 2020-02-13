
 

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

let estudiantes = [
    {id:"001", name:"Jose", lastName:"Marulanda O",
    age:"18", email:"jdmowp10@gmail.com", carrera:"Ing. Sistemas"}
]

function crearEstudiantes(){
    let estudiante = obtenerValores();
    estudiantes.push(estudiante);
}

function cargarInformacion(index){
    document.getElementById("btn_crear_estudiante").style.display = "none";
    document.getElementById("btn_actualizar").style.display = "inline";

    /**
     let estudn = estudiantes[index];
    document.getElementById("id").value = estudn.id;
    document.getElementById("name").value = estudn.name;
    document.getElementById("lastName").value = estudn.lastName;        
    document.getElementById("age").value = estudn.age;
    document.getElementById("email").value = estudn.email;
    document.getElementById("carrera").value = estudn.carrera;
       */ 
}


function eliminarEstudiante(index){
    estudiantes.splice(index,1);
    listarEstudiantes();
}

function actualizarEstudiante() {
    cargarInformacion(miEstudiante);
}
function listarEstudiantes() {
    let lista = document.getElementById("lista_estudiantes");
    let data = "";
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data += "<tr>";
        data += `<td>${miEstudiante.id}</td>`;
        data += `<td>${miEstudiante.name}</td>`;
        data += `<td>${miEstudiante.lastName}</td>`;
        data += `<td>${miEstudiante.age}</td>`;
        data += `<td>${miEstudiante.email}</td>`;
        data += `<td>${miEstudiante.carrera}</td>`;
        data += `<td>`
                + `<button type="button" onclick="cargarInformacion(`+miEstudiante+`)" class=" btn btn-primary">Editar</button>`
                +`<button type="button" onClick="eliminarEstudiante(`+i+`)" class="btn btn-primary">Eliminar</button>`+`</td>`;
        data += "</tr>";
    }
    lista.innerHTML = data;
}

listarEstudiantes();
