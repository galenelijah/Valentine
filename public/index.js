// Reveal hidden message on button click
const surpriseButton = document.getElementById('surpriseButton');
const hiddenMessage = document.getElementById('hiddenMessage');
const goBack = document.getElementById('back').addEventListener("click", goBackPage);
const newButton = document.getElementById('newButton').addEventListener("click", revealSurprise);

function showHiddenMessage(){
  hiddenMessage.classList.remove('hidden');
  surpriseButton.textContent = 'I Love You! 💖';
}

function newPage(){
  window.location.href = "page.html";
}

function goBackPage(){
  window.location.href = "index.html";
}

function revealSurprise(){
  
}

// Add floating hearts
const container = document.querySelector('.container');

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createFloatingFlower() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '💐';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createFloatingHeart, 300);
setInterval(createFloatingFlower, 300);