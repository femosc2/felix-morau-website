<template>
  <div id="app">
    <structure />
    <sidebar :currentSection="currentSection" />
    <about :currentSection="currentSection" @scrollDetected="setSection" />
    <skills :currentSection="currentSection" @scrollDetected="setSection" />
  </div>
</template>

<script>
import Projects from "./components/Projects/Projects.vue"
import Skills from "./components/Skills/Skills.vue"
import About from "./components/About/About.vue"
import Contact from "./components/Contact/Contact.vue"
import Structure from "./components/Structure/Structure.vue"
import Sidebar from "./components/Sidebar/Sidebar.vue"

export default {
  name: 'app',
  data() {
    return {
      currentSection: "about"
    }
  },
  components: {
    Projects,
    Skills,
    About,
    Contact,
    Structure,
    Sidebar
  },
  methods: {
    setSection(section) {
      this.currentSection = section
      console.log(this.currentSection)
    }
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
