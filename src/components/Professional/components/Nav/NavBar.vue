<template>
    <div>
        <ul class="navBar">
            <li v-for="(section,index) in sections" :key=index> {{ section.name }} </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    name: "About",
                },
                {
                    name: "Skills",
                },
                {
                    name: "Goals",
                },
                {
                    name: "Contact",
                }
            ]
        }
    }
}
</script>

<style scoped>
.navBar {
    display: block;
    position: fixed;
    right: 0;
    list-style: none;
    top: 50%;
    padding: 10px;
}
li {
    padding: 50px;
}
</style>
