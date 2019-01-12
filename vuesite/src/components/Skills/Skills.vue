<template>
    <div>
        <skills-list :programmingSkills="programmingSkills" :conceptSkills="conceptSkills" :applicationSkills="applicationSkills" />
    </div>
</template>

<script>
import SkillsList from "./SkillsList.vue"

export default {
    data: function() {
        return {
            programmingSkills: [
                {
                    skillName: "JavaScript",
                    familiarity: 60,
                    description: "Familiar with JavaScript, mainly with frameworks and libraries. Able to build servers, backends, apps, websites, APIs etc.",
                    color: "#f1e05a"
                },
                {
                    skillName: "Python",
                    familiarity: 50,
                    description: "Learned this language at University. Able to build simple webapps. Knowledge of both functional and object oriented Python.",
                    color: "#3572A5"
                },
                {
                    skillName: "Vue",
                    familiarity: 75,
                    description: "Favorite framework for JavaScript. Able to build pretty much anything the framework allows.",
                    color: "#2c3e50"
                },
                {
                    skillName: "React",
                    familiarity: 30,
                    description: "Used this framework from time to time, able to build simple things.",
                    color: "#80d8f7"
                },
                {
                    skillName: "Node",
                    familiarity: 60,
                    description: "Able to build APIs, servers, backends and the likes.",
                    color: "#77B362"
                },
                {
                    skillName: "SQL",
                    familiarity: 25,
                    description: "Used POSTGRESQL and Python for a course at University, decent knowledge and experience in building and using Databases.",
                    color: "#f4a142"
                },
                {
                    skillName: "NO-SQL",
                    familiarity: 40,
                    description: "Preffered type of Database. Often using Firebase for projects (including this one).",
                    color: "#1e3bfc"
                },
                {
                    skillName: "HTML",
                    familiarity: 85,
                    description: "First coding I ever did, never run into issues using HTML but I dont know everything.",
                    color: "#E54C21"
                },
                {
                    skillName: "CSS",
                    familiarity: 85,
                    description: "Able to build decent Animations and transitions as an addition to everyday CSS.",
                    color: "#1472BA"
                },
            ],
            applicationSkills: [
                {
                    skillName: "Photoshop",
                    familiarity: 30,
                    description: "Decent at Photoshop, made posters and logos for various school projects",
                    color: "#00C8FF"
                },
                {
                    skillName: "Adobe XD",
                    familiarity: 40,
                    description: "Used this program to build prototypes for Information Architecture assignments.",
                    color: "#FF21C0"
                },
            ],
            conceptSkills: [
                {
                    skillName: "Information Architecture",
                    familiarity: 60,
                    description: "Completed 30HP of Information Architecture at Malmö University.",
                    color: "#7e0699",
                },
                {
                    skillName: "UX-design",
                    familiarity: 50,
                    description: "Decent knowledge of proper UX-Design",
                    color: "#03440c",
                },
                {
                    skillName: "Interaction Design",
                    familiarity: 25,
                    description: "Some knowledge of Interaction Design, completed a 7.5hp course at Malmö University",
                    color: "#ffadda",
                },
                {
                    skillName: "UML",
                    familiarity: 75,
                    description: "Good familiartiy of UML, passed with distiction on the exam.",
                    color: "#ed0219",
                },
            ]
        }
    },
    methods: {
        
    },
    components: {
        SkillsList
    }
}
</script>

<style>

</style>
