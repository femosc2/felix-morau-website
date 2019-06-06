<template>
    <div>
        <skills-list :currentSection="currentSection" :skills="skills" />
    </div>
</template>

<script>
import SkillsList from "./SkillsList.vue" // imports the skill

export default {
    data: function() {
        return {
            skills: [
                {
                    name: "JavaScript",
                    familiarity: 70,
                    description: "Familiar with JavaScript, mainly with frameworks and libraries. Able to build servers, backends, apps, websites, APIs etc.",
                    color: "#f1e05a"
                },
                {
                    name: "Python",
                    familiarity: 50,
                    description: "Learned this language at University. Able to build simple webapps. Knowledge of both functional and object oriented Python.",
                    color: "#3572A5"
                },
                {
                    name: "Vue",
                    familiarity: 76,
                    description: "Favorite framework for JavaScript. Able to build pretty much anything the framework allows.",
                    color: "#4e8e7f"
                },
                {
                    name: "React",
                    familiarity: 65,
                    description: "Used this framework from time to time, able to build simple things.",
                    color: "#80d8f7"
                },
                {
                    name: "Node",
                    familiarity: 60,
                    description: "Able to build APIs, servers, backends and the likes.",
                    color: "#77B362"
                },
                {
                    name: "CSS",
                    familiarity: 90,
                    description: "Able to build decent Animations and transitions as an addition to everyday CSS.",
                    color: "#1472BA"
                },
                {
                    name: "Photoshop",
                    familiarity: 31,
                    description: "Decent at Photoshop, made posters and logos for various school projects",
                    color: "#00C8FF"
                },
                {
                    name: "UX",
                    familiarity: 50,
                    description: "Decent familiarity of proper UX-Design",
                    color: "#0ad626",
                },
                {
                    name: "Agile Development",
                    familiarity: 70,
                    description: "Have worked extensively with Agile Development including Kanban, Scrum and Scrumban. Know when to apply what develop strategy.",
                    color: "#42f4bc",
                },
            ]
        }
    },
    methods: {
        
    },
    components: {
        SkillsList
    },
    props: ["currentSection"]
}
</script>

<style>

</style>
