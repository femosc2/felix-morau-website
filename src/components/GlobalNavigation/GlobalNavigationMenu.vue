<template>
    <div>
        <!-- <ul>
            <li @click="showPage(page.name)" v-for="(page, index) in pages" :key=index>
                <i :class="page.icon">{{ page.name }}</i>
            </li>
        </ul> -->
        <ul>
            <router-link v-for="(page, index) in pages" :key=index :to="page.link" tag="li" active-class="active" exact class="navListItem"><a class="navLink"><i :class="page.icon"></i> {{page.name}}</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    name: "Professional",
                    link: "professional",
                    icon: "fas fa-user-tie"
                },
                {
                    name: "Personal",
                    link: "personal",
                    icon: "fas fa-user"
                },
                {
                    name: "CV",
                    link: "cv",
                    icon: "fas fa-user-graduate"
                },
            ],
        }
    },
    methods: {
        showPage(page) {
            this.$emit("gNavClicked", page)
        }
    }
}
</script>

<style scoped>
</style>
