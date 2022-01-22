import makeStickyHeader from './modules/stickyHeader.js';

const headerPlaceholder = document.getElementById("header-placeholder");
const header = document.getElementsByTagName("header")[0];

makeStickyHeader(headerPlaceholder, header, "header--smaller");

particlesJS.load('particles-js', '../media/assets/particlesjs-config-no-interaction.json');

const navToggleButton = document.getElementById("navigation-toggle-button");
const navCheckbox = document.getElementById("navigation-checkbox");
navCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        navToggleButton.classList.add("nav-toggle-button--checked");
    } else {
        navToggleButton.classList.remove("nav-toggle-button--checked");
    }
});