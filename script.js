const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const textoPrincipal = document.getElementById("texto");
const music = document.getElementById("musica");

let scale = 1;
let clickCount = 0;

// 1. Esto cambia el texto inicial a la pregunta automáticamente
setTimeout(() => {
    if(textoPrincipal) {
        textoPrincipal.innerText = "¿Quieres ser mi San Valentín? ❤️";
    }
}, 3000); // 3 segundos de espera

const mensajesNo = [
    "¿Segura? 🧐",
    "Piénsalo bien... 🥺",
    "¡Andaaa! 🌹",
    "¡No me hagas esto! 😭",
    "Última oportunidad... 💖"
];

// Lógica para el botón NO
noButton.addEventListener("click", () => {
    scale += 0.5;
    yesButton.style.transform = `scale(${scale})`;

    if (clickCount < mensajesNo.length) {
        noButton.innerText = mensajesNo[clickCount];
    }

    // Mover el botón NO de lugar para que sea difícil darle clic (opcional)
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    clickCount++;
});

// Lógica para el botón SÍ
yesButton.addEventListener("click", () => {
    music.play().catch(e => console.log("Error con música:", e));

    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; background: #ff80ab; color: white; font-family: sans-serif;">
            <h1>¡SABÍA QUE DIRÍAS QUE SÍ! 😍❤️</h1>
            <img src="nosotros.jpg" alt="Nosotros" style="width: 80%; max-width: 400px; border-radius: 15px; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin: 20px 0;">
            <p style="font-size: 1.2rem;">"De todas las personas, siempre te elegiría a ti."</p>
        </div>
    `;
});

// Activar música con un clic en cualquier lado
document.addEventListener("click", () => {
    music.play().then(() => {
        music.volume = 0.5;
    }).catch(() => {});
}, { once: true });
