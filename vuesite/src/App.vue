<template>
  <div id="app">
    <big-header />
    <nav-bar />
    <about-section />
    <skills />
  </div>
</template>

<script>
import NavBar from './components/Nav/Nav.vue'
import AboutSection from './components/About/AboutSection.vue'
import BigHeader from "./components/Header/Header.vue"
import Skills from "./components/Skills/Skills.vue"

export default {
  name: 'app',
  components: {
    NavBar,
    AboutSection,
    BigHeader,
    Skills
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
</style>
