<template>
<div>
    <nav-bar class="nav" @navClickDetected="navClickDetected" :currentScroll="currentScroll" />
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
            // Recieves the element from the NavBar Component and emits it to App.vue
            console.log(element)
            this.$emit("navClickDetected", element)
        }
    },
    components: {
        NavBar
    },
    props: ["currentScroll"]
}
</script>

<style>

</style>
