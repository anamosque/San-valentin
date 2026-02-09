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
  question.textContent = "💖";
  message.textContent = "Sabía que aceptarías 💘";
  document.querySelector(".buttons").style.display = "none";

  photo.style.display = "block";
  photo.style.width = "90vw";
  photo.style.maxWidth = "500px";
  photo.style.margin = "20px auto";
});
