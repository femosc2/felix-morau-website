<template>
    <div>
        <ul class="navBarPro">
            <li class="navItemPro" v-for="(section,index) in sections" :key=index> <p class="liText">{{ section.name }}</p> </li>
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
.navBarPro {
    display: inline-block;
    position: fixed;
    list-style: none;
    z-index: 1000;
    right: 0%;
    background-color: grey;
}
.navItemPro {
    font-size: 25px;
    margin-top: 35px;
}
.liText {
    text-align: center;
    margin: 0 auto;
    padding-top: 30%;
}
</style>
