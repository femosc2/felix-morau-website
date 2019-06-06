<template>
<div>
    <projects-list :currentSection="currentSection" :projects="projects" />
</div>
</template>

<script>
import ProjectsList from "./ProjectsList.vue"
const axios = require("axios")


export default {
    data() {
        return {
            projects: []
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
    },
    created() {
        this.getProjects()
    },
components: {
    ProjectsList
},
props: ["currentSection"]
}
</script>

<style>

</style>
