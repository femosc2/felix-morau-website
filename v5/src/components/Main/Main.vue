<template>
<div>
    <main-content :currentProjects="projects" />
</div>
</template>

<script>
import MainContent from "./MainContent"
const axios = require("axios")


export default {
    data() {
        return {
            projects: [],
            secondSection: "skills"
        }
    },
    methods: {
        getProjects() {
            // Gets the projects from firebase
            axios.get("https://my-website-21d35.firebaseio.com/Projects.json")
            .then(response => {
                const resultArray = [];
                for (let key in response) {
                    resultArray.push(response[key]); // Organizes the json response
                }
                this.projects = resultArray[0]
            })
        },
        switchSection(section) {
            this.$emit("scrollDetected", section)
        },
    },
    created() {
        this.getProjects()
    },
components: {
    MainContent
},
watch: {
    currentSection: function(newVal, oldVal){
        this.secondSection = newVal
        console.log(this.secondSection + "SECOND")
    }
},
props: ["currentSection"]
}
</script>

<style lang="scss" scoped>
.lol {
}
</style>
