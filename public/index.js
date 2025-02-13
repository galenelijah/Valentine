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


function newPage(){
  window.location.href = "gallery.html";
}





// Add floating hearts

  




