const reactions = [
  "Aaaa kamu senyum yaa 😍",
  "Dinaaa jangan terlalu imut dong 😚",
  "Senyum kamu bisa nyembuhin dunia 🌍💖",
  "Nailong juga senyum tuh! 🐉✨",
  "Senyum terus yaa, biar acaranya makin lancar 😘",
];

function jumpNailong() {
  const nailong = document.querySelector('.nailong');
  const reaction = document.getElementById('reaction');

  nailong.classList.add('jump');
  setTimeout(() => nailong.classList.remove('jump'), 600);

  const messages = [
    "Aaaa kamu senyum yaa 😍",
    "Senyum kamu bikin Nailong bahagia!",
    "Cie cieee cantik bangeeet 😚",
    "Nailong jadi salting 🐉💕",
    "Acaranya pasti lancar kalau kamu senyum~ 🌸",
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  reaction.textContent = message;

  // Tambahkan sparkle
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  document.body.appendChild(sparkle);

  // Tambahkan love
  const love = document.createElement('div');
  love.className = 'love';
  document.body.appendChild(love);

  // Tambahkan teks "Love you, pretty girl"
  const loveText = document.createElement('div');
  loveText.className = 'love-text';
  loveText.textContent = "Love you, pretty girl 💖";
  document.body.appendChild(loveText);

  const rect = nailong.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const topY = rect.top;

  sparkle.style.left = `${centerX}px`;
  sparkle.style.top = `${topY}px`;

  love.style.left = `${centerX + (Math.random() * 30 - 15)}px`;
  love.style.top = `${topY + 10}px`;

  loveText.style.left = `${centerX - 80}px`;
  loveText.style.top = `${topY - 30}px`;

  setTimeout(() => {
    sparkle.remove();
    love.remove();
    loveText.remove();
  }, 2000);
}
function showLoveMessage() {
  const nailong = document.querySelector('.nailong');
  const loveText = document.createElement('div');
  loveText.className = 'love-text-special';
  loveText.textContent = "Love you pretty girl 💖";

  const rect = nailong.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const topY = rect.top;

  loveText.style.left = `${centerX - 90}px`;
  loveText.style.top = `${topY - 20}px`;

  document.body.appendChild(loveText);

  setTimeout(() => {
    loveText.remove();
  }, 2500);
}
