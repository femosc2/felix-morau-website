<template>
    <div id="appPro">
        <nav-bar @navClickDetected="scrollTo" />
        <h1>Professional Shit</h1>
        <about />
    </div>
</template>

<script>
import NavBar from "./components/Nav/Nav"
import About from "./components/About/About"
export default {
    data() {
        return {

        }
    },
    components: {
        NavBar,
        About
    },
    methods: {
        scrollTo(element) {
      // Scrolls to an element on the page when the user clicks something on the navbar
      document.querySelector(element).scrollIntoView({
        behavior: "smooth" // Gives the scrool a smooth look
      });
    },
    }
}
</script>

<style>
#appPro {
    background: white;
    height: 2000px;
}
</style>
