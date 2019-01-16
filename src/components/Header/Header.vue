<template>
    <div class="header">
        <header-section :userCity="userCity" :userWeather="userWeather" :userTemp="userTemp" :userCountry="userCountry" />
    </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";

const axios = require("axios")

export default {
  data: function() {
    return {
        userCity: "",
        userWeather: "",
        userTemp: "",
        userCountry: "",

    };
  },
  methods: {
      getWeather() {
          setTimeout(() => {
              axios.get("http://ip-api.com/json/" + this.ip).then(response => {
                  let resultArray = []
                  for (let key in response) {
                      resultArray.push(response[key]);
                  }
                  console.log(resultArray)
                  this.userCity = resultArray[0].city
                  this.userCountry = resultArray[0].country
                  if (this.userCity === "Malmo") {
                      this.userCity = "Malmö"
                  }
                  console.log(this.userCity)
                  axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.userCity + "&APPID=65815e60870528d779d7eb889d42fa03").then(response => {
                  let weatherArray = []
                  for (let key in response) {
                      weatherArray.push(response[key]);
                  }
                  this.userWeather = weatherArray[0].weather[0].main + " & " + weatherArray[0].weather[1].main
                  let temp = weatherArray[0].main.temp - 273.15
                  this.userTemp = Math.round(temp * 10) / 10
                  console.log(this.userCity, this.userWeather, this.userTemp)
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
