// Cambiar el color del fondo a un color aleatorio usando el boton
const button = document.getElementById('btnColor')
// Funcion para generar un color aleatorio
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor.padStart(6, '0');
}
// Agregar un evento al boton para cambiar el color del fondo
button.addEventListener('click', () => {
    // Cambiar el color del fondo a un color aleatorio
    document.body.style.backgroundColor = getRandomColor();
})
const contadorDisplay = document.getElementById('contadorDisplay')
const btnIncrementar = document.getElementById('btnIncrementar')
const btnDecrementar = document.getElementById('btnDecrementar')

let cuenta = 0

function actualizarContador() {
    contadorDisplay.textContent = cuenta; // Actualizar el contador en la pantalla

    if (cuenta > 0) {
        contadorDisplay.style.color = 'green'; // Cambiar a verde si es positivo
    } else if (cuenta < 0) {
        contadorDisplay.style.color = 'red'; // Cambiar a rojo si es negativo
    } else {
        contadorDisplay.style.color = 'black'; // Cambiar a negro si es cero
    }
}

btnIncrementar.addEventListener('click', () => {
    cuenta++
    actualizarContador()
})

btnDecrementar.addEventListener('click', () => {
    cuenta--
    actualizarContador()
})
const tareaInput = document.getElementById('tareaInput')
const btnEnviarTarea = document.getElementById('btnEnviarTarea')
const tareaList = document.getElementById('tareaList')

btnEnviarTarea.addEventListener('click', () => {
    if (tareaInput.value.trim() !== "") {
    // Obtener el valor del input
    const nuevaTarea = tareaInput.value
    // Crear un nuevo elemento de lista
    const nuevaTareaElemento = document.createElement('li')
    // Asignar el texto de la nueva tarea al elemento
    nuevaTareaElemento.textContent = nuevaTarea
    // Agregar el elemento a la lista
    tareaList.appendChild(nuevaTareaElemento)
    // Limpiar el input
    tareaInput.value = ''
    }})

