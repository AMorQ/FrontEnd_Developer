

<!-- HTML STRUCTURE -->
<template>
  <div class="list-container">
    <button @click="prevItem">&lt;</button>
    <div class="item-display">
      <!-- <a v-if="items.length > 0" :href="algorithmUrl" target="_blank">{{ currentItem }}</a>
      <div v-html="algorithmContent"></div> -->
      <a :href="currentExerciseUrl" class="exercise-link">{{ currentExerciseName }}</a>
    </div>
    <button @click="nextItem">&gt;</button>
  </div>
</template>

<!-- JAVASCRIPT LOGIC -->
<script>
export default {
  data() {
    
    //data() function is a Vue component that returns an object containing the component's data properties.
    // The data function is used to define reactive properties for the component. So when their values change, 
    //Vue automatically updates the parts of the DOM depending on those properties.
    // In this case, we are defining an array of items and a currentIndex to keep track of the currently displayed item.
    // The data function is called when the component is created, and it returns an object that
    // Vue uses to initialize the component's data.
    // The data function is a standard part of Vue components, and it is used to define
    // the initial state of the component. It is a function that returns an object, which
    // contains the properties that will be reactive in the Vue instance.
  
    return {
      // message: 'Welcome!'
      items: ["ejercicio1", "ejercicio2", "ejercicio3", "ejercicio4", "ejercicio5", "ejercicio6", "ejercicio7", "ejercicio8", "ejercicio9", "ejercicio10", "ejercicio11", "ejercicio12", "ejercicio13", "ejercicio14", "ejercicio15", "ejercicio16", "ejercicio17", "ejercicio18", "ejercicio19", "ejercicio20"],
      currentIndex: 0,
    };
  },
  // defines computed properties. Computed properties are functions that are used to derive values from existing data. 
  // They are cached based on their dependencies, so they are only re-evaluated when their dependencies change.
  
  computed: {

    currentExerciseName() {
      return this.items[this.currentIndex] || '';
    },
    // Generates the full URL for the hyperlink's href attribute
    currentExerciseUrl() {
      const exerciseName = this.items[this.currentIndex];
      // This creates a URL like "/algorithms/ejercicio1.html"
      return exerciseName ? `/algorithms/${exerciseName}.html` : '#';
    }
  },

  
  methods: {
    // methods are functions that are defined in a Vue component (e.g. when a button is clicked, LIKE IN THIS CASE!) 
    // and can be called from the template or other methods.
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevItem() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
  },
};
</script>

<!-- <script setup> THIS IS THE TEMPLATE PROVIDED BY VITE
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped> is a special attribute in Vue.js that indicates that the CSS rules defined within the 
<style> block should only apply to the elements within the current component's template. 
It's a way to encapsulate CSS styles and prevent them from leaking out and affecting other parts of your application.

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
