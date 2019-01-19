<template>
  <div id="app">
    <revealer />
    <big-header :ip="ip" />
    <nav-bar @navClickDetected="scrollTo" />
    <about />
    <skills />
    <projects />
    <contact />
    <small-footer />
  </div>
</template>

<script>
import NavBar from "./components/Nav/Nav.vue";
import About from "./components/About/About.vue";
import BigHeader from "./components/Header/Header.vue";
import Skills from "./components/Skills/Skills.vue";
import Projects from "./components/Projects/Projects.vue";
import Contact from "./components/Contact/Contact.vue";
import SmallFooter from "./components/Footer/Footer.vue";
import Revealer from "./components/Revealer/RevealerBoxes.vue";

const axios = require("axios");

export default {
  name: "app",
  data: function() {
    return {
      ip: "",
      currentScroll: 0
    };
  },
  components: {
    NavBar,
    About,
    BigHeader,
    Skills,
    Projects,
    Contact,
    SmallFooter,
    Revealer
  },
  methods: {
    scrollTo(element) {
      document.querySelector(element).scrollIntoView({
        behavior: "smooth"
      });
    },
    logIP() {
      let today = new Date();
      axios.get("https://api.ipify.org").then(response => {
        let resultArray = [];
        for (let key in response) {
          resultArray.push(response[key]);
        }
        this.ip = resultArray[0];
        let stringIp = this.ip.split(".");
        let firebaseIp = stringIp[0] + stringIp[1] + stringIp[2] + stringIp[3];
        console.log("hej")
        let firebaseInt = parseInt(firebaseIp, 10);
        let loggedIp = {
          ip: this.ip,
          time: today
        };
        setTimeout(() => {
          axios
            .put(
              "https://my-website-21d35.firebaseio.com/ipLog/" +
                firebaseInt +
                ".json",
              loggedIp
            )
            .then(response => {
              let postArray = [];
              for (let key in response) {
                postArray.push(response[key]);
              }
              console.log(postArray)
              console.log("hej")
            });
        }, 2 * 1000);
      });
    }
  },
  created() {
    this.logIP();
  }
};
</script>

<style>
#app {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0 !important;
}

@keyframes blurIn {
  0% {
    filter: blur(15px);
  }
  100% {
    filter: blur(0px);
  }
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
