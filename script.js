const letterButton = document.getElementById("letterButton");
const letterContent = document.getElementById("letterContent");

letterButton.addEventListener("click", () => {
  const isOpening = letterContent.hidden;
  letterContent.hidden = !isOpening;
  letterButton.setAttribute("aria-expanded", String(isOpening));
  letterButton.textContent = isOpening ? "Close your letter ♡" : "Open your letter 💌";
});

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
wishButton.addEventListener("click", () => {
  wishMessage.textContent = "✨ Wish granted: may your year be as lovely as your heart. I love you! 💗";
  for (let i = 0; i < 18; i++) createHeart(true);
});

const heartsLayer = document.querySelector(".floating-hearts");
function createHeart(fromButton = false) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "✦", "💕"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 22}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  if (fromButton) {
    heart.style.left = `${25 + Math.random() * 50}%`;
    heart.style.fontSize = `${18 + Math.random() * 20}px`;
  }
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 11500);
}
setInterval(() => createHeart(), 900);
