// Reveal hidden message on button click
const surpriseButton = document.getElementById('surpriseButton');
const hiddenMessage = document.getElementById('hiddenMessage');

surpriseButton.addEventListener('click', () => {
  hiddenMessage.classList.remove('hidden');
  surpriseButton.textContent = 'I Love You! 💖';
});

// Add floating hearts
const container = document.querySelector('.container');

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createFloatingHeart, 300);