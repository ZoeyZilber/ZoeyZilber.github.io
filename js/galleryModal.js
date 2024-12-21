var currentImageIndex = 0;
var images = [];

function openModal(index) {
  currentImageIndex = index - 1;
  showImage();
  document.getElementById('myModal').style.display = "block"; 
}

function closeModal() {
  document.getElementById('myModal').style.display = "none"; 
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage();
}

function showImage() {
  var modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentImageIndex];

  var nextIndex = (currentImageIndex + 1) % images.length;
  var preloadImage = new Image();
  preloadImage.src = images[nextIndex];
}

window.onclick = function(event) {
  if (event.target === document.getElementById('myModal')) {
    closeModal();
  }
};

// Lazy load images and initialize modal on page load
window.onload = function() {
  document.getElementById('myModal').style.display = "none";

  const images = document.querySelectorAll('img.lazy-load');
  images.forEach(image => {
    const fullImage = image.getAttribute('src');
    image.setAttribute('src', fullImage);
    image.onload = () => image.removeAttribute('src');
  });

  const modal = document.getElementById('myModal');
  modal.style.opacity = 1;
};
