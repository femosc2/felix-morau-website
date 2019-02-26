<template>
    <div>
        <section class="aboutContainer">
            <section class="revealerPink">
                <h3>Hello! My name is <span style="color: #ed5181;">Felix Morau</span> and I am a
                    <div class="slidingVertical">
                        <span>{{ spanWords[0] }}</span>
                        <span>{{ spanWords[1] }}</span>
                        <span>{{ spanWords[2] }}</span>
                        <span>{{ spanWords[3] }}</span>
                    </div>
                </h3>
            </section>
            <section>
                <h2 class="quote revealer">"Developer, Designer, Degenerate"</h2>
            </section>
            <section class="revealer">
            <p>
            I am a 23 year old student who is currently a second year student at the Information Architecture programme at <span style="font-weight: bold;">Malmö University</span> who has a passion for webdevelopment.
            I was born in <span style="font-weight: bold;">Helsingborg</span> and moved to Malmö in the fall of 2017 to pursue a bachelors degree in Computer Science.
            Before moving to Malmö I lived in <span style="font-weight: bold;">Växjö</span> where I studied marketing at <span style="font-weight: bold;">Linnaeus University</span>
            I started coding in 2017 by learning HTML and CSS, by the end of 2017 I had good skills in HTML, CSS and Python. Through all of 2018 I taught myself JavaScript with a focus on Vue and React.
            Now in 2019 my focus is becoming a better full-stack programmer by building apps with powerful backends coupled with user-friendly front-ends. My goal this year is to produce a full-fledged application released on the Web, Android and Iphone.
            I'm currently interested in learning React Native, Go and Rust.
            </p> 
            </section>

            <section class="revealerBlue" style="margin-top: 50px; margin-bottom: 50px;">
                <h2 class="quote">Design + Code = <i class="far fa-grin-stars" style="color: #009fff;"></i> </h2>
            </section>
            
            <section>
            <div class="black" style="top: 550px; height: 100px;"></div>
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
            spanWords: []
        }
    },
    methods: {
        generateRotatingWords() {
            let adjectives = ["curious", "creative", "dedicated"]
            let nouns = ["student", "web developer", "web designer", "JavaScript developer"]
            let spanArray = []

            for (let i = 0; i < 4; i++) {
                spanArray.push(adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)]) 
            }

            return spanArray
        },
        setRotatingWords() {
            this.spanWords = this.generateRotatingWords()
        }
    },
    created() {
        this.setRotatingWords()
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
    animation: fadeIn 0.75s 1;
    text-align: left;
}

h3 {
    text-align: left;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
    color: white;
    animation: fadeIn 0.75s 1;
}

.quote {
    text-align: center;
    margin: 0 auto;
    width: 40%;
    font-size: 30px;
    font-family: 'EB Garamond', serif;
    font-style: italic;
}
.revealer {
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
  position: relative;
  overflow: hidden;
  
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #009fff;
    transform: translateX(-100%);
    animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;
    animation-fill-mode: both;
  }
}

.revealerPink {
  position: relative;
  overflow: hidden;
  
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ed5181;
    transform: translateX(-100%);
    animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;
    animation-fill-mode: both;
  }
}



@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

.slidingVertical{
	display: inline;
	text-indent: 8px;
}
.slidingVertical span{
	animation: topToBottom 10s linear infinite 0s;
	-ms-animation: topToBottom 10s linear infinite 0s;
	-webkit-animation: topToBottom 10s linear infinite 0s;
	color: #ed5181;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.slidingVertical span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}

/*topToBottom Animation*/
@keyframes topToBottom{
	0%{
         opacity: 0;
        }
	5% {
        opacity: 0; -moz-transform: translateY(-50px); 
        }
	10% {
         opacity: 1; -moz-transform: translateY(0px);
        }
	25% { opacity: 1; -moz-transform: translateY(0px);
        }
	30% {
        opacity: 0; -moz-transform: translateY(50px);
        }
	80% {
        opacity: 0;
        }
	100% {
        opacity: 0;
        }
}

@media only screen and (max-width: 1000px) {
    p {
        width: 100%;
    }

}



</style>
