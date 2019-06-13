<template>
<div>
  <div class="projects" :class="{ active: currentSection != 'projects' }" v-hammer:swipe.right="switchToSkills">
          <h2 class="projectsH2">Projects</h2>
          <section>
            <li v-for="(project, index) in projects" :key="index">
              {{ project.projectName}}
            </li>
          </section>
      </div>
        
</div>

</template>

<script>

export default {
  data() {
    return {
      mutatedProjects: []
    };
  },
  methods: {
    goToPage(link) {
      window.open(link, '_blank'); 
    },
    switchToSkills() {
      console.log("hejsadasdasd")
      document.querySelector(".projects").style.transform = "translateX(-100%)"
      this.$emit("scrollDetected", "skills")  
    }
  },
  props: ["projects", "currentSection"],
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
}

.active {
    transform: translateX(100%);
    transition: 0s;
}

.projects {
  position: absolute;
  transform: translateX(0);
  transition: 1s;
  background: green;
  width: 100%;
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
