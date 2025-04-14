let currentIndex = 0;
const images = document.querySelectorAll('.gallery-container img');
const imageNumberDisplay = document.querySelector('.image-number');
const pausePlayButton = document.querySelector('.pause-play-btn');
let slideshowInterval;
let isSlideshowRunning = true;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

    imageNumberDisplay.textContent = `${index + 1} / ${images.length}`;

}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 3000);
    isSlideshowRunning = true;
    pausePlayButton.textContent = "Pause"; 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
    isSlideshowRunning = false;
    pausePlayButton.textContent = "Play";
}

function toggleSlideshow() {
    if (isSlideshowRunning) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}
showImage(currentIndex);

startSlideshow();
