const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const music = document.getElementById("music");

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

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});
