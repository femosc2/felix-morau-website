<template>
  <div class="woo">
    <ul :class="[{navTop: scrolledPastHeader === true},
        {red: currentScroll < 1800},
        {blue: currentScroll > 1801},
        {green: currentScroll > 4000},
        ]">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, '.' + section.menuName )" :class="[
        { active: activeSection === section.menuName },
        {red: currentScroll < 1800},
        {blue: currentScroll > 1801},
        {green: currentScroll > 4000}
        ]"> <p> {{ section.menuName }} </p> </li>
        <div class="indicator" :class="[
        {indicatorAbout: currentScroll < 1800},
        {indicatorSkills: currentScroll > 1801},
        {indicatorProjects: currentScroll > 4000},
        {indicatorContact: currentScroll > 6000},
        ]" :style="{ 'left': currentScroll/100 + '%' }">
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
      if (this.currentScroll > 1000 && this.currentScroll < 1801) {
        this.scrolledPastHeader = true;
        this.activeSection = "about"
      } else if (this.currentScroll < 1000) {
        this.scrolledPastHeader = false;
      } else if (this.currentScroll > 1801 && this.currentScroll < 3800) {
        this.activeSection = "skills"
      } else if (this.currentScroll > 4000 && this.currentScroll < 6000) {
        this.activeSection = "projects"
      } else if (this.currentScroll > 7000 && this.currentScroll < 8000) {
        this.activeSection = "contact"
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
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
  background: #ec2f4b;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
li {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: red;
  width: 25%;
  height: 50px;
  font-size: 20px;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  display: inline-block;
  transition: 1s;
  }
li > p {
  margin: 0;
  margin-top: 0.6rem;
  color: black;
}

.active {
  text-decoration-line:underline;
  transition: 1s;
}

li:not(.active) {
  opacity: 0.5;
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
  background-color: #6dff77;
}

.indicator  {
  background-color: black;
  height: 10px;
  top: 80%;
  width: 10%;
  position: absolute;
  border-radius: 20px;
}

/* .indicatorAbout {
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
} */

</style>
