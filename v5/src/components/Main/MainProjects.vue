<template>
    <div>
          <section class="projectsSection">
            <figure class="projectFigure" v-for="(project, index) in orderedProjects"
            :key="index" :style="{ 'background-image': 'url(' + project.projectImage + ')' }"
            @click="goToPage(project.projectGithub)">
                <h3 class="projectTitle">{{project.projectName}}</h3>
                <p class="projectLanguages">{{ project.projectLanguage}}</p>
            </figure>
          </section>
    </div>
</template>

<script>
const _ = require("lodash");
export default {
    data() {
        return {
            mutatedProjects: []
        }
    },
    methods: {
    goToPage(link) {
      window.open(link, '_blank'); 
        }
    },
    props: ["currentSection", "projects"],
    computed: {
    // Mutates the data
    orderedProjects() {
      // Organize and joins the different skills.
      this.mutatedProjects = _.orderBy(this.projects, "index");
      for (let i = 0; i < this.mutatedProjects.length; i++) {
        this.mutatedProjects[i].projectLanguaeg = this.mutatedProjects[i].projectLanguage.join(" ");
      }
      return this.mutatedProjects;
    }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>

.projectFigure {
    width: 25%;
    height: 150px;
    margin: 0 auto;
    display: inline-flex;
    padding: 0;
}

.projectsSection {
    width: 70%;
    margin: 0 auto;
}

.projectTitle {
    width: 100%;
    margin: 0 auto;
}

.projectLanguages {
    width: 100%;
}

</style>
