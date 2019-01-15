<template>
<div class="outerDiv">
<div class="innerDiv">
        <h1>Felix Morau</h1>
        <h2>{{ currentTime }}</h2>
        <h3>{{ currentDay }}</h3>
        <h3> {{ currentDate }} {{ currentMonth }} {{ currentYear }}</h3>
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
            };  // add zero in front of numbers < 10
            return i;
        }
    },
    created() {
        this.clock()
    }
}
</script>
<style scoped>

.innerDiv {
  background: #F56B5E;
  background-image: url("https://i.imgur.com/DVJ1VGU.png");
  background-position: center;
  height: 600px;
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0 100%); */
}
h1 {
  margin: 0;
  padding-top: 15vh;
  font-size: 50px;
}

h2 {
    font-size: 35px;
}

@media only screen and (max-width: 1000px) {
    .innerDiv {
        height: 500px;
    }
    h1 {
        font-size: 35px;
    }
    h2 {
        font-size: 20px;
    }

}
</style>