<template>
    <div class="outerDiv">
        <h2>Skills</h2>
        <section>
            <div class="innerDiv">
              <div class="buttonDiv">
                <button class="sortButton" @click="sortBy('skillName')"><i class="fas fa-sort-alpha-up"></i></button>
                <button class="sortButton" @click="sortByColor"><i class="fas fa-palette"></i></button>
                <button class="sortButton" @click="sortBy('familiarity')"><i class="fas fa-star"></i></button>
              </div>
            <a class="skills"></a>
            <div class="skillDiv" v-for="(skill, index) in skills" :key=index>
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
const _ = require("lodash");
const colorSort = require("color-sort");

export default {
  data: function() {
    return {
      hexCodeList: [],
      colorSortedArray: [],
    };
  },
  methods: {
    getHexCodes() {
      // Method for getting all the hexcodes from the skill objects.
      for (let i = 0; i < this.skills.length; i++) {
        this.hexCodeList.push(this.skills[i].color); // Puts the hexcodes in a new seperate array
      }
      colorSort(this.hexCodeList); // Sorts the hexcodes by colour.
    },
    sortByColor() {
      // Sorts the skills by colour.
      let x = 0;
      this.colorSortedArray = this.skills;

      while (x < this.colorSortedArray.length) {                        // While the array is not sorted, keep sorting
        for (let i = 0; i < this.colorSortedArray.length; i++) {        // for every skill in the array
          if (this.colorSortedArray[i].color === this.hexCodeList[x]) { // if the current iterrated object has the same colour as the correct color
            let splicedSkill = this.colorSortedArray.splice(i, 1);      // remove the color from the array
            this.colorSortedArray.unshift(splicedSkill[0]);             // and add it to the front of the array
            x = x + 1;                                                  // and let the iterator check the next color
          } 
        }
      }
      this.skills = this.colorSortedArray; // sets the skills to the array sorted by color
    },
    sortBy(property) {
      let sortedBy = _.orderBy(this.skills, property); // Uses lodash to sort an object
      if (property === "familiarity") { // Sorts the array in the right direction
        sortedBy = sortedBy.reverse(); // Reverses the sort direction
      }
      this.skills = sortedBy; // Sets the skills to the sorted skills
    }
  },
  props: ["skills"],
  created() {
    this.getHexCodes(); // This has to be in created rather than in the sortByColor method for some reason.
  }
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
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
  transition: 1s;
}
section {
  /* -clip-path: polygon(0 15%, 100% 6%, 100% 85%, 0 15%); */
  /* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%); */
  background-image: url("https://i.imgur.com/FmICIUg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #009fff;
  background: -webkit-linear-gradient(to bottom, #009fff, #f56b5e);
  background: linear-gradient(to bottom, #009fff, #f56b5e);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.innerDiv {
  background: -webkit-linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* -webkit-clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%); */
  min-height: 200px;
  padding-top: 50px;
  padding-bottom: 150px;
  height: auto;
  width: 100%;
}
h2 {
  margin: 0;
  font-size: 7vw;
   z-index: 9000;
}

p {
  font-size: 20px;
}

.sortButton {
  background-color: #009fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  float: right;
  margin-right: 10px;
  margin-left: 10px;
  transition: 2s;
}

.sortButton:hover {
  filter: hue-rotate(180deg);
  transition: 2s;
  transform: scale(1.2);
}

.sortButton:focus {
  filter: hue-rotate(180deg);
  transform: scale(1.2);
  outline: none;
}

i {
  font-size: 30px;
}

.buttonDiv {
  padding-bottom: 50px;
}

@media only screen and (max-width: 1000px) {
  .skillBar {
    max-width: 100%;
    border-radius: 0px;
  }
  .skillBar > .skill {
    max-width: 100%;
    border-radius: 0px 35px 35px 0px;
  }
}
</style>

