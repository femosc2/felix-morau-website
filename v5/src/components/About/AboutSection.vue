<template>
    <section class="aboutSection" v-hammer:swipe.down="scrollDown">
        <h2 class="name firstName"><span>Fe</span>lix</h2>
        <h2 class="name lastName"><span>Mo</span>rau</h2>
        <h3>Software Developer Trainee @ HIQ</h3>
        <h3>Computer Science Student @ Malmö University</h3>
        <h3>23 Years old</h3>
        <h3>Malmö, Sweden</h3>
        <img src="./femocutout.png" class="profilePicture" alt=""> 
        <i @click="scrollDown" id="downArrow" class="fas fa-chevron-down"></i>  
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
            console.log(window.scrollY)
            console.log("down")
            window.scrollBy(0, window.innerHeight + window.scrollY);
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
        window.addEventListener('wheel', this.handleScroll);
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
}
h3 {
    font-size: 2em
}
section {
    padding: 0;
    margin: 0;
    color: $hardPurpleDark;
    height: 100vh;
}

.name {
    margin: 0 auto;
    color: $hardPurpleDark;
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
    animation: downArrowAnimation 2s infinite ease-in-out;

    &:hover {
        color: black;
    }
}

.profilePicture {
    float: right;
    margin: 0;
    max-width: 40vw;
    height: auto;
    position: absolute;
    top: 0;
    right: 5%;
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
    section {
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


