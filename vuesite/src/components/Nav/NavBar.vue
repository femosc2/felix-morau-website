<template>
  <div>
    <ul :class="{navTop: scrolledPastHeader === true}">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index)" :class="{ active: activeSection === section.menuName }"> <p> {{ section.menuName }}</p> </li>
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
      activeSection: "About",
      scrolledPastHeader: false
    }
  },
  methods: {
    goToSection(index) {
      this.sections[index].active = true;
      this.activeSection = this.sections[index].menuName
      this.$emit("currentSection", this.sections[index].menuName);
    },
    handleScroll () {
      // this.currentScroll = window.scrollY > 10;
      // if (this.currentScroll < 1) {
      //   this.scrolledPastHeader = true;
      //   console.log(this.scrolledPastHeader);
      // } else if (this.currentScroll === 0) {
      //   this.scrolledPastHeader = false;
      // }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  text-align: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  background-color: blue;
  margin: 0;
  transition: 1s;
  margin: 0 auto;
  background: #ec2F4B
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
    background-color: #ec2F4B;
    color: white;
}

.navTop {
  position: fixed;
  top: 0;
  width: 100%;

}
</style>
