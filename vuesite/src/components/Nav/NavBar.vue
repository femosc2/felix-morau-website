<template>
  <div class="woo">
    <ul :class="[{navTop: scrolledPastHeader === true},
        {red: currentScroll < 1999},
        {blue: currentScroll > 2000},
        {green: currentScroll > 4000},
        ]">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, '.' + section.menuName )" :class="[
        { active: activeSection === section.menuName },
        ]"> <p> {{ section.menuName }}</p> </li>
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
      if (this.currentScroll > 1000) {
        this.scrolledPastHeader = true;
        console.log(this.scrolledPastHeader);
      } else if (this.currentScroll < 1000) {
        this.scrolledPastHeader = false;
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
  background: grey;
}
li > p {
  margin: 0;
  margin-top: 0.6rem;
}

.active {
  background-color: #ec2f4b;
  color: white;
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

</style>
