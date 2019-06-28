<template>
<div>
    <main-content @scrollDetected="switchSection" />
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
        switchSection(section) {
            this.$emit("scrollDetected", section)
        },
    },
    created() {
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
