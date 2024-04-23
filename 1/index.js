const menuIcon = document.querySelector('#menu-icon');
const navigation = document.querySelector('.navigation');
const closeButton = document.querySelector('#close-button');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navigation.classList.toggle('active');
});


closeButton.addEventListener('click', () => {
    navigation.classList.remove('active');
    menuIcon.classList.remove('bx-x')
});



