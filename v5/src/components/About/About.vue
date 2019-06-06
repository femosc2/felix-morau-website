<template>
    <about-section :currentSection="currentSection" @scrollDetected="switchSection" />
</template>

<script>
import AboutSection from "./AboutSection.vue"
export default {
    data() {
        return {

        }
    },
    components: {
        AboutSection
    },
    methods: {
        switchSection(section) {
            this.$emit("scrollDetected", section)
        }
    },
    props: ["currentSection"]
}
</script>

<style lang="scss" scoped>
section {
}

</style>


