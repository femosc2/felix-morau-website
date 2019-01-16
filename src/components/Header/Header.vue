<template>
    <div class="header">
        <header-section :userCity="userCity" :userWeather="userWeather" :userTemp="userTemp" :userCountry="userCountry" />
    </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import Config from "../../../config.js"

const axios = require("axios")

export default {
  data: function() {
    return {
        userCity: "",
        userWeather: "",
        userTemp: "",
        userCountry: "",
        userCoords: "",

    };
  },
  methods: {
      getWeather() {
          setTimeout(() => {
              axios.get("https://ipinfo.io/" + this.ip + "?token=83fb0c9bd7376e ").then(response => {
                  //83fb0c9bd7376e
                  let resultArray = []
                  for (let key in response) {
                      resultArray.push(response[key]);
                  }
                  console.log(resultArray)
                  this.userCity = resultArray[0].city
                  this.userCountry = resultArray[0].country
                  this.userCoords = resultArray[0].loc
                  if (this.userCity === "Malmo") {
                      this.userCity = "Malmö"
                  }
                  console.log(this.userCity)
                  axios.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + Config.forecastAPIKey() + "/" + this.userCoords).then(response => {
                  let weatherArray = []
                  for (let key in response) {
                      weatherArray.push(response[key]);
                  }
                  console.log(weatherArray)
                  this.userWeather = weatherArray[0].currently.summary
                  let temp = (weatherArray[0].currently.temperature - 32) * 5/9
                  this.userTemp = Math.round(temp * 10) / 10
                  console.log(this.userCity, this.userCountry, this.userWeather, this.userTemp)
              })
              })
          },2)
      }
  },
  components: {
    HeaderSection
  },
  created() {
      this.getWeather()
  },
  props: ["ip"]
};
</script>

<style>
</style>
