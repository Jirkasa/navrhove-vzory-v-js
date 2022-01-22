import makeStickyHeader from './modules/stickyHeader.js';

const headerPlaceholder = document.getElementById("header-placeholder");
const header = document.getElementsByTagName("header")[0];

makeStickyHeader(headerPlaceholder, header, "header--smaller");

particlesJS.load('particles-js', '../media/assets/particlesjs-config-no-interaction.json');