<template>
    <div>
        <ul class="navBarPro">
            <li class="navItemPro" v-for="(section,index) in sections" :key=index> <p class="liText" :style="{ 'color': section.color}">{{ section.name }}</p> </li>
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
                    color: "#ed5181"
                },
                {
                    name: "Programming",
                    color: "#00e00e"
                },
                {
                    name: "UX",
                    color: "#F56B5E"
                },
                {
                    name: "IA",
                    color: "#fdc01a"
                },
                {
                    name: "Contact",
                },
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
}
.navItemPro {
    font-size: 15px;
    margin-top: 20px;
}
.liText {
    text-align: center;
    margin: 0 auto;
    padding-top: 30%;
}
</style>
