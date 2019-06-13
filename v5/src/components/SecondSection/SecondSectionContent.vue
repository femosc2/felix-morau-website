<template>
<div>
    <section class="lol">
        <section class="skills" :class="{ active: currentSection != 'skills' }" v-hammer:swipe.down="scrollUp" v-hammer:pan.left="switchSectionToProjects">
          <h2>Vue</h2>
          <h2>React</h2>
          <h2>Node</h2>
          <h2>CSS</h2>
          <h3>Python</h3>
          <h3>UX</h3>
          <h3>Photoshop</h3>
          <button @click="switchSection"> asdasda</button>
    </section>
    </section>
    <section class="lmao">
        <div class="projects" :class="{ activeProjects: currentSection != 'projects' }" v-hammer:swipe.right="switchToSkills">
          <h2 class="projectsH2">Projects</h2>
          <section>
            <li v-for="(project, index) in projects" :key="index">
              {{ project.projectName}}
            </li>
          </section>
      </div>
    </section>
</div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      projects: [],
      secondSection: "skills"
    };
  },
  methods: {
    getProjects() {
      // Gets the projects from firebase
      axios
        .get("https://my-website-21d35.firebaseio.com/Projects.json")
        .then(response => {
          const resultArray = [];
          for (let key in response) {
            resultArray.push(response[key]); // Organizes the json response
          }
          this.projects = resultArray[0];
        });
    },
    switchSection(section) {
      this.$emit("scrollDetected", section);
    },
    switchSectionToProjects() {
      document.querySelector(".skills").style.transform = "translateX(-100%)";
      document.querySelector(".projects").style.transform = "translateX(0%)"
      this.$emit("scrollDetected", "projects");
    },
    scrollUp() {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
        this.$emit("scrollDetected", "about");
      }
      document.querySelector(".skills").style.transform = "translateX(0%)";
    },
    switchToSkills() {
      console.log("hejsadasdasd")
      document.querySelector(".projects").style.transform = "translateX(100%)"
      document.querySelector(".skills").style.transform = "translateX(0%)"
      this.$emit("scrollDetected", "skills")  
    }
  },
  created() {
    this.getProjects();
    window.addEventListener("wheel", this.scrollUp);
  },
  components: {},
  watch: {
    currentSection: function(newVal, oldVal) {
      this.secondSection = newVal;
      console.log(this.secondSection + "SECOND");
    }
  },
  props: ["currentSection"]
};
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";

.activeProjects {
  transform: translateX(100%);
  transition: 0s;
}

.projects {
  position: absolute;
  transform: translateX(0);
  transition: 1s;
  background: green;
  width: 100%;
  z-index: 5000;
  height: 100%;
}

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

.fab,
.fas {
  font-size: 100px;
}

i {
  font-size: 30px;
}

ul {
  padding-left: 40px;
  list-style: none;
}

.skills {
  position: absolute;
  z-index: 5001;
  transition: 1s;
  width: 100%;
  height: 100%;
  background: blue;
}

.active {
  transform: translateX(0%);
}

@media only screen and (max-width: 1000px) {
  .projectCard {
    width: 50%;
    font-size: 15px;
  }
  .innerDiv {
    padding-top: 0;
    padding-bottom: 0;
  }
  .projectName {
    font-size: 20px;
  }
}
</style>
