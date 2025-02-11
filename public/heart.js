const heartContainer = document.querySelector('.heart-container');
const goBack = document.getElementById('back').addEventListener("click", goBackPage);

function goBackPage(){
    window.location.href = "index.html";
  }

// Function to calculate the heart shape positions

// Function to calculate the heart shape positions
function createHeart() {
  const heartPoints = [];
  const angleIncrement = (2 * Math.PI) / 100; // Divide the heart into 100 points

  for (let i = 0; i < 100; i++) {
    const angle = angleIncrement * i;
    const x =
      16 * Math.pow(Math.sin(angle), 3); // Heart equation for x
    const y =
      -(
        13 * Math.cos(angle) -
        5 * Math.cos(2 * angle) -
        2 * Math.cos(3 * angle) -
        Math.cos(4 * angle)
      ); // Heart equation for y

    // Scale and position the heart
    const scaledX = (x * 10) + 150; // Scale and center horizontally
    const scaledY = (y * 10) + 150; // Scale and center vertically

    heartPoints.push({ x: scaledX, y: scaledY });
  }

  return heartPoints;
}

// Function to display "I love you" messages in the heart shape
function displayHeartMessages() {
  const heartPoints = createHeart();

  heartPoints.forEach((point, index) => {
    const message = document.createElement('div');
    message.classList.add('heart-text');
    message.textContent = 'I love you';
    message.style.left = `${point.x}px`;
    message.style.top = `${point.y}px`;
    message.style.transform = `rotate(${index * 3.6}deg)`; // Rotate each message
    heartContainer.appendChild(message);
  });
}

// Call the function to display the heart
displayHeartMessages();