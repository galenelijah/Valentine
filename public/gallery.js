const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const goBack = document.getElementById('back').addEventListener("click", goBackPage);


function goBackPage(){
    window.location.href = "index.html";
  }

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

// Open Lightbox on Image Click
galleryImages.forEach(image => {
    image.addEventListener("click", function() {
        lightboxImg.src = this.src;
        lightbox.classList.add("show");
    });
});

// Close Lightbox
// Close Lightbox Function
function closeLightbox() {
    lightbox.classList.remove("show");
}

// Close Lightbox When Clicking Outside the Image
lightbox.addEventListener("click", function (event) {
    if (event.target !== lightboxImg) {
        closeLightbox();
    }
});

// Close Lightbox When Pressing ESC Key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

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

// Create both floating hearts and flowers
setInterval(() => createFloatingElement('❤️'), 400);
setInterval(() => createFloatingElement('💐'), 600);


// Update the count down every 1 second


  // Find the distance between now and the count down date
  