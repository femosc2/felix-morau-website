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
                    description: "",
                    color: "#f1e05a"
                },
                {
                    skillName: "Python",
                    familiarity: 50,
                    description: "",
                    color: "#3572A5"
                },
                {
                    skillName: "Vue",
                    familiarity: 75,
                    description: "",
                    color: "#2c3e50"
                },
                {
                    skillName: "React",
                    familiarity: 30,
                    description: "",
                    color: "#80d8f7"
                },
                {
                    skillName: "Node",
                    familiarity: 60,
                    description: "",
                    color: "#77B362"
                },
                {
                    skillName: "SQL",
                    familiarity: 25,
                    description: "",
                    color: "#f4a142"
                },
                {
                    skillName: "NO-SQL",
                    familiarity: 40,
                    description: "",
                    color: "#1e3bfc"
                },
                {
                    skillName: "HTML",
                    familiarity: 85,
                    description: "",
                    color: "#E54C21"
                },
                {
                    skillName: "CSS",
                    familiarity: 85,
                    description: "",
                    color: "#1472BA"
                },
            ],
            applicationSkills: [
                {
                    skillName: "Photoshop",
                    familiarity: 30,
                    description: "",
                    color: "#00C8FF"
                },
                {
                    skillName: "Adobe XD",
                    familiarity: 40,
                    description: "",
                    color: "#FF21C0"
                },
            ],
            conceptSkills: [
                {
                    skillName: "Information Architecture",
                    familiarity: 60,
                    description: "",
                    color: "#7e0699",
                },
                {
                    skillName: "UX-design",
                    familiarity: 50,
                    description: "",
                    color: "#03440c",
                },
                {
                    skillName: "Interaction Design",
                    familiarity: 25,
                    description: "",
                    color: "#021644",
                },
                {
                    skillName: "UML",
                    familiarity: 75,
                    description: "",
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
