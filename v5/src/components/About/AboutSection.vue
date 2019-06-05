<template>
    <section class="aboutSection">
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
            window.scrollBy(0, window.innerHeight - window.scrollY);
        }
    },
    components: {
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
    font-size: 30px;
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
    font-size: 200px;
}

.lastName {
    font-size: 225px;
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
    max-width: 800px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
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



</style>


