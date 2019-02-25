<template>
    <div>
        <nav-bar @navClickDetected="scrollTo" />
        <h1>Professional Shit</h1>
    </div>
</template>

<script>
import NavBar from "./components/Nav/Nav"
export default {
    data() {
        return {

        }
    },
    components: {
        NavBar
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

</style>
