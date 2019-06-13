<template>
    <div>
        <p class="sideBarButton"><i @click="showMenu" class="fas fa-bars"></i></p>
        <div v-if="isMenuShowing" class="overlay" @click="closeMenu"></div>
        <div class="sideBar">
        <h2>Felix</h2>
        <h2>Morau</h2>
        <div class="navDiv">
            <p><i  :class="{ activeAbout: currentSection === 'about' }" class="far fa-address-card navIcon"></i></p>
            <p><i :class="{ activeSkills: currentSection === 'skills' }" class="far fa-folder-open navIcon"></i></p> 
        </div>
        <div class="contactDiv">
            <ul class="contactList" v-for="(contact, index) in contacts" :key=index>
            <a class="contactLink" v-bind:href="contact.link">
                <li><i class="contactIcon" :class="contact.fa"></i></li>
            </a>
        </ul>
        </div>   

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
      ],
      isMenuShowing: false
    };
  },
  methods: {
      showMenu() {
          this.isMenuShowing = true;
          document.querySelector(".sideBar").style.display = "block";
          document.querySelector(".sideBar").classList.remove("sideBarAnimOut")
          document.querySelector(".sideBar").classList.add("sideBarAnim")
      },
      closeMenu() {
          this.isMenuShowing = false;
          document.querySelector(".sideBar").classList.remove("sideBarAnim")
          document.querySelector(".sideBar").classList.add("sideBarAnimOut")
        document.querySelector(".sideBar").style.display = "none";
      }
  },
  props: ["currentSection"]

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
  z-index: 12000;
  color: #fff;
}

.sideBarAnim {
    animation: slideInRight 1s 1;
  animation-fill-mode: forwards;
}

.sideBarAnimOut {
    animation: slideOutRight 1s 1;
}

.overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    z-index: 11999;
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
    transition: 1s;

    &:visited {
        color: #fff;
    }

    &:hover {
        text-shadow: 0px 0px 10px #fff;
    }
}

.sideBarButton {
    display: none;
    z-index: 12000;
}

.contactDiv {
    padding-top: 15vh;
}

.activeAbout {
    color: $softPurple !important;
    transition: 1s;
    text-shadow: 0px 0px 10px $softPurple;
}

.activeSkills {
    color: $hardPink !important;
    transition: 1s;
    text-shadow: 0px 0px 10px $hardPink;
}

.navDiv {
    padding-top: 35vh;
}

.navIcon {
    font-size: 30px;
    color: #fff;
    transition: 1s;
}
ul {
    padding: 0;
    list-style: none;
}

@keyframes slideInRight {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-80px);
    }
}

@keyframes slideOutRight {
    0% {
        transform: translateX(-80px);
    }
    100% {
        transform: translateX(-0px);
    }
}

@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)  {
    section {
        height: 100vh;
        overflow: hidden;
    }
    .sideBarButton {
    position: fixed;
    right: 0;
    color: #fff;
    display: block;
}

.sideBar {
    right: -80px;
}
}

@media only screen and (max-width:750px) {
    section {
        height: 100vh;
        overflow: hidden;
    }
    .sideBarButton {
    position: fixed;
    right: 0;
    color: #fff;
    display: block;
}

.sideBar {
    right: -80px;
}
}
</style>

