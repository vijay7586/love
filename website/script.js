function moveNoButton() {
    // Get the No button
    var noButton = document.getElementById("noBtn");

    // Move the No button to a random position
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + "px";
}

function showFinalMessage() {
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("image").style.display = "none"; // Hide bear gif
    document.getElementById("noBtn").style.display = "none";
	document.getElementById("message").style.display = "none";

    // Show the final message container
    var finalMessageContainer = document.getElementById("messageContainer");
    finalMessageContainer.classList.remove("hidden");
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  
  heart.innerText = '💗';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
              heart.remove();
              }, 5000);
}

setInterval(createHeart, 300);
 