// JavaScript for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript for Marker Animation
const marker = document.querySelector('.marker');
const listItems = document.querySelectorAll('.nav-links li');

// Function to update marker position and color
function updateMarker(element) {
    marker.style.left = element.offsetLeft + 'px';
    marker.style.width = element.offsetWidth + 'px';

    // Get the computed background color of the hovered item
    const hoverColor = window.getComputedStyle(element.querySelector('a')).backgroundColor;
    marker.style.backgroundColor = hoverColor; // Set marker color to match hover color
}

// Add event listeners to each list item
listItems.forEach((item) => {
    item.addEventListener('mousemove', () => {
        updateMarker(item);
    });
    item.addEventListener('mouseleave', () => {
        marker.style.width = '0'; // Reset marker when leaving
    });
});
