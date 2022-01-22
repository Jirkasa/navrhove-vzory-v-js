import ElementsObserver from './modules/elementsObserver.js';

particlesJS.load('particles-js', 'media/assets/particlesjs-config.json');


const creationalPatternsIcon = document.getElementById("creational-patterns-icon");
const structuralPatternsIcon = document.getElementById("structural-patterns-icon");
const behavioralPatternsIcon = document.getElementById("behavioral-patterns-icon");
const observer = new ElementsObserver(0.9);

observer.observe(creationalPatternsIcon, "category-card__icon--creational-anim", "addOnEnter");
observer.observe(structuralPatternsIcon, "category-card__icon--structural-anim", "addOnEnter");
observer.observe(behavioralPatternsIcon, "category-card__icon--behavioral-anim", "addOnEnter");