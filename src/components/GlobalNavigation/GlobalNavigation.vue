<template>
    <div>
        <global-navigation-menu @gNavClicked="showPage" />
    </div>
</template>

<script>
import GlobalNavigationMenu from "./GlobalNavigationMenu"
export default {
    components: {
        GlobalNavigationMenu
    },
    methods: {
        showPage(page) {
            this.$emit("gNavClicked", page)
        }
    }
}
</script>

<style>

</style>
