<template>
<div>
    <div class="leftSide"></div>
    <div class="rightSide"></div>
    <a class="about"></a>
    <about-section />
</div>
</template>

<script>
import AboutSection from "./AboutSection"
export default {
    data: function() {
    return {
    }
    },
    methods: {

    },
    components: {
        AboutSection,
    }
}
</script>

<style>
    .leftSide {
        height: 500px;
        width: 5%;
        position: fixed;
        left: 0;
        background-color: #070707;
        z-index: 500;
        position: fixed;
        margin-top: 0;
    }
    .rightSide {
        height: 500px;
        width: 5%;
        position: fixed;
        right: 0;
        background-color: #070707;
        z-index: 500;
        position: fixed;
        margin-top: 0;
    }
</style>
