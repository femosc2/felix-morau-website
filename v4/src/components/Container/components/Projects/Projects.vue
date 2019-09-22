<template>
<div>
    <projects-list :projects="projects" />
</div>
</template>

<script>
const axios = require("axios")

import ProjectsList from "./ProjectsList.vue"

export default {
    data: function() {
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
}
}
</script>

<style>

</style>
