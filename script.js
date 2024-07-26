// script.js

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no');

    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
    });
});
