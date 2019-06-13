<template>
    <section class="skills" :class="{ active: currentSection != 'skills' }" v-hammer:swipe.down="scrollUp" v-hammer:pan.left="switchSection">
          <h2>Vue</h2>
          <h2>React</h2>
          <h2>Node</h2>
          <h2>CSS</h2>
          <h3>Python</h3>
          <h3>UX</h3>
          <h3>Photoshop</h3>
          <button @click="switchSection"> asdasda</button>
    </section>
</template>

<script>

export default {
  data: function() {
    return {};
  },
  methods: {
    scrollUp() {
      if (window.scrollY >0) {
        window.scrollTo(0,0)
      this.$emit("scrollDetected", "about")
      }
      document.querySelector(".skills").style.transform = "translateX(0%)"
    },
    switchSection() {
      document.querySelector(".skills").style.transform = "translateX(-100%)"
      this.$emit("scrollDetected", "projects")
    }
  },
  created() {
    window.addEventListener("wheel", this.scrollUp);
    // window.addEventListener("touchend", this.handleScroll);
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";

h2 {
  margin: 0;
  font-size: 7vw;
  z-index: 9000;
  text-align: left;
  padding-left: 40px;
}

h3 {
  margin: 0;
  font-size: 4vw;
  z-index: 9000;
  text-align: left;
  padding-left: 40px;
}

button {
  z-index: 5000;
}

p {
  font-size: 20px;
}

.fab, .fas {
  font-size: 100px;
}

i {
  font-size: 30px;
}

section {
  text-align: left;
  min-height: 100vh;
  color: $hardPink;
  background: $hardPurpleDark;
}

ul {
  padding-left: 40px;
  list-style: none;
}

.skills {
  position: absolute;
  z-index: 5000;
  transition: 1s;
  width: 100%;
}

.active {
    transform: translateX(0%)
}

@media only screen and (max-width: 1000px) {
    section {
        height: 100%;
    }
}
</style>

