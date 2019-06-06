<template>
    <section class="outerDiv">
        <!-- <ul>
          <skills-item class="skillDiv" v-for="(skill, index) in skills" :key=index :name="skill.name" :familiarity="skill.familiarity" :color="skill.color" />
        </ul> -->
        <!-- <p>
          <i class="fab fa-vuejs"></i> Vue
          <i class="fab fa-react"></i> React
          <i class="fab fa-node"></i> Node
        </p>
          <i class="fab fa-js"></i> JavaScript
          <i class="fas fa-camera-retro"></i> Photoshop
          <i class="fab fa-python"></i> Python
          <i class="fab fa-css3-alt"></i>CSS
          <i class="fas fa-user-friends"></i>UX -->
          <h2>Vue</h2>
          <h2>React</h2>
          <h2>Node</h2>
          <h2>CSS</h2>
          <h3>Python</h3>
          <h3>UX</h3>
          <h3>Photoshop</h3>
    </section>
</template>

<script>
import SkillsItem from "./SkillsItem";

export default {
  data: function() {
    return {};
  },
  methods: {
    handleScroll() {
      window.scrollTo(0,0)
    },
    scrollDown() {
      console.log(window.scrollY);
      window.scrollBy(0, window.innerHeight + window.scrollY);
    }
  },
  created() {
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("touchstart", this.handleScroll);
    window.addEventListener("touchmove", this.handleScroll);
    window.addEventListener("touchend", this.handleScroll);
  },
  props: ["skills"],
  components: {
    SkillsItem
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
}

ul {
  padding-left: 40px;
  list-style: none;
}

@media only screen and (max-width: 1000px) {
}
</style>

