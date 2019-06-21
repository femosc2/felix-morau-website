<template>
    <section class="aboutSection" v-hammer:swipe.up="scrollDown">
        <h2 class="name firstName revealerAbout"><span>Fe</span>lix</h2>
        <h2 class="name lastName revealerAbout"><span>Mo</span>rau</h2>
        <h3 class="nonName revealerAbout">Software Developer Trainee @ HIQ</h3>
        <h3 class="nonName revealerAbout">Computer Science Student @ Malmö University</h3>
        <h3 class="nonName revealerAbout">23 Years old</h3>
        <h3 class="nonName revealerAbout">Malmö, Sweden</h3>
        <img src="./femocutout.png" class="profilePicture" alt="A picture of the creator, Felix Morau"> 
    </section>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        scrollDown() {
            console.log(window.innerHeight)
            console.log("down")
            window.scrollBy(0, window.innerHeight);
        },
        handleScroll() {
            if (window.scrollY >= 0) {
                this.scrollDown()
                this.$emit("scrollDetected", "skills")
            } else {
                window.scrollTo(0,0)
                this.$emit("scrollDetected", "about")
            }
        }
    },
    components: {
    },
    created() {
        // window.addEventListener('wheel', this.handleScroll);
        // window.addEventListener("touchend", this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";
h2, h3 {
    padding: 0;
    margin: 0;
    text-align: left;
    padding-left: 1%;
    max-width: 100%;
}

.nonName {
    max-width: 55%;
}
h3 {
    font-size: 2em
}
@import "../../sass/Variables.scss";

.logos {
  width: 25%;
}

.skillsText {
  float: right;
  margin-right: 25%;
  max-width: 50%;
  text-align: left;
  font-size: 25px;
}

.skillsH3 {
  text-align: center;
}

.aboutSection {
  position: absolute;
  z-index: 5001;
  transition: 1s;
  width: 100%;
  height: 100%;
  // background: $softPink;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #0770AB, $softPink);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #0770AB, $softPink); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




  color: $hardPurpleDark;
  height: 100vh;
  overflow: hidden;
}

.active {
  transform: translateX(0%);
}

@media only screen and (max-width: 1000px) {
  .projectCard {
    width: 50%;
    font-size: 15px;
  }
  .innerDiv {
    padding-top: 0;
    padding-bottom: 0;
  }
  .projectName {
    font-size: 20px;
  }
  .skillsText {
    max-width: 100%;
    text-align: center;
    margin: 0;
    font-size: 10px;
  }
  .hiddenOnResponsive {
  }
}


.name {
    margin: 0;
    color: $hardPurpleDark;
    max-width: 60%;
}

.firstName {
    font-size: 14em;
}

.lastName {
    font-size: 16em;
    margin-top: -70px;
}

span {
    color: $hardPurple;
}

#downArrow {
    margin-top: 5%;
    font-size: 50px;
    animation: arrowAnimation 2s infinite ease-in-out;

    &:hover {
        color: black;
    }
}

.profilePicture {
    float: right;
    margin: 0;
    max-width: 38vw;
    height: auto;
    position: absolute;
    top: 0;
    right: 5%;
    pointer-events: none;
    animation: profilePictureAnimation 2s 1;
    animation-fill-mode: forwards;
}

@keyframes downArrowAnimation {
    0% {
        transform: scale(1.0)
    }
    50% {
        transform: scale(1.4)
    }
    100% {
        transform: scale(1.0)
    }
}

@keyframes profilePictureAnimation {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);    
    }
    
}

@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)  {
    section {
        height: 100vh;
        overflow: hidden;
    }
    .firstName {
    font-size: 10em;
    padding-top: 100px;
    } 

    .lastName {
        font-size: 12em;
        margin-top: -30px;
    }
    h3 {
        font-size: 2em;
        &:first-of-type {
            padding-top: 150px;
        }
    }
    .profilePicture {
    max-width: 40%;
    position: absolute;
    top: 0;
    margin: 0 auto;
}
}

@media only screen and (max-width:750px) {
    .aboutSection {
        height: 100vh;
        overflow: hidden;
    }
    .firstName {
    font-size: 3em;
    padding-top: 50px;
    } 

    .lastName {
        font-size: 4em;
        margin-top: -20px;
    }
    h3 {
        font-size: 0.8em;
        &:first-of-type {
            padding-top: 20px;
        }
    }


    .profilePicture {
    max-width: 40%;
    position: absolute;
    top: 0;
    margin: 0 auto;
}
}



</style>


