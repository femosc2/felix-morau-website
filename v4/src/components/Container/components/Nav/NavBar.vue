<template>
  <div class="woo">
    <ul id="navBar" :class="{navTop: scrolledPastHeader === true}">
        <li v-for="(section, index) in sections" :key=index @click="goToSection(index, section.menuName )" :class="[
        { active: activeSection === '.' + section.menuName },
        ]" class="ripple"> <p> {{ section.menuName }} </p> </li>
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

      let aboutSectionColour = "#f56b5e"
      let skillsSectionColour = "#009fff"
      let projectsSectionColour = "#ed5181"
      let contactSectionColour = "#fdc01a"

      const h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';

      let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      
      if (percent >= 8.5 && percent <= 18) {
          this.changeNavBar("about", aboutSectionColour, "translateX(0%)", true )
          document.getElementById("indicator").style.borderRadius = "0px 10px 10px 0px";
          document.getElementById("indicator").style.display = "block";
          document.getElementById("indicator").style.borderColor = aboutSectionColour
        } else if (percent <= 18) {
          this.changeNavBar("about", aboutSectionColour, "translateX(0%)", false )
          document.getElementById("indicator").style.borderRadius = "0px 10px 10px 0px";
          document.getElementById("indicator").style.display = "none";
          document.getElementById("indicator").style.borderColor = aboutSectionColour
        } else if (percent > 18 && percent <= 66) {
          this.changeNavBar("skills", skillsSectionColour, "translateX(100%)", true )
          document.getElementById("indicator").style.borderRadius = "10px";
          document.getElementById("indicator").style.display = "block";
          document.getElementById("indicator").style.borderColor = skillsSectionColour
        } else if (percent > 66 && percent <= 87) {
          this.changeNavBar("projects", projectsSectionColour, "translateX(200%)", true )
          document.getElementById("indicator").style.borderRadius = "10px";
          document.getElementById("indicator").style.display = "block";
          document.getElementById("indicator").style.borderColor = projectsSectionColour
        } else if (percent > 87 && percent <= 100) {
          this.changeNavBar("contact", contactSectionColour, "translateX(300%)", true )
          document.getElementById("indicator").style.borderRadius = "10px 0px 0px 10px";
          document.getElementById("indicator").style.display = "block";
          document.getElementById("indicator").style.borderColor = contactSectionColour
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
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // If the navbar is somehow destroyed, stop tracking the user mouse scroll
  },
};
</script>

<style lang="scss" scoped>
$aboutSectionColour: #f56b5e;
$skillsSectionColour: #009fff;
$projectsSectionColour: #ed5181;
$contactSectionColour: #fdc01a;
$indicatorColour: #2c3e50;

ul {
  display: flex;
  top: 0;
  list-style-type: none;
  text-align: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  background: $aboutSectionColour;
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
  color: $indicatorColour;
  transition: 1s;
}

li:hover > p {
  margin: 0;
  margin-top: 0.6rem;
  color: #fff;
  transition: 1s;
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
  background-color: $indicatorColour;
  height: 5px;
  top: 90%;
  width: 25%;
  position: absolute;
  border-radius: 10px;
  float: left;
  left: 0;
  transition: 1s;
  display: none;
  border-top: 1px solid;
  border-color: white;

}

::selection {
  background-color: rgba(255, 255, 255, 0);
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: $indicatorColour radial-gradient(circle, transparent 1%, $indicatorColour 1%) center/15000%;
}
.ripple:active {
  background-color: #fff;
  background-size: 100%;
  transition: background 0s;
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
