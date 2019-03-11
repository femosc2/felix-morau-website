<template>
    <div class="header">
        <header-section :userCity="userCity" :userWeather="userWeather" :userTemp="userTemp" :userCountry="userCountry" />
    </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import Config from "../../config.js"

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
          // Method for showing weather on the header, the IP is sent from App.vue
          // Uses geolocation recieved from IP to prevent users from having to press allow access to location
          // Wont work correctly if users uses a VPN.
          setTimeout(() => {
              axios.get("https://ipinfo.io/" + this.ip + "?token=" + Config.ipAPIKey()).then(response => {
                  let resultArray = []
                  for (let key in response) {
                      resultArray.push(response[key]); // Organizes the JSON response
                  }
                  this.userCity = resultArray[0].city // Sets the city to the response
                  this.userCountry = resultArray[0].country // Sets the country to the response
                  this.userCoords = resultArray[0].loc // Sets the coordinates to the response
                  if (this.userCity === "Malmo") { // The city Malmo points to a town in the US.
                      this.userCity = "Malmö"
                  }
                  axios.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + Config.forecastAPIKey() + "/" + this.userCoords).then(response => {
                  let weatherArray = []
                  for (let key in response) {
                      weatherArray.push(response[key]);
                  }
                  this.userWeather = weatherArray[0].currently.summary // sets the weather (ex rain)
                  let temp = (weatherArray[0].currently.temperature - 32) * 5/9 // Converts the temperature from Farenheit to Celcius.
                  this.userTemp = Math.round(temp * 10) / 10 // Show only one decimal 
              })
              })
          },1) // Otherwise IP wont be found.
      }
  },
  components: {
    HeaderSection
  },
  created() {
      // Runs the methods when the componenet is created.
      this.getWeather()
  },
  props: ["ip"]
};
</script>

<style>
</style>
