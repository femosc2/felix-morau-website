<template>
<div>
    <contact-list :contacts="contacts" />
</div>
</template>

<script>
import ContactList from "./ContactList.vue"
export default {
    data: function() {
    return {
        contacts: [{
                name: "moraufelix",
                fa: "fab fa-twitter",
                link: "http://www.twitter.com/moraufelix"
            },
            {
                name: "FeMoSC2",
                fa: "fab fa-github",
                link: "http://www.github.com/femosc2"
            },
            {
                name: "moraufelix",
                fa: "fab fa-instagram",
                link: "http://www.instagram.com/moraufelix"
            },
            {
                name: "felixmorau@gmail.com",
                fa: "far fa-envelope",
                link: null,
            },
            {
                name: "Felix Morau",
                fa: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/felix-morau-0193a2163/"
            }
        ],
    }
    },
    methods: {

    },
    components: {
        ContactList
    }
}
</script>

<style>

</style>
