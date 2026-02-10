/* MENSAJES INICIALES */
const messages = [
  "Hola amor 💖",
  "Tengo algo importante que preguntarte…",
  "Prometo que es fácil responder 😌",
  "¿Quieres ser mi San Valentín? 💘"
];

let index = 0;

const text = document.querySelector("h1");
const buttons = document.querySelector("div");

buttons.style.display = "none";

function showMessages() {
  if (index < messages.length) {
    text.textContent = messages[index];
    index++;
    setTimeout(showMessages, 2000);
  } else {
    buttons.style.display = "flex";
  }
}

showMessages();

/* BOTONES */
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const music = document.getElementById("music");

/* BOTÓN SÍ */
yesButton.addEventListener("click", () => {
   // reproducir música ANTES de borrar el body
  music.volume = 0.6;
music.play();
  
  overlay.innerHTML = `
  <img src="img/nosotros.jpg">
  <div class="final-message">
    Sabía que aceptarías 💘
  </div>
  ;
`});

  // guardar la música antes de borrar el body
  const audioHTML = music.outerHTML;

  document.body.innerHTML = `
    ${audioHTML}
    <img src="img/nosotros.jpg" class="fullscreen-img">
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 40px;
      color: white;
      font-weight: bold;
      text-shadow: 0 0 25px black;
      z-index: 10000;
    ">
      Sabía que aceptarías 💘
    </div>
  `;

  // volver a reproducir por si el navegador lo pausa
  document.getElementById("music").play();
});

/* BOTÓN NO */
const noMessages = [
  "¿Seguro? 🤨",
  "Piénsalo bien 😏",
  "No es una opción 😌",
  "Inténtalo otra vez 😈",
  "Vamos… di que sí 💖"
];

let noIndex = 0;

noButton.addEventListener("mouseover", () => {
  // cambia mensaje
  text.textContent = noMessages[noIndex];
  noIndex = (noIndex + 1) % noMessages.length;

  // mueve botón
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});
