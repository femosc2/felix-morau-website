<template>
    <section>
        <article class="skillsText">
            <h3 class="skillsH3">Skills</h3>
              I wrote my first lines of code in early 2017 when I started learning Web Development through HTML and CSS.
              I enrolled in the Information Architecture Programme at Malmö University in the fall of 2017 and started learning programming through Python.
              Programming became my primary hobby ever since I wrote my first "Hello World!" and I'm always exploring new concepts, languages or designs.
              At the moment I am primarily using React, Vue and Node as I have interest in both Front-end and Back-end programming.
              <br>
              <br>
              <span class="hiddenOnResponsive">While programming is what I specialize in I also learn a lot of UX-design through university.
              Im well versed in proper UX-design including Information Architecture, Interaction Design and Information Design.
              I also have a minor interest in graphic design having used Photoshop for creating posters and logos for various projects.
              <br>
              <br></span>
              Swipe to the right or click the arrow to see things I have created at university or in my free time!
          </article>
          <img src="./websitelogos.png" class="logos" alt="">
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";

.logos {
  width: 25%;
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

.skills {
  position: absolute;
  z-index: 5001;
  transition: 1s;
  width: 100%;
  height: 100%;
  background: $hardPurpleDark;
  color: $hardPink;
  height: 100vh;
  overflow: hidden;
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

