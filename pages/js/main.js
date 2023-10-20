import { useEffect } from 'react';

function YourComponent() {
  useEffect(() => {
    // This code will only run on the client side
    const openButton = document.querySelector('.nav-button');
    const closeButton = document.querySelector('.close-button');
    const navigation = document.querySelector('#navigation');

    openButton.addEventListener('click', () => {
      navigation.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
      navigation.style.display = 'none';
    });

    return () => {
      // Clean up event listeners if needed
      openButton.removeEventListener('click', () => {
        navigation.style.display = 'block';
      });

      closeButton.removeEventListener('click', () => {
        navigation.style.display = 'none';
      });
    };
  }, []); // The empty dependency array ensures this runs once after the component mounts

  // Rest of your component code
}
