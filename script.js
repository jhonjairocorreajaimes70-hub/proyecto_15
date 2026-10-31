// Primero pillamos los elementos del DOM que vamos a tocar
const desplegable = document.getElementById('miDesplegable');
const cajaPrincipal = document.getElementById('cajaPrincipal');
const textoOpcion = document.getElementById('textoOpcion');
const iconoFlecha = document.getElementById('iconoFlecha');
const opciones = document.querySelectorAll('.opcion');

// 1. Cuando le den clic a la barra principal, abrimos o cerramos el menú
cajaPrincipal.addEventListener('click', () => {
    desplegable.classList.toggle('activo');
    
    // Si está abierto ponemos la flecha mirando arriba, si no, pa' abajo
    if (desplegable.classList.contains('activo')) {
        iconoFlecha.textContent = '^';
    } else {
        iconoFlecha.textContent = 'v';
    }
});

// 2. Revisamos cada opción por si el usuario le da clic a alguna
opciones.forEach(item => {
    item.addEventListener('click', () => {
        // Le borramos la selección a todas las opciones primero pa' limpiar
        opciones.forEach(op => op.classList.remove('seleccionada'));
        
        // Y se la ponemos únicamente a la que acaban de tocar
        item.classList.add('seleccionada');

        // Cambiamos el texto de arriba por el de la opción elegida
        textoOpcion.textContent = item.textContent;

        // Cerramos el menú una vez seleccionada la opción
        desplegable.classList.remove('activo');
        iconoFlecha.textContent = 'v';
    });
});

// 3. Truco extra: Si le dan clic a cualquier lado fuera del menú, se cierra solo
window.addEventListener('click', (e) => {
    if (!desplegable.contains(e.target)) {
        desplegable.classList.remove('activo');
        iconoFlecha.textContent = 'v';
    }
});