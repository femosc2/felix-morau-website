<template>
    <section class="outerDiv">
        <h2>Skills</h2>
        <ul>
          <skills-item class="skillDiv" v-for="(skill, index) in skills" :key=index :name="skill.name" :familiarity="skill.familiarity" :color="skill.color" />
        </ul>
    </section>
</template>

<script>
import SkillsItem from "./SkillsItem";
const _ = require("lodash");
const colorSort = require("color-sort");

export default {
  data: function() {
    return {};
  },
  methods: {
    handleScroll() {
      if (window.scrollY <= 799 && window.scrollY >= 0) {
        this.scrollDown();
      } else {
        window.scrollTo(0, 0);
      }
    },
    scrollDown() {
      console.log(window.scrollY);
      window.scrollBy(0, window.innerHeight + window.scrollY);
    }
  },
  created() {
    window.addEventListener("wheel", this.handleScroll);
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

p {
  font-size: 20px;
}

i {
  font-size: 30px;
}

section {
  text-align: left;
  max-height: 100vh;
}

ul {
  padding-left: 40px;
}

@media only screen and (max-width: 1000px) {
}
</style>

