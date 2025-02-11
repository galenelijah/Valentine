// Reveal hidden message on button click
const surpriseButton = document.getElementById('surpriseButton');
const hiddenMessage = document.getElementById('hiddenMessage');
const goBack = document.getElementById('back').addEventListener("click", goBackPage);
const newButton = document.getElementById('newButton').addEventListener("click", revealSurprise);
const photogallery = document.getElementById('photogallery');
const imgElements = document.getElementsByClassName("photo"); 
const image = document.getElementById('numba1');


// Set the date we're counting down to
const countDownDate = new Date("September 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Happy Valentine's Day!";
  }
}, 1000);


function showHiddenMessage(){
  hiddenMessage.classList.remove('hidden');
  surpriseButton.textContent = 'I Love You! 💖';
}

function showPhotogallery(){
  photogallery.classList.remove('hidden');
  photogallery.style.display = 'flex';

}


function newPage(){
  window.location.href = "page.html";
}

function heartPage(){
  window.location.href = "heart.html";
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



