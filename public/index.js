// Reveal hidden message on button click
const surpriseButton = document.getElementById('surpriseButton');
const hiddenMessage = document.getElementById('hiddenMessage');
const goBack = document.getElementById('back').addEventListener("click", goBackPage);
const newButton = document.getElementById('newButton').addEventListener("click", revealSurprise);
const photogallery = document.getElementById('photogallery');
const imgElements = document.getElementsByClassName("photo"); 
const image = document.getElementById('numba1');


// Set the date we're counting down to


function showHiddenMessage(){
  hiddenMessage.classList.remove('hidden');
  surpriseButton.textContent = 'I Love You! 💖';
}

function showPhotogallery(){
  photogallery.classList.remove('hidden');
  photogallery.style.display = 'flex';

}


function newPage(){
  window.location.href = "gallery.html";
}


function goBackPage(){
  window.location.href = "index.html";
}



// Add floating hearts
window.onload = function () {
  setInterval(() => createFloatingElement('❤️'), 400);
  setInterval(() => createFloatingElement('💐'), 600);
};

function createFloatingElement(emoji) {
  const element = document.createElement('div');
  element.classList.add('floating-element');
  element.innerHTML = emoji;

  // Random position anywhere on the page
  element.style.left = Math.random() * 100 + 'vw';
  element.style.top = Math.random() * 100 + 'vh';

  // Random animation duration for a natural effect
  element.style.animationDuration = Math.random() * 3 + 2 + 's';

  document.body.appendChild(element);

  // Remove after animation
  setTimeout(() => {
      element.remove();
  }, 5000);
}




