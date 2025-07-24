const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

const lines = [
  "terima kasih sudah bilang YES. Aku bakal inget momen ini, bahkan saat laptopku hang.",
  "target harian: bikin kamu senyum minimal 1x. Target bonus: 7x.",
  "kalau kamu capek, aku dengerin. Kalau kamu lapar, ya makan lah. kalau kamu ngantuk… ya tidur, jangan dipaksa.",
  "aku nggak janji jadi yang paling sempurna, tapi aku janji jadi yang paling niat.",
  "deal? yuk kita gelud."
];

yesBtn.addEventListener('click', () => {
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.style.cursor = "default";
  noBtn.style.cursor = "default";
  noBtn.style.transform = "none";

  response.innerHTML = ""; // kosongkan dulu
  showMessages();
});

// Tombol NO tetap nailong (lari) kalau belum klik YES
noBtn.addEventListener('mouseover', () => {
  if (!yesBtn.disabled) {
    const offsetX = (Math.random() - 0.5) * 300;
    const offsetY = (Math.random() - 0.5) * 200;
    noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});

function showMessages() {
  let i = 0;
  const next = () => {
    if (i >= lines.length) {
      spawnLove(12);
      return;
    }
    const p = document.createElement('p');
    response.appendChild(p);
    typeLine(lines[i], p, () => {
      spawnLove(4);
      i++;
      setTimeout(next, 500);
    });
  };
  next();
}

function typeLine(text, node, done, idx = 0) {
  if (idx < text.length) {
    node.textContent += text.charAt(idx);
    setTimeout(() => typeLine(text, node, done, idx + 1), 25);
  } else {
    done();
  }
}

function spawnLove(count = 10) {
  for (let i = 0; i < count; i++) {
    const love = document.createElement('div');
    love.className = 'love';
    love.innerHTML = "💖";
    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.top = window.innerHeight + "px";
    love.style.fontSize = (Math.random() * 16 + 16) + "px";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 3000);
  }
}
