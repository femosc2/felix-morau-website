<template>
  <div id="app">
    <big-header />
    <nav-bar @navClickDetected="scrollTo" />
    <about />
    <skills />
    <projects />
    <contact />
  </div>
</template>

<script>
import NavBar from "./components/Nav/Nav.vue";
import About from "./components/About/About.vue";
import BigHeader from "./components/Header/Header.vue";
import Skills from "./components/Skills/Skills.vue";
import Projects from "./components/Projects/Projects.vue";
import Contact from "./components/Contact/Contact.vue";

const axios = require("axios");

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    NavBar,
    About,
    BigHeader,
    Skills,
    Projects,
    Contact
  },
  methods: {
    scrollTo(element) {
      document.querySelector(element).scrollIntoView({
        behavior: "smooth"
      });
    },
  //   logIP() {
  //     let today = new Date();
  //     axios.get("https://api.ipify.org").then(response => {
  //       const resultArray = [];
  //       for (let key in response) {
  //         resultArray.push(response[key]);
  //       }
  //       let ip = resultArray[0];
  //       let stringIp = ip.split(".")
  //       let firebaseIp = stringIp[0] + stringIp[1] + stringIp[2] + stringIp[3]
  //       console.log(firebaseIp)
  //       let firebaseInt = parseInt(firebaseIp, 10)
  //       let loggedIp = {
  //       "ip": ip,
  //       "time": today
  //     }
  //       setTimeout(() => {
  //       axios.put("https://my-website-21d35.firebaseio.com/ipLog/" + firebaseInt + ".json", loggedIp).then(response => {
  //       const postArray = [];
  //       for (let key in response) {
  //         resultArray.push(response[key]);
  //       }
  //       console.log(postArray)
  //     })
  //     }, 5*1000)
  //     });
  // },
},
created() {
    this.logIP();
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 1000px) {
  .projectCard {
    width: 100%;
    height: 20%;
  }
  h2 {
    font-size: 75px !important;
  }
}
</style>
