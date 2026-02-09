const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const photo = document.getElementById("photo");
const music = document.getElementById("music");

let noScale = 1;
let yesScale = 1;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 150;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  noScale -= 0.1;
  yesScale += 0.15;

  if (noScale < 0.3) noScale = 0.3;

  noButton.style.transform = `scale(${noScale})`;
  yesButton.style.transform = `scale(${yesScale})`;
});

yesButton.addEventListener("click", () => {
  // limpiar pantalla
  document.body.innerHTML = "";

  // imagen a pantalla completa
  const img = document.createElement("img");
  img.src = "img/nosotros.jpg";
  img.className = "fullscreen-img";
  document.body.appendChild(img);

  // texto encima
  const text = document.createElement("div");
  text.innerText = "Sabía que aceptarías 💘";
  text.style.position = "fixed";
  text.style.bottom = "40px";
  text.style.width = "100%";
  text.style.textAlign = "center";
  text.style.color = "white";
  text.style.fontSize = "32px";
  text.style.fontWeight = "bold";
  text.style.textShadow = "0 0 15px black";
  text.style.zIndex = "1000";

  document.body.appendChild(text);
});
