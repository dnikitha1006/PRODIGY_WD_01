// Selecting necessary DOM elements
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning');

// Define timing variable for the slide transition effect
let timeRunning = 3000;

// Event listeners for navigation buttons
nextBtn.onclick = function() {
    showSlider('next');
};

prevBtn.onclick = function() {
    showSlider('prev');
};

let runTimeOut; // Timeout for removing classes

// Function to reset the running time animation
function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Trigger reflow
    runningTime.style.animation = null;
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

// Function to handle the slider movement
function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
    }

    // Clear previous timeout and set a new one to remove classes
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);

    resetTimeAnimation(); // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation();
