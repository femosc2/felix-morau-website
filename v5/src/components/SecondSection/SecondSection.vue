<template>
<div>
    <second-section-content :currentProjects="currentProjects" />
</div>
</template>

<script>
import SecondSectionContent from "./SecondSectionContent"
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
    SecondSectionContent
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
