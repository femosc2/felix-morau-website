<template>
    <div class="outerDiv">
        <h2>My Skills</h2>
        <section>
            <div class="innerDiv">
            <h3>Programming</h3>
            <div class="skillDiv" v-for="(skill, index) in programmingSkills" :key=index>
            <p :style="{ 'color': skill.color}"> {{ skill.skillName }}</p>
            <div class="skillBar">
                <div class="skill" :style="[{ 'width': skill.familiarity + '%' }, { 'background-color': skill.color}]"></div>
            </div>
            <p :style="{ 'color': skill.color}"> {{ skill.description }}</p>
        </div>
        <h3>Programs</h3>
        <div class="skillDiv" v-for="(skill, index) in applicationSkills" :key=index>
            <p :style="{ 'color': skill.color}"> {{ skill.skillName }}</p>
            <div class="skillBar">
                <div class="skill" :style="[{ 'width': skill.familiarity + '%' }, { 'background-color': skill.color}]"></div>
            </div>
            <p :style="{ 'color': skill.color}"> {{ skill.description }}</p>
        </div>
        <h3>Concepts</h3>
        <div class="skillDiv" v-for="(skill, index) in conceptSkills" :key=index>
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
    return {};
  },
  props: ["programmingSkills", "applicationSkills", "conceptSkills"],
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
  -webkit-clip-path: polygon(100% 12%, 0 0, 0 75%, 100% 100%);
  clip-path: polygon(100% 12%, 0 0, 0 75%, 100% 100%);
  background-image: url("https://images.alphacoders.com/964/thumb-1920-964422.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #009fff;
  background: -webkit-linear-gradient(to bottom, #009fff, #ec2f4b);
  background: linear-gradient(to bottom, #009fff, #ec2f4b);
}
.innerDiv {
  background: -webkit-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-clip-path: polygon(100% 0, 0 12%, 0 100%, 100% 75%);
  clip-path: polygon(100% 0, 0 12%, 0 100%, 100% 75%);
  min-height: 200px;
  padding-top: 200px;
  padding-bottom: 600px;
  height: 1600px;
  width: 100%;
}
h2 {
    margin: 0;
}
</style>

