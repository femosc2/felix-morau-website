<template>
<div class="outerDiv">
        <h2>Projects</h2>
        <section>
            <div class="innerDiv">
              <a class="projects"></a>
                <div v-masonry transition-duration="1s" item-selector=".projectCard">
                  <div v-masonry-tile class="item" v-for="(project, index) in orderedProjects" :key=index fit-width="true">
                    <div class="projectCard" :style="{ 'background-image': 'url(' + project.projectImage + ')' }" @click="goToPage(project.projectGithub)">
                    <img src=project.projectImage alt="">
                    <h3 class="projectName">{{ project.projectName }}</h3>
                        <p class="projectLanguage"> {{ project.projectLanguage }}</p>
                        <i class="fab fa-github projectGithub" style="font-size: 75px;"></i>
                        <div class="overlay">
                          <div class="projectDescription">{{ project.projectDescription }}</div>
                        </div>
                    </div>
                  </div>
                </div> 

        </div>
        </section>
    </div>
</template>

<script>
const _ = require("lodash");

export default {
  data: function() {
    return {
      mutatedProjects: []
    };
  },
  methods: {
    goToPage(link) {
      window.location.href = link 
    }
  },
  props: ["projects"],
  computed: {
    orderedProjects: function() {
      this.mutatedProjects = _.orderBy(this.projects, "index");
      for (let i = 0; i < this.mutatedProjects.length; i++) {
        this.mutatedProjects[i].projectLanguage = this.mutatedProjects[i].projectLanguage.join(" ");
      }
      return this.mutatedProjects;
    }
  }
};
</script>

<style scoped>
.projectCard {
  width: 25%;
  height: 250px;
  margin: 0 auto;
  cursor: pointer;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #0A949F;
  transition: 1s;
  font-size: 25px;
}
section {
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%); */
  /* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%); */
  background-image: url("https://i.imgur.com/f5KfkLe.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #0A949F;
  background: -webkit-linear-gradient(to bottom, #0A949F, #009fff);
  background: linear-gradient(to bottom, #0A949F,#009fff);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.innerDiv {
  background: -webkit-linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* -webkit-clip-path: polygon(100% 0, 0 8%, 0 100%, 100% 85%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%); */
  min-height: 300px;
  padding-top: 150px;
  padding-bottom: 150px;
  height: auto;
  width: 100%;
}
h2 {
  margin: 0;
  font-size: 100px;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}

.projectGithub {
  transition: 1s;
}

.overlay {
  opacity: 0;
  transition: 1s;
  overflow: hidden;
}

.projectCard:hover .overlay {
  opacity: 1;
  transition: 1s;
  transform: translateY(-100%);
  margin: 0 auto;
}

.projectCard:hover .projectGithub, .projectCard:hover .projectLanguage, .projectCard:hover .projectName  {
  opacity: 0;
  transition: 1s;
  transform: translateY(-100%);
}



@media only screen and (max-width: 1000px) {
  .projectCard {
    width: 50%;
  }
  .innerDiv {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
