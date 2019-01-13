<template>
<div>
    <nav-bar class="nav" @navClickDetected="navClickDetected" />
</div>
</template>

<script>
import NavBar from "./NavBar.vue"
export default {
    data: function() {
        return {

        }
    },
    methods: {
        navClickDetected(element) {
            console.log(element)
            this.$emit("navClickDetected", element)
        }
    },
    components: {
        NavBar
    }
}
</script>

<style>

</style>
