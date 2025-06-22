// this code snippet is the entry point for a Vue application. It imports the necessary CSS styles, 
// creates a Vue application instance using the root component (App.vue), 
// and mounts the application to the DOM element with the ID app.


import './assets/main.css'
// global styles in the VUE app

import { createApp } from 'vue'
// imports the createApp function from the Vue library. The createApp function is used to create a new Vue application instance.

import App from '../src/App.vue'
// imports a Vue component named App from the file App.vue. 
// This is typically the root component of your Vue application. It defines the main structure and content of your app.

createApp(App).mount('#app')
// Creates a new Vue application instance using the App component as the root component.
// .mount('#app'): Mounts the Vue application instance to the DOM element with the ID app. 
// This means that Vue will take control of the element with id="app" in your HTML and render the App component inside it.



// Add a click event listener to the "Challenge me!" button.
// In the event listener, generate a random index to select a random algorithm file.
// Redirect the user to the selected algorithm file.

// Get the button element
const randomChallengeButton = document.getElementById('randomChallengeButton');

// Array of algorithm file names (without the .html extension)
const algorithmFiles = ['ejercicio1.html', 'ejercicio2.html', 'ejercicio3.html', 'ejercicio4.html', 'ejercicio5.html', 'ejercicio6.html', 'ejercicio7.html', 'ejercicio8.html', 'ejercicio9.html', 'ejercicio10.html'];

// Add a click event listener to the button
randomChallengeButton.addEventListener('click', () => {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * algorithmFiles.length);

  // Get the random algorithm file name
  const randomAlgorithmFile = algorithmFiles[randomIndex];

  // Redirect to the random algorithm file
  window.location.href = `/public/algorithms/${randomAlgorithmFile}`;
});