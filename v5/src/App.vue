<template>
  <div id="app">
    <structure />
    <about />
    <skills />
    <projects />
    <contact />
  </div>
</template>

<script>
import Projects from "./components/Projects/Projects.vue"
import Skills from "./components/Skills/Skills.vue"
import About from "./components/About/About.vue"
import Contact from "./components/Contact/Contact.vue"
import Structure from "./components/Structure/Structure.vue"

export default {
  name: 'app',
  components: {
    Projects,
    Skills,
    About,
    Contact,
    Structure
  }
}
</script>

<style lang="scss">
@import "./sass/Variables.scss";
#app {
  
  font-family: $mainFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
