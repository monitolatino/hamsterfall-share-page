// Get the URL parameters (score and imageUrl)
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
const imageUrl = urlParams.get('imageUrl');

if (score && imageUrl) {
  // Set the dynamic content for score and image
  document.getElementById('og-title').innerText = `I scored ${score} in Hamsterfall!`;
  document.getElementById('og-image').content = imageUrl;
} else {
  // Fallback content in case parameters are missing
  document.getElementById('score').innerText = 'Score not available';
  document.getElementById('og-image').content = 'default-image.jpg';  // Use a default Open Graph image
}