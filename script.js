const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");

const messages = [
  "¿Estás segur@? 😳",
  "Piénsalo otra vez 💭",
  "Vamos… di que sí 🥺",
  "No es una opción 💘",
  "El destino ya decidió 😏",
  "Sabes que quieres 💞"
];

let index = 0;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 80;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  message.textContent = messages[index];
  index = (index + 1) % messages.length;
});

yesButton.addEventListener("click", () => {
  message.textContent = "Sabía que dirías que sí 😍💖 Feliz San Valentín";
});
