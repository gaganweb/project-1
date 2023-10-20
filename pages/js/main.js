// main.js

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('.nav-button');
  const closeButton = document.querySelector('.close-button');
  const navigation = document.querySelector('#navigation');

  openButton.addEventListener('click', () => {
    navigation.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    navigation.style.display = 'none';
  });
});
