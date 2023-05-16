var formulario = document.querySelector(".formulario")//Se cambia el # por un . porque es una clase no un id
//tmb no es form, es formulario

formulario.onsubmit = function algo (edad) {

  edad.prevent();
  
  //Se Cambia el nombre de las variables
  var nombreInput = formulario.elements[0]
  var edadInput = formulario.elements[1]
  var nacionalidadInput = formulario.elements[2]

  var nombre = nombreInput.value
  var edad = edadInput.value

  var i = nacionalidadInput.selectedIndex
  var nacionalidad = nacionalidadInput.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad > 18 || edad < 120) { // estaban mal las evaluaciones de la edad
    edad.classList.add("error")
  }

if (nombre.length > 0 && edad > 18 && edad < 120) {//se pone en un alinea para apreciacion
  console.log(nombre, edad, nacionalidad);
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("ul")// se cambia div a ul para lista
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)


//? esto lo subi, no se si va aqui de hecho porque marcaba error con la variable
crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)
}//Se agrega la llave de cierre (la que estaba hasta abajo)



function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

//aqui no se 
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);
}

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
//} se movio la llave de cierre