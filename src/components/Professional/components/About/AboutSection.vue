<template>
    <div>
        <section>
            <section>
                <div class="black"></div>
                <h3>Hello! My name is Felix Morau</h3>
            </section>
            <section>
                <div class="black"></div>
                <h2>"Developer, Designer, Degenerate"</h2>
            </section>
            <section>
            <div class="black" style="top: 200px"></div>
            <p>
            I am an webdeveloper in development. I'm currently a second year student at the Information Architecture in programme who has a passion for webdevelopment.
            I started coding in 2017 by learning HTML and CSS, by the end of 2017 I had good skills in HTML, CSS and Python. Through all of 2018 I taught myself JavaScript with a focus on Vue and React.
            Now in 2019 my focus is on becoming a better full-stack programmer by building backends coupled with front-ends. My goal this year is to produce a full-fledged application released on the Web, Android and Iphone.
            I'm currently interested in learning React Native, Go and Rust.

            </p>
                    
            </section>
            
            <br>
            <section>
            <div class="blackReverse" style="top: 295px"></div>
            <p>
                I enjoy being able to be 100% creative and realising an idea from conception until completion through programming and designing.
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
    text-align: left;
}

.black {
    height: 70px;
    width: 200%;
    background-color: #fff;
    animation: blackSlide 2s 1;
    animation-fill-mode: forwards;
    /* animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1); */
    animation-timing-function: linear;
    position: fixed;
}

.blackReverse {
    height: 65px;
    width: 200%;
    background-color: #fff;
    animation: blackSlideReverse 2s 1;
    animation-fill-mode: forwards;
    /* animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1); */
    animation-timing-function: linear;
    position: fixed;
}

h3 {
    text-align: left;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
    color: #ed5181;
}

h2 {
    text-align: center;
    margin: 0 auto;
    width: 80%;
    font-size: 30px;
    font-family: 'EB Garamond', serif;
    font-style: italic;
}



@keyframes blackSlide {
    0% {
        transform: translateX(0%)
    }
    50% {
        transform: translateX(-100%);
    }
    75% {
        transform: translateX(0%);
    }
    99% {
        opacity: 1
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
