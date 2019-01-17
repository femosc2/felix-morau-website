<template>
<div class="outerDiv">
        <h2>Projects</h2>
        <section>
            <div class="innerDiv">
                <div v-masonry transition-duration="1s" item-selector=".projectCard">
                  <div v-masonry-tile class="item" v-for="(project, index) in orderedProjects" :key=index fit-width="true">
                    <div class="projectCard" :style="{ 'background-image': 'url(' + project.projectImage + ')' }" @click="goToPage(project.projectGithub)">
                    <div class="innerDiv">
                    <img src=project.projectImage alt="">
                    <h3 class="projectName">{{ project.projectName }}</h3>
                        <p class="projectLanguage"> {{ project.projectLanguage }}</p>
                        <i class="fab fa-github projectGithub" style="font-size: 75px;"></i>
                        <div class="overlay">
                          <div class="projectDescription">{{ project.projectDescription }}</div>
                        </div>
                    </div>
                    </div>
                    <a class="projects"></a>
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
      window.open(link, '_blank'); 
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
  font-size: 1.5vw;
}
section {
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%); */
  /* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%); */
  background-image: url("https://i.imgur.com/5ypPRGu.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #0A949F;
  background: -webkit-linear-gradient(to bottom, #ED5181, #009fff);
  background: linear-gradient(to bottom, #ED5181,#009fff);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.innerDiv {
  background: -webkit-linear-gradient(
    to top,
    rgba(107, 38, 59, 1),
    rgba(107, 38, 59, 0.8)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(107, 38, 59, 1),
    rgba(107, 38, 59, 0.8)
  );
  min-height: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* padding-top: 150px;
  padding-bottom: 150px; */
  
}
h2 {
  margin: 0;
  font-size: 7vw;
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
  transform: translateY(-80%);
  margin: 0 auto;
}

.projectCard:hover .projectGithub, .projectCard:hover .projectLanguage, .projectCard:hover .projectName  {
  opacity: 0;
  transition: 1s;
  transform: translateY(-80%) !important;
}

.projectCard:hover {
  color: #fff;
  transition: 1s;
}

.projectCard:not(:hover) {
    transition: 1s;
    opacity: 1;
    filter: grayscale(100%) brightness(1)
}

.projectLanguage:not(:hover), .projectGithub:not(:hover), .projectName:not(:hover) {
  color: #fff;
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
