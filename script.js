const boutonMenu = document.querySelector('.bouton-menu');
const navigation = document.querySelector('#navigation-principale');

boutonMenu.addEventListener('click', function () {
  navigation.classList.toggle('menu-ouvert');
});