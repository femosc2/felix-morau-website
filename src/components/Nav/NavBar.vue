<template>
  <div class="woo">
    <ul id="navBar" :class="{navTop: scrolledPastHeader === true}">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, section.menuName )" :class="[
        { active: activeSection === '.' + section.menuName },
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
      // Method to scroll to the clicked section
      this.sections[index].active = true; // Sets the active bool to true
      let lowercaseElement = element.toLowerCase(); // transform the element so it can be used by App.vue 
      this.activeSection = '.' + lowercaseElement; // Sets the current active section
      this.$emit("navClickDetected", this.activeSection); // Emits the section to the parent (and in turn to app)
    },
    handleScroll() {
      // Method for changing the color of the navbar as the user scrolls.
      // The if and else checks what platform the user is on.
      // This is needed because of how much longer the webpage becomes on mobile due to the width of the projectcards found in Projects/ProjectList.vue

      this.currentScroll = window.scrollY; // Checks what the current scroll is.

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // Checks if the user is on a mobile device such as a smartphone or a surface.
        if (this.currentScroll > 625 && this.currentScroll < 1200) { // Navbar positioning, if you scroll past 625px (header), the navbar should follow the user
          this.changeNavBar("about", "#f56b5e", "translateX(0%)", true )
        } else if (this.currentScroll <= 1200) {
          this.changeNavBar("about", "#f56b5e", "translateX(0%)", false )
        } else if (this.currentScroll > 1200 && this.currentScroll <= 4600) {
          this.changeNavBar("skills", "#009fff", "translateX(100%)", true )
        } else if (this.currentScroll > 4600 && this.currentScroll <= 6200) {
          this.changeNavBar("projects", "#ed5181", "translateX(200%)", true )
        } else if (this.currentScroll > 6200 && this.currentScroll <= 10000) {
          this.changeNavBar("contact", "#fdc01a", "translateX(300%)", true )
        }
      } else { // If the user is on a desktop or a laptop.
        if (this.currentScroll >= 600 && this.currentScroll <= 1200) {
          this.changeNavBar("about", "#f56b5e", "translateX(0%)", true )
          document.getElementById("indicator").style.borderRadius = "0px 10px 10px 0px";
          document.getElementById("indicator").style.display = "block";
        } else if (this.currentScroll <= 1200) {
          this.changeNavBar("about", "#f56b5e", "translateX(0%)", false )
          document.getElementById("indicator").style.borderRadius = "0px 10px 10px 0px";
          document.getElementById("indicator").style.display = "none";
        } else if (this.currentScroll > 1200 && this.currentScroll <= 3700) {
          this.changeNavBar("skills", "#009fff", "translateX(100%)", true )
          document.getElementById("indicator").style.borderRadius = "10px";
          document.getElementById("indicator").style.display = "block";
        } else if (this.currentScroll > 3700 && this.currentScroll <= 4700) {
          this.changeNavBar("projects", "#ed5181", "translateX(200%)", true )
          document.getElementById("indicator").style.borderRadius = "10px";
          document.getElementById("indicator").style.display = "block";
        } else if (this.currentScroll > 4700 && this.currentScroll <= 8000) {
          this.changeNavBar("contact", "#fdc01a", "translateX(300%)", true )
          document.getElementById("indicator").style.borderRadius = "10px 0px 0px 10px";
          document.getElementById("indicator").style.display = "block";
        }
      }
    },
    changeNavBar(whatSection, color, transform, headerBool) {     // whatSection should be a string in lowercase.
      this.activeSection = whatSection;                           // color should be a string with a hexcode.
      this.scrolledPastHeader = headerBool;                       // transform should be css transfrom in %.
      document.getElementById("navBar").style.background = color; //headerBool should be a bool which decides if the navbar is fixed or not.
      document.getElementById("indicator").style.transform = transform;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll); // Listens to the users mousescroll
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // If the navbar is somehow destroyed, stop tracking the user mouse scroll
  },
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
  transition: 1s;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.55);
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
  display: none;
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
