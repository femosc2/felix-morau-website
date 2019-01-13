<template>
  <div id="app">
    <big-header />
    <nav-bar @navClickDetected="scrollTo" />
    <about />
    <skills />
    <projects />
    <contact />
  </div>
</template>

<script>
import NavBar from './components/Nav/Nav.vue'
import About from './components/About/About.vue'
import BigHeader from "./components/Header/Header.vue"
import Skills from "./components/Skills/Skills.vue"
import Projects from "./components/Projects/Projects.vue"
import Contact from "./components/Contact/Contact.vue"

export default {
  name: 'app',
  components: {
    NavBar,
    About,
    BigHeader,
    Skills,
    Projects,
    Contact
  },
  methods: {
    scrollTo(element) {
      document.querySelector(element).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 1000px) {
  .projectCard {
    width: 100%;
    height: 20%;
  }
  h2 {
  font-size: 75px !important;
}
}
</style>
