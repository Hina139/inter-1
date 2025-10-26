const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggles the 'active' class to show/hide the menu
    navLinks.classList.toggle('active');
});