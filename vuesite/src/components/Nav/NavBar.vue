<template>
  <div class="woo">
    <ul :class="[{navTop: scrolledPastHeader === true},
        {red: currentScroll < 1200},
        {blue: currentScroll > 1201},
        {green: currentScroll > 3000},
        {yellow: currentScroll > 6000}
        ]">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, '.' + section.menuName )" :class="[
        { active: activeSection === section.menuName },
        ]"> <p> {{ section.menuName }} </p> </li>
        <div class="indicator" :class="[
        {indicatorAbout: currentScroll < 1200},
        {indicatorSkills: currentScroll > 1201},
        {indicatorProjects: currentScroll > 3000},
        {indicatorContact: currentScroll > 6000},
        ]">
        </div>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sections: [
        {
          menuName: "about",
          active: true
        },
        {
          menuName: "skills",
          active: false
        },
        {
          menuName: "projects",
          active: false
        },
        {
          menuName: "contact",
          active: false
        }
      ],
      activeSection: "about",
      scrolledPastHeader: false,
      currentScroll: 0
    }
  },
  methods: {
    goToSection(index, element) {
      this.sections[index].active = true;
      this.activeSection = this.sections[index].menuName
      this.$emit("navClickDetected", element)
    },
    handleScroll() {
      this.currentScroll = window.scrollY
      console.log(this.currentScroll)
      if (this.currentScroll > 500 && this.currentScroll < 1200) {
        this.scrolledPastHeader = true;
        this.activeSection = "about"
      } else if (this.currentScroll < 1000) {
        this.scrolledPastHeader = false;
      } else if (this.currentScroll > 1200 && this.currentScroll < 3500) {
        this.activeSection = "skills"
        this.scrolledPastHeader = true;
      } else if (this.currentScroll > 3500 && this.currentScroll < 6000) {
        this.activeSection = "projects"
        this.scrolledPastHeader = true;
      } else if (this.currentScroll > 6000 && this.currentScroll < 8000) {
        this.activeSection = "contact"
        this.scrolledPastHeader = true;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll()
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
ul {
  display: flex;
  top: 0;
  list-style-type: none;
  text-align: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  background-color: blue;
  margin: 0;
  transition: 1s;
  margin: 0 auto;
}
li {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: red;
  width: 25%;
  height: 50px;
  font-size: 20px;
  display: inline-block;
  transition: 1s;
  cursor: pointer;
  }
li > p {
  margin: 0;
  margin-top: 0.6rem;
  color: black;
}

.active {
  text-decoration-line:underline;
  transition: 1s;
  background-color: rgba(255,255,255, 0.0);
  opacity: 1;
}

li:not(.active) {
  background-color: rgba(255,255,255, 0.0);
}

.navTop {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
}
.red {
  background-color: #ec2f4b;
}

.blue {
  background-color: #009fff;
}

.green {
  background-color: #0A949F;
}

.yellow {
  background-color: #FDC01A;
}

.indicator  {
  background-color: black;
  height: 10px;
  top: 80%;
  width: 25%;
  position: absolute;
  border-radius: 20px;
  float: left;
  left: 0;
}

.indicatorAbout {
  transform: translateX(0%);
  transition: 1s;
}
.indicatorSkills {
  transform: translateX(100%);
  transition: 1s;
}
.indicatorProjects {
  transform: translateX(200%);
  transition: 1s;
}
.indicatorContact {
  transform: translateX(300%);
  transition: 1s;
}

@media only screen and (max-width: 1000px) {
  .indicator {
    display: none;
  }
  .active {
    background-color: rgba(255,255,255, 1);
  }
}

</style>
