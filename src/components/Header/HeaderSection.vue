<template>
<div class="outerDiv">
    <div class="innerDiv">
        <div class="textBackground">
            <h1>Felix Morau</h1>
            <h2>{{ currentTime }}</h2>
            <h3>{{ currentDay }}</h3>
            <h3> {{ currentDate }} {{ currentMonth }} {{ currentYear }}</h3>
            <h4> {{ userCity }} {{ userCountry }}</h4>
            <h4>{{ userWeather }} {{ userTemp }}&#8451;</h4>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            currentTime: "",
            currentDay: "",
            currentMonth: "",
            currentDate: "",
            currentYear: "",
        }
    },
    methods: {
        clock() {
            // Method for showing a clock
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let today = new Date()
            let hour = today.getHours()
            let minute = today.getMinutes()
            let second = today.getSeconds()
            minute = this.addZeroes(minute);
            second = this.addZeroes(second);
            this.currentTime = hour + ":" + minute + ":" + second
            this.currentDay = days[today.getDay()]
            this.currentMonth = months[today.getMonth()]
            this.currentDate = today.getDate()
            this.currentYear = today.getFullYear()
            let time = setTimeout(this.clock, 500);
        },
        addZeroes(i) {
            if (i < 10) {
                i = "0" + i
            }  // add zero in front of numbers < 10
            return i;
        },
    },
    created() {
        this.clock()
    },
    props: ["userCity", "userWeather", "userTemp", "userCountry"]
}
</script>
<style scoped>

.outerDiv {
  background: #F56B5E;
  background-image: url("https://i.redd.it/mxld4d2grs421.png");
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0 100%); */
}

.textBackground {
    /* background-image: url("https://i.imgur.com/WUSb5Cm.png");
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  position: absolute;
  height: 35%;
  width: 100%;
  top: 15%;
  padding-top: 3rem;
  /* -webkit-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.5);
box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.5); */
color: #2c3e50;
}
h1 {
  margin: 0;
  font-size: 50px;
}

h2 {
    font-size: 35px;
    margin: 0;
}

h3 {
    font-size: 25px;
    margin: 0;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media only screen and (min-width: 650px) {
    .outerDiv {
        background-size: 2000px 800px;
        background-attachment: inherit;
    }
}

@media only screen and (min-width: 810px) {
    .outerDiv {
        background-attachment: inherit;
    }
}

@media only screen and (max-width: 1000px) {
    .innerDiv {
        height: 500px;
    }
    h1 {
        font-size: 35px;
    }
    h2 {
        font-size: 25px !important;
    }
    h3 {
        font-size: 20px !important;
    }
    .outerDiv {
        background-attachment: top;
        background-size: 1600px 800px;
    }
}
</style>