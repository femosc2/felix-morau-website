<template>
  <div id="app">
    <structure :currentSection="currentSection" />
    <swipe-indicator :currentSection="currentSection" />
    <sidebar :currentSection="currentSection" />
    <vue-main :currentSection="currentSection" @scrollDetected="setSection" />
  </div>
</template>

<script>
import Contact from "./components/Contact/Contact.vue"
import Structure from "./components/Structure/Structure.vue"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import VueMain from "./components/Main/Main.vue"
import SwipeIndicator from "./components/SwipeIndicator/SwipeIndicator.vue"

export default {
  name: 'app',
  data() {
    return {
      currentSection: "about"
    }
  },
  components: {
    VueMain,
    Contact,
    Structure,
    Sidebar,
    SwipeIndicator
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
