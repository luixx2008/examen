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
    nuevaTareaElemento.innerHTML = `
        <span>${nuevaTarea}</span>
        <button class="btnEliminar">Eliminar</button>
    `;

    // Agregar el elemento a la lista
    tareaList.appendChild(nuevaTareaElemento)
    // Limpiar el input
    tareaInput.value = ''
    }})

    //delegacion de eventos
    tareaList.addEventListener('click', (event) => {
        //1 detectar si se hizo click en el boton eliminar
        if (event.target.classList.contains('btnEliminar')) {
            const lipadre = event.target.parentElement;
            lipadre.remove()
        }
        //2 detectar si se hizo click en el texto de la tarea o el li para marcarla como completada
        else {
            //buscar el li mas cercano por si se hizo click en el span o en el li
            const li = event.target.closest('li')
            if (li) li.classList.toggle('tareaCompletada');
        }
    });
const btnEliminarTarea = document.getElementById('btnEliminarTarea')
btnEliminarTarea.addEventListener('click', () => {
    // Eliminar todas las tareas de la lista
    tareaList.innerHTML = '';
})
function guardarEnStorage() {
    const tareas = [];
    //recorrer los li y extraer su info
    tareaList.querySelectorAll('li').forEach(li => {
        tareas.push({
            texto: li.querySelector('span').textContent,
            completada: li.classList.contains('tareaCompletada')
        })
    });
    //guardar el array convertido a string
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
//funcion cargar
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.forEach(tarea => {
        crearElementoTarea(tarea.texto, tarea.completada);
    });
}

//funcion auxiliar para no repetir codigo al crear el html
function crearElementoTarea(texto, completada = false) {
    const nuevaTareaElemento = document.createElement('li')
    if (completada) nuevaTareaElemento.classList.add('tareaCompletada');
    nuevaTareaElemento.innerHTML = `
        <span>${texto}</span>
        <button class="btnEliminar">Eliminar</button>
    `;
    tareaList.appendChild(nuevaTareaElemento)
}