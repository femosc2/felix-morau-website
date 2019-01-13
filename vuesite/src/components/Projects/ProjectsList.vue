<template>
<div class="outerDiv">
        <h2>Projects</h2>
        <section>
            <div class="innerDiv">
                <div class="projectCard" v-for="(project, index) in orderedProjects" :key=index :style="{ 'background-image': 'url(' + project.projectImage + ')' }">
                    <h3>{{ project.projectName }}</h3>
                    <p> {{ project.projectLanguage }}</p>
                    <p> {{ project.projectDescription }}</p>
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
  methods: {},
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
  width: 50%;
  height: 150px;
  background-position: center;
  margin: 0 auto;
}
section {
  -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);
  background-image: url("https://images.alphacoders.com/964/thumb-1920-964422.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #6dff77;
  background: -webkit-linear-gradient(to bottom, #6dff77, #ec2f4b);
  background: linear-gradient(to bottom, #6dff77, #ec2f4b);
}
.innerDiv {
  background: -webkit-linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-clip-path: polygon(100% 0, 0 8%, 0 100%, 100% 85%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%);
  min-height: 300px;
  padding-top: 300px;
  padding-bottom: 800px;
  height: 1600px;
  width: 100%;
}
h2 {
  margin: 0;
}
</style>
