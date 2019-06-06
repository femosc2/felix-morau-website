<template>
<div class="outerDiv">
        <h2 class="projectsH2">Projects</h2>
        <section>
          <li v-for="(project, index) in projects" :key="index">
            {{ project.projectName}}
          </li>
        </section>
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
    }
  },
  props: ["projects"],
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
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
