const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");
const photo = document.getElementById("photo");
const question = document.getElementById("question");
const music = document.getElementById("music");

const messages = [
  "¿Segur@? 😳",
  "No seas cruel 🥺",
  "Vamos, di que sí 💘",
  "El NO ya no es opción 😏",
  "El destino habló 💞"
];

let msgIndex = 0;
let noScale = 1;
let yesScale = 1;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 100;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  noScale -= 0.1;
  yesScale += 0.15;

  if (noScale < 0.3) noScale = 0.3;

  noButton.style.transform = `scale(${noScale})`;
  yesButton.style.transform = `scale(${yesScale})`;

  message.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

yesButton.addEventListener("click", () => {
  // Reproduce la música
  music.play();

  // Limpia la pantalla y muestra la imagen a pantalla completa
  document.body.innerHTML = `
    <img 
      src="img/nosotros.jpg"
      style="
        width:100vw;
        height:100vh;
        object-fit:cover;
      "
    >
    <div style="
      position:fixed;
      bottom:30px;
      width:100%;
      text-align:center;
      color:white;
      font-size:28px;
      font-weight:bold;
      text-shadow:0 0 10px black;
    ">
      Sabía que aceptarías 💘
    </div>
  `;
});
