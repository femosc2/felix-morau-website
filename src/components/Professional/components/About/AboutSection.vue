<template>
    <div>
        <section class="aboutContainer">
            <section class="revealerPink">
                <h3>Hello! My name is <span style="color: #ed5181;">Felix Morau</span> and I am a <span class="rotatingWords"> {{ spanWords }}</span>
                </h3>
            </section>
            <section class="revealerWhite">
                <h2 class="quote">"Developer and Designer"</h2>
            </section>
            <section class="revealerWhite">
            <p>
            I am a 23 year old student who is currently a second year student at the Information Architecture programme at <span class="boldSpan">Malmö University</span> who has a passion for webdevelopment.
            I was born in <span class="boldSpan">Helsingborg</span> and moved to Malmö in the fall of 2017 to pursue a bachelors degree in Computer Science.
            Before moving to Malmö I lived in <span class="boldSpan">Växjö</span> where I studied marketing at <span class="boldSpan">Linnaeus University</span>
            I started coding in 2017 by learning HTML and CSS, by the end of 2017 I had good skills in HTML, CSS and Python. Through all of 2018 I taught myself JavaScript with a focus on Vue and React.
            Now in 2019 my focus is becoming a better full-stack programmer by building apps with powerful backends coupled with user-friendly front-ends. My goal this year is to produce a full-fledged application released on the Web, Android and Iphone.
            I'm currently interested in learning React Native, Go and Rust.
            </p> 
            </section>

            <section class="revealerBlue">
                <h2 class="quote">Design + Code = <i class="far fa-grin-stars" style="color: #009fff;"></i> </h2>
            </section>
            
            <section class="revealerWhite">
            <p>
                I enjoy being able to be 100% creative and realising an idea from conception to completion through programming and designing.
                I truly believe that no task, idea or assignment is to large or complicated and that everything is able to be solved through programming.
            </p>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            spanWords: "Web Developer"
        }
    },
    methods: {
        generateRotatingWords() {
            let adjectives = ["curious", "creative", "dedicated"]
            let nouns = ["student", "web developer", "web designer", "JavaScript developer"]
            let spanArray = []

            // for (let i = 0; i < 4; i++) {
            //     spanArray.push(adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)]) 
            // }

            return adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)]
        },
        setRotatingWords() {
            setInterval(() => {
                this.spanWords = this.generateRotatingWords()
            }, 2000)
            
        }
    },
    created() {
        // this.setRotatingWords()
    }
};
</script>

<style lang="scss" scoped>
p {
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
    font-size: 20px;
    text-align: center;
    animation: fadeIn 1s 1;
    text-align: left;
}

section {
    margin-top: 1%;
    margin-bottom: 1%;
}

h3 {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
    color: white;
    animation: fadeIn 1s 1;
}

.boldSpan {
    font-weight: bold;
}

.rotatingWords {
    color: #ed5181;
    animation: slideInFromTop 1s 1;
    animation-fill-mode: forwards;
}

.quote {
    text-align: center;
    margin: 0 auto;
    width: 40%;
    font-size: 30px;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    animation: fadeIn 1s 1;
}
.revealerWhite, .revealerBlue, .revealerPink {
  position: relative;
  overflow: hidden;
  
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateX(-100%);
    animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;
    animation-fill-mode: both;
  }
}

.revealerBlue {
  &::after {
    background: #009fff;
  }
}

.revealerPink {
  &::after {
    background: #ed5181;
  }
}



@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  70% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInFromTop {
    0% {
        transform: translateY(100%)
    }
    100% {
        transform: translateY(0%)
    }
}

@keyframes secondaryImageOverlayIn {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes secondaryImageOverlayOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@media only screen and (max-width: 1000px) {
    p {
        width: 100%;
        font-size: 15px;
        text-align: center;
    }
    .quote {
        font-size: 20px !important;
        width: 100%;
        margin: 0 auto;
    }

}



</style>
