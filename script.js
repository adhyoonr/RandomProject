const messages = [
  "dinaaa, kamu tuh cantik bangettttttt 😍",
  "lucunya kamu tuh nggak ketolong, sumpah 🤭",
  "aku masih nggak nyangka kita lahir di hari yang sama... jodoh nih? 😘",
  "kamu tuh hampir sempurna, kecuali... kamu gabisa dibilang genduttt😂",
  "makasih ya udah selalu bikin hari-hariku lebih cerah 💖",
  "kalau ada award cewek terimut sejagad... kamu menang deh! ✨",
];

function openGift() {
  document.getElementById("gift-closed").classList.add("hidden");
  document.getElementById("gift-opened").classList.remove("hidden");
  document.getElementById("message-box").classList.remove("hidden");
  showAnother();
}

function showAnother() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("love-message").textContent = messages[randomIndex];
}
