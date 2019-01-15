<template>
  <div class="woo">
    <ul :class="[{navTop: scrolledPastHeader === true},
        {red: currentScroll <= 1200 && currentScroll > 500},
        {blue: currentScroll > 1200},
        {green: currentScroll > 3000},
        {yellow: currentScroll > 4200}
        ]">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, '.' + section.menuName )" :class="[
        { active: activeSection === section.menuName },
        ]"> <p> {{ section.menuName }} </p> </li>
        <div class="indicator" :class="[
        {indicatorAbout: currentScroll <= 1200},
        {indicatorSkills: currentScroll > 1200},
        {indicatorProjects: currentScroll > 3000},
        {indicatorContact: currentScroll > 4200},
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
          menuName: "About",
          active: true
        },
        {
          menuName: "Skills",
          active: false
        },
        {
          menuName: "Projects",
          active: false
        },
        {
          menuName: "Contact",
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
      let lowercaseElement = element.toLowerCase()
      this.activeSection = this.sections[index].menuName
      this.$emit("navClickDetected", lowercaseElement)
    },
    handleScroll() {
      this.currentScroll = window.scrollY
      if (this.currentScroll > 400 && this.currentScroll < 1100) {
        this.scrolledPastHeader = true;
        this.activeSection = "about"
      } else if (this.currentScroll < 1100) {
        this.scrolledPastHeader = false;
        this.activeSection = "about"
      } else if (this.currentScroll > 1101 && this.currentScroll < 3500) {
        this.activeSection = "skills"
        this.scrolledPastHeader = true;
      } else if (this.currentScroll > 3500 && this.currentScroll < 4200) {
        this.activeSection = "projects"
        this.scrolledPastHeader = true;
      } else if (this.currentScroll > 4290 && this.currentScroll < 8000) {
        this.activeSection = "contact"
        this.scrolledPastHeader = true;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll); // Listens to the users mousescroll
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
  background: #F56B5E;
  margin: 0;
  transition: 1s;
  margin: 0;
  color: white;
  webkit-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.55);
-moz-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.55);
box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.55);
  
}
li {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: red;
  width: 25%;
  height: 50px;
  font-size: 25px;
  display: inline-block;
  transition: 1s;
  cursor: pointer;
  }
li > p {
  margin: 0;
  margin-top: 0.6rem;
  color: #2c3e50;
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
  background: #F56B5E !important;
}

.blue {
  background: #009fff !important;
}

.green {
  background: #ED5181 !important;
}

.yellow {
  background: #FDC01A !important;
}

.indicator  {
  background-color: #2c3e50;
  height: 5px;
  top: 90%;
  width: 25%;
  position: absolute;
  border-radius: 10px;
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

::selection {
  background-color: rgba(255,255,255, 0.0)
}

@media only screen and (max-width: 1000px) {
  .indicator {
    display: none;
  }
  .active {
    background-color: rgba(255,255,255, 1);
  }
  li {
    font-size: 20px;
  }

}

</style>
