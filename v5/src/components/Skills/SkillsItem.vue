<template>
    <div>
        <h2 :style="{ 'color': color}">{{ name }}</h2>
        <div class="skill" :style="[{ 'width': familiarity + '%' }, { 'background-color': color}]"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    props: ["name", "familiarity", "color"]
}
</script>

<style lang="scss" scoped>
h2 {
    text-align: left;
}

.skill {
    height: 10px;
}
</style>

