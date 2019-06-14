<template>
<div>
    <section class="lol">
        <section class="skills" :class="{ active: currentSection != 'skills' }" v-hammer:swipe.down="scrollUp" v-hammer:pan.left="switchToProjects">
          <article class="skillsText">
            <h3 class="skillsH3">Skills</h3>
              I wrote my first lines of code in early 2017 when I started learning Web Development through HTML and CSS.
              I enrolled in the Information Architecture Programme at Malmö University in the fall of 2017 and started learning programming through Python.
              Programming became my primary hobby ever since I wrote my first "Hello World!" and I'm always exploring new concepts, languages or designs.
              At the moment I am primarily using React, Vue and Node as I have interest in both Front-end and Back-end programming.
              <br>
              <br>
              While programming is what I specialize in I also learn a lot of UX-design through university.
              Im well versed in proper UX-design including Information Architecture, Interaction Design and Information Design.
              I also have a minor interest in graphic design having used Photoshop for creating posters and logos for various projects.
              <br>
              <br>
              Swipe to the right or click the arrow to see things I have created at university or in my free time!
          </article>
          <img src="./websitelogos.png" class="logos" alt="">
          <i class="fas fa-chevron-right rightArrow" @click="switchToProjects"></i> 
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
    switchToProjects() {
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

.rightArrow {
  position: absolute;
  right: 10%;
  top: 50%;
  font-size: 50px !important;
  animation: arrowAnimation 2s infinite;
}

.logos {
  width: 25%;
}

.projects {
  position: absolute;
  transform: translateX(100%);
  transition: 1s;
  background: green;
  width: 100%;
  z-index: 5000;
  height: 100%;
}

.skillsText {
  float: right;
  margin-right: 25%;
  max-width: 50%;
  text-align: left;
  font-size: 25px;
}

.skillsH3 {
  text-align: center;
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
  background: $hardPurpleDark;
  color: $hardPink;
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
