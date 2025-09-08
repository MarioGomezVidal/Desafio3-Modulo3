
let Fondo = document.querySelector("#key");
let container = document.querySelector("#container");


document.addEventListener("keydown", (evento) => {

  if (evento.key === "a") {
    Fondo.style.backgroundColor = "pink";
  } else if (evento.key === "s") {
    Fondo.style.backgroundColor = "orange";
  } else if (evento.key === "d") {
    Fondo.style.backgroundColor = "#87CEEB";
  }

  if (evento.key === "q") {
    agregarColor("purple");
  } else if (evento.key === "w") {
    agregarColor("gray");
  } else if (evento.key === "e") {
    agregarColor("brown");
  }
});


function agregarColor(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.margin = "10px";
  nuevoDiv.style.backgroundColor = color;
  container.appendChild(nuevoDiv);
}