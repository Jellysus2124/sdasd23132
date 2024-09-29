const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "Aww, ong cũng yêu bé vãi lồn! 💖";
  message.style.color = "#ff6b6b";
});

noBtn.addEventListener("click", () => {
  // Randomly position the No button on the screen
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
