const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
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
  music.play();

  document.body.innerHTML = `
    <img src="img/nosotros.jpg" class="fullscreen-img">
    <div style="
      position: fixed;
      bottom: 40px;
      width: 100%;
      text-align: center;
      font-size: 36px;
      color: white;
      font-weight: bold;
      text-shadow: 0 0 20px black;
      z-index: 10000;
    ">
      Sabía que aceptarías 💘
    </div>
  `;
});
