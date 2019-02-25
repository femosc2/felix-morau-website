<template>
    <div>
        <h2> About </h2>
        <section>
                    <section>
                    <div class="black" style="top: 200px"></div>
                    <p>
                      Hello!
                    My name is Felix Morau and I'm a second year Information Architecture student at Malmö University.  
                    </p>
                         
                    </section>
                    
                    <br>
                    <section>
                    <div class="blackReverse" style="top: 300px"></div>
                    <p>
                      I built this website to function as a showcase of my projects, both school projects and individual projects can be found by clicking the Projects tab.  
                    </p>
                    </section>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
    font-size: 20px;
    text-align: center;
    animation: fadeIn 1.5s 1;
}

.black {
    height: 65px;
    width: 200%;
    background-color: black;
    animation: blackSlide 2s 1;
    animation-fill-mode: forwards;
    /* animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1); */
    animation-timing-function: linear;
    position: fixed;
}

.blackReverse {
    height: 65px;
    width: 200%;
    background-color: black;
    animation: blackSlideReverse 2s 1;
    animation-fill-mode: forwards;
    /* animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1); */
    animation-timing-function: linear;
    position: fixed;
}

@keyframes blackSlide {
    0% {
        transform: translateX(0%)
    }
    50% {
        transform: translateX(-100%);
    }
    99% {
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}

@keyframes blackSlideReverse {
    0% {
        transform: translateX(0%)
    }
    50% {
        transform: translateX(100%);
    }
    99% {
        opacity: 1;
    }
    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media only screen and (max-width: 1000px) {
    p {
        width: 100%;
    }

}



</style>
