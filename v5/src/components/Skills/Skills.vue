<template>
    <div>
        <skills-list :currentSection="currentSection" @scrollDetected="switchSection" />
    </div>
</template>

<script>
import SkillsList from "./SkillsList.vue" // imports the skill

export default {
    data: function() {
        return {
        }
    },
    methods: {
        switchSection(section) {
            this.$emit("scrollDetected", section)
        }
    },
    components: {
        SkillsList
    },
    props: ["currentSection"]
}
</script>

<style>

</style>
