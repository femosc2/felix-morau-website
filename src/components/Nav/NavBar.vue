<template>
  <div class="woo">
    <ul id="navBar" :class="{navTop: scrolledPastHeader === true}">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, '.' + section.menuName )" :class="[
        { active: activeSection === section.menuName },
        ]"> <p> {{ section.menuName }} </p> </li>
        <div id="indicator">
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
    };
  },
  methods: {
    goToSection(index, element) {
      this.sections[index].active = true;
      let lowercaseElement = element.toLowerCase();
      this.activeSection = this.sections[index].menuName;
      this.$emit("navClickDetected", lowercaseElement);
    },
    handleScroll() {
      // Method for changing the color of the navbar as the user scrolls.
      // The if and else checks what platform the user is on.
      // This is needed because of how much longer the webpage becomes on mobile due to the width of the projectcards found in Projects/ProjectList.vue

      this.currentScroll = window.scrollY; // Checks what the current scroll is.

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // Checks if the user is on a mobile device such as a smartphone or a surface.
        if (this.currentScroll > 625 && this.currentScroll < 1200) { // Navbar positioning, if you scroll past 600px (header), the navbar should follow the user
          this.scrolledPastHeader = true; // Else the navbar should be below the header.
          document.getElementById("navBar").style.background = "#f56b5e";
          this.activeSection = "about";
          document.getElementById("indicator").style.transform =
            "translateX(0%)";
        } else if (this.currentScroll <= 1200) {
          this.scrolledPastHeader = false;
          this.activeSection = "about";
          document.getElementById("navBar").style.background = "#f56b5e";
          document.getElementById("indicator").style.transform =
            "translateX(0%)";
        } else if (this.currentScroll > 1200 && this.currentScroll <= 4300) {
          this.activeSection = "skills";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#009fff";
          document.getElementById("indicator").style.transform =
            "translateX(100%)";
        } else if (this.currentScroll > 4300 && this.currentScroll <= 5950) {
          this.activeSection = "projects";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#ed5181";
          document.getElementById("indicator").style.transform =
            "translateX(200%)";
        } else if (this.currentScroll > 5950 && this.currentScroll <= 10000) {
          this.activeSection = "contact";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#fdc01a";
          document.getElementById("indicator").style.transform =
            "translateX(300%)";
        }
      } else { // If the user is on a desktop or a laptop.
        if (this.currentScroll >= 600 && this.currentScroll <= 1200) {
          this.scrolledPastHeader = true;
          this.activeSection = "about";
          document.getElementById("navBar").style.background = "#f56b5e";
          document.getElementById("indicator").style.transform =
            "translateX(0%)";
        } else if (this.currentScroll <= 1200) {
          this.scrolledPastHeader = false;
          this.activeSection = "about";
          document.getElementById("navBar").style.background = "#f56b5e";
          document.getElementById("indicator").style.transform =
            "translateX(0%)";
        } else if (this.currentScroll > 1200 && this.currentScroll <= 3400) {
          this.activeSection = "skills";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#009fff";
          document.getElementById("indicator").style.transform =
            "translateX(100%)";
        } else if (this.currentScroll > 3400 && this.currentScroll <= 4500) {
          this.activeSection = "projects";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#ed5181";
          document.getElementById("indicator").style.transform =
            "translateX(200%)";
        } else if (this.currentScroll > 4500 && this.currentScroll <= 8000) {
          this.activeSection = "contact";
          this.scrolledPastHeader = true;
          document.getElementById("navBar").style.background = "#fdc01a";
          document.getElementById("indicator").style.transform =
            "translateX(300%)";
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll); // Listens to the users mousescroll
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
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
  background: #f56b5e;
  margin: 0;
  transition: 1s;
  margin: 0;
  color: white;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
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
  text-decoration-line: underline;
  transition: 1s;
  background-color: rgba(255, 255, 255, 0);
  opacity: 1;
}

li:not(.active) {
  background-color: rgba(255, 255, 255, 0);
}

.navTop {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
}

#indicator {
  background-color: #2c3e50;
  height: 5px;
  top: 90%;
  width: 25%;
  position: absolute;
  border-radius: 10px;
  float: left;
  left: 0;
  transition: 1s;
}

::selection {
  background-color: rgba(255, 255, 255, 0);
}

@media only screen and (max-width: 1000px) {
  #indicator {
    display: none;
  }
  .active {
    background: rgba(255, 255, 255, 1);
  }
  li {
    font-size: 20px;
  }
}
</style>
