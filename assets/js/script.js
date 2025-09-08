// Función pintar con color por defecto 'green'
const pintar = (elemento, color = 'black') => {
  elemento.style.backgroundColor = color;
};

// Selección del elemento
const ele = document.getElementById("ele1");

// Escuchador con función flecha que pasa el color 'yellow' y el elemento clickeado
ele.addEventListener("click", (event) => {
  pintar(event.target, 'yellow');
});