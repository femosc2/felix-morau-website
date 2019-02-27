<template>
    <div id="appPro">
        <!-- <nav-bar @navClickDetected="scrollTo" /> -->
        <about />
        <skills />
        <vue-footer />
    </div>
</template>

<script>
import NavBar from "./components/Nav/Nav"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import VueFooter from "./components/Footer/Footer"

export default {
    data() {
        return {

        }
    },
    components: {
        NavBar,
        About,
        Skills,
        VueFooter
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
    background: #070707;
    color: #fff;
    text-align: left;
}
</style>
