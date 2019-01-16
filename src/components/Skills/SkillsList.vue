<template>
    <div class="outerDiv">
        <h2>Skills</h2>
        <section>
            <div class="innerDiv">
            <a class="skills"></a>
            <div class="skillDiv" v-for="(skill, index) in concatSkills" :key=index>
            <p :style="{ 'color': skill.color}"> {{ skill.skillName }}</p>
            <div class="skillBar">
                <div class="skill" :style="[{ 'width': skill.familiarity + '%' }, { 'background-color': skill.color}]"></div>
            </div>
            <p :style="{ 'color': skill.color}"> {{ skill.description }}</p>
        </div>
        </div>
        </section>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      combinedSkills: []
    };
  },
  props: ["programmingSkills", "applicationSkills", "conceptSkills"],
  computed: {
    concatSkills: function() {
      this.combinedSkills = this.programmingSkills.concat(this.applicationSkills, this.conceptSkills)
      return this.combinedSkills;
    }
  }
};
</script>

<style scoped>
.skillBar {
  background-color: rgba(0, 0, 0, 0.4);
  height: 10px;
  max-width: 50%;
  margin: 0 auto;
  border-radius: 35px;
  transition: 1s;
}
.skillBar > .skill {
  z-index: 1000;
  background-color: white;
  height: 10px;
  border-radius: 35px;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
transition: 1s;
}
section {
  /* -clip-path: polygon(0 15%, 100% 6%, 100% 85%, 0 15%); */
  /* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%); */
  background-image: url("https://i.imgur.com/FmICIUg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #009fff;
  background: -webkit-linear-gradient(to bottom, #009fff, #F56B5E);
  background: linear-gradient(to bottom, #009fff, #F56B5E);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
  /* -webkit-clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%); */
  min-height: 200px;
  padding-top: 150px;
  padding-bottom: 150px;
  height: auto;
  width: 100%;
  
}
h2 {
    margin: 0;
    font-size: 7vw;
}

p {
  font-size: 20px;
}

@media only screen and (max-width: 1000px) {
  .skillBar {
    max-width: 100%;
    border-radius: 0px 35px 35px 0px;
  }
  .skillBar > .skill {
    max-width: 100%;
    border-radius: 0px 35px 35px 0px;
  }
}
</style>

