<template>
<div>
  <section>
        <section class="about" :class="{ activeAbout: currentSection != 'about' }"  v-hammer:swipe.left="switchToSkillsFromAbout">
          <main-about />
        </section>
    </section>
    <section>
        <section class="skills" :class="{ active: currentSection != 'skills' }" v-hammer:swipe.right.left="eventType">
          <main-skills />
          <i class="fas fa-chevron-right rightArrow" @click="switchToProjects"></i> 
    </section>
    </section>
    <section>
        <div class="projects" :class="{ activeProjects: currentSection != 'projects' }" v-hammer:swipe.right="switchToSkillsFromProjects">
          <main-projects :projects="projects" />
      </div>
    </section>
</div>
</template>

<script>
const axios = require("axios");
import MainSkills from "./MainSkills"
import MainProjects from "./MainProjects"
import MainAbout from "./MainAbout"

export default {
  data() {
    return {
      secondSection: "about"
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
    eventType(event) {
      console.log(event.type)
      if (event.type === "swiperight") {
        this.switchToAboutFromSkills()
      } else {
        this.switchToProjects()
      }
    },
    switchToProjects() {
      document.querySelector(".skills").style.transform = "translateX(-100%)";
      document.querySelector(".projects").style.transform = "translateX(0%)"
      this.$emit("scrollDetected", "projects");
    },
    switchToSkillsFromProjects() {
      console.log("hejsadasdasd")
      document.querySelector(".projects").style.transform = "translateX(100%)"
      document.querySelector(".skills").style.transform = "translateX(0%)"
      this.$emit("scrollDetected", "skills")  
    },
    switchToSkillsFromAbout() {
      document.querySelector(".about").style.transform = "translateX(-100%)"
      document.querySelector(".skills").style.transform = "translateX(0%)"
      this.$emit("scrollDetected", "skills")  
    },
    switchToAboutFromSkills() {
      document.querySelector(".about").style.transform = "translateX(0%)"
      document.querySelector(".skills").style.transform = "translateX(100%)"
      this.$emit("scrollDetected", "about")  
    }
  },
  created() {
    this.getProjects();
  },
  components: {
    MainSkills,
    MainProjects,
    MainAbout
  },
  watch: {
    currentSection: function(newVal, oldVal) {
      this.secondSection = newVal;
      console.log(this.secondSection + "SECOND");
    }
  },
  props: ["currentSection", "projects"]
};
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";

.activeProjects {
  transform: translateX(100%);
  transition: 0s;
}
.activeAbout {
  transform: translateX(0%);
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
  width: 100%;
  z-index: 5000;
  height: 100%;
  background: rgba(0,0,0, 0.0);
}

.skills {
  position: absolute;
  z-index: 5001;
  transform: translateX(100%);
  transition: 1s;
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0,0,0, 0.0);
}
.about {
  position: absolute;
  z-index: 5002;
  transition: 1s;
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0,0,0, 0.0);
}

.active {
  transform: translateX(100%);
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
  .skillsText {
    max-width: 100%;
    text-align: center;
    margin: 0;
    font-size: 10px;
  }
  .hiddenOnResponsive {
  }
}
</style>
