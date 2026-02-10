// Selección de elementos del DOM
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const textoPrincipal = document.querySelector("h1");
const music = document.getElementById("musica");

let scale = 1;
let clickCount = 0;

// Lista de mensajes divertidos para el botón "No"
const mensajesNo = [
  "¿Estás segura? 🧐",
  "Piénsalo otra vez... 🥺",
  "¡Andaaaaa! 🌹",
  "Me vas a hacer llorar... 😭",
  "¡Que el SÍ está más bonito! ✨",
  "¡Ya ni se ve el botón! 😂",
  "Última oportunidad... 💖"
];

/**
 * Lógica para el botón "No"
 * Hace crecer al "Sí", achica al "No" y cambia los textos.
 */
noButton.addEventListener("click", () => {
  // 1. El botón SÍ crece cada vez más
  scale += 0.4;
  yesButton.style.transform = `scale(${scale})`;

  // 2. El botón NO se encoge gradualmente
  let currentNoScale = 1 - (clickCount * 0.12);
  if (currentNoScale > 0.2) {
    noButton.style.transform = `scale(${currentNoScale})`;
  } else {
    noButton.style.display = "none"; // Desaparece si es demasiado pequeño
  }

  // 3. Cambiar el texto del botón NO de forma aleatoria o secuencial
  if (clickCount < mensajesNo.length) {
    noButton.innerText = mensajesNo[clickCount];
  } else {
    noButton.innerText = "¡Dí que sí ya! 😤";
  }
  
  clickCount++;
});

/**
 * Lógica para el botón "Sí"
 * Muestra el mensaje final, la foto y activa la música.
 */
yesButton.addEventListener("click", () => {
  // Reproducir música (volumen al 60%)
  music.volume = 0.6
