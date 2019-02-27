<template>
    <div>
        <skills-terminals />
        <skills-u-x />
    </div>    
</template>

<script>
import SkillsTerminals from "./SkillsTerminals"
import SkillsUX from "./SkillsUX"
export default {
    data() {
        return {

        }
    },
    components: {
        SkillsTerminals,
        SkillsUX
    }
}
</script>

<style lang="scss" scoped>
h3, h2 {
    text-align: center;
}



</style>
