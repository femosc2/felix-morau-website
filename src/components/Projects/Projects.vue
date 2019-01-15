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
            axios.get("https://my-website-21d35.firebaseio.com/Projects.json")
            .then(response => {
                const resultArray = [];
                for (let key in response) {
                    resultArray.push(response[key]);
                }
                this.projects = resultArray[0]
            })
        },
        newProject() {
            let projectInfo = {
                projectName: "lool",
                projectLanguage: "lool.js",
                projectDescription: "loool på lool",
            }
            axios.post("https://my-website-21d35.firebaseio.com/Projects.json", projectInfo)
        }
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
