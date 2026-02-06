// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heart.style.opacity = 0.7 + Math.random() * 0.3;
  document.querySelector('.hearts-bg').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 600);

// Proposal box heart burst
function burstHearts() {
  const box = document.querySelector('.proposal-box');
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'burst-heart';
    heart.style.left = (50 + Math.random() * 40 - 20) + '%';
    heart.style.top = (50 + Math.random() * 40 - 20) + '%';
    heart.style.animationDelay = (i * 0.05) + 's';
    box.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}
document.querySelector('.proposal-buttons').addEventListener('click', burstHearts);



// Add floating heart and burst heart styles
document.head.insertAdjacentHTML('beforeend', `<style>
.floating-heart {
  position: fixed;
  bottom: -40px;
  font-size: 2.2rem;
  color: #e6005c;
  animation: floatHeart 4s linear forwards;
  pointer-events: none;
  z-index: 2;
}
.floating-heart::before {
  content: '❤';
}
@keyframes floatHeart {
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  80% { opacity: 1; }
  100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
}
.burst-heart {
  position: absolute;
  font-size: 1.5rem;
  color: #e6005c;
  pointer-events: none;
  animation: burst 1s ease-out forwards;
}
.burst-heart::before {
  content: '❤';
}
@keyframes burst {
  0% { transform: scale(0.5) translate(0,0); opacity: 1; }
  100% { transform: scale(1.7) translate(var(--x, 0), var(--y, 0)); opacity: 0; }
}
</style>`);
