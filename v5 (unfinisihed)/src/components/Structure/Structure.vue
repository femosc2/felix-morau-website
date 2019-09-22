<template>
    <div><div class="structure" :class="{ aboutBackground: currentSection === 'about', skillsBackground: currentSection === 'skills', projectsBackground: currentSection === 'projects' }"></div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentScroll: 0,
        }
    },
    methods: {
    },
    created() {
    },
    props: ["currentSection"]
    
}
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";
.structure {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    transition: 1s;
}

.aboutBackground {
    background-color: $softPink;
}

.skillsBackground {
    background-color: $softBlue;
}

.projectsBackground {
    background-color: $softGreen;
}

</style>


