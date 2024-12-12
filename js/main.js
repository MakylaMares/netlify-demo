const fullMenu = document.getElementById('full-menu');

const showBTN = document.getElementById('show-menu');

const closeBTN = document.getElementById('close-btn');

showBTN.addEventListener('click', function() {
    fullMenu.classList.add('show');
});

closeBTN.addEventListener('click', function() {
    fullMenu.classList.remove('show');
});