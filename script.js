// Selección de elementos
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const textoPrincipal = document.getElementById("texto");
const music = document.getElementById("musica");

let scale = 1;
let clickCount = 0;

// 1. CAMBIO DE TEXTO INICIAL (Para que no se quede trabado)
// Esto cambia el "Hola..." por la pregunta después de 2 segundos
setTimeout(() => {
    textoPrincipal.innerText = "¿Quieres ser mi San Valentín? ❤️";
    textoPrincipal.style.animation = "fadeIn 1s";
}, 2500);

// Lista de mensajes para el botón "No"
const mensajesNo = [
  "¿Estás segura? 🧐",
  "Piénsalo otra vez... 🥺",
  "¡Andaaaaa! 🌹",
  "Me vas a hacer llorar... 😭",
  "¡Que el SÍ está más bonito! ✨",
  "Última oportunidad... 💖"
];

// Lógica para el botón "No"
noButton.addEventListener("click", () => {
  scale += 0.5; // El SÍ crece
  yesButton.style.transform = `scale(${scale})`;

  let currentNoScale = 1 - (clickCount * 0.15);
  if (currentNoScale > 0.3) {
    noButton.style.transform = `scale(${currentNoScale})`;
  } else {
    noButton.style.display = "none"; 
  }

  if (clickCount < mensajesNo.length) {
    noButton.innerText = mensajesNo[clickCount];
  }
  clickCount++;
});

// Lógica para el botón "Sí"
yesButton.addEventListener("click", () => {
  music.volume = 0.6;
  music.play();

  // Pantalla Final
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center;">
      <h1 style="font-size: 3rem; color: #fff; margin-bottom: 20px;">¡SABÍA QUE DIRÍAS QUE SÍ! 😍❤️</h1>
      
      <div style="position: relative; display: inline-block;">
        <img src="nosotros.jpg" alt="Nosotros" 
          style="width: 100%; max-width: 400px; border-radius: 15px; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: rotate(-3deg);">
      </div>

      <p style="font-size: 1.5rem; color: #fff; margin-top: 30px; font-style: italic; max-width: 500px;">
        "De todas las personas en el mundo, siempre te elegiría a ti. Gracias por ser mi San Valentín favorito."
      </p>
      <div style="font-size: 2.5rem; margin-top: 15px;">🌹✨🥂</div>
    </div>
  `;
  
  document.body.style.background = "linear-gradient(135deg, #ff80ab 0%, #ff4081 100%)";
});

// Activar música al primer clic en cualquier lado (Requisito del navegador)
document.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(() => console.log("Música lista para el SÍ"));
    }
}, { once: true });
