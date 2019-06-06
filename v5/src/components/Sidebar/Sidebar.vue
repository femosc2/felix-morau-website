<template>
    <div class="sideBar">
        <h2>Felix</h2>
        <h2>Morau</h2>
        <div class="navDiv">
            <p><i class="far fa-address-card navIcon"></i></p>
            <p><i class="far fa-folder-open navIcon"></i></p> 
        </div>
        <div class="contactDiv">
            <ul class="contactList" v-for="(contact, index) in contacts" :key=index>
            <a class="contactLink" v-bind:href="contact.link">
                <li><i class="contactIcon" :class="contact.fa"></i></li>
            </a>
        </ul>
        </div>   

    </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
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
          link: null
        },
        {
          name: "Felix Morau",
          fa: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/felix-morau-0193a2163/"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";
.sideBar {
  position: fixed;
  right: 0;
  height: 100vh;
  width: 80px;
  background-color: $greyDark;
  z-index: 5000;
  color: #fff;
}

h2 {
    font-size: 20px;
}

.logo {
    width: 50px;
    height: 50px;
}

.contactIcon {
    color: #fff;
    padding: 0;
    font-size: 18px;

    &:visited {
        color: #fff;
    }
}

.contactDiv {
    padding-top: 15vh;
}

.navDiv {
    padding-top: 35vh;
}

.navIcon {
    font-size: 30px;
}
ul {
    padding: 0;
    list-style: none;
}
</style>

