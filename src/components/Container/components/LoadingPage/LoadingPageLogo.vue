<template>
    <div id="loadingPage">
        <div class="revealerBox">
            <ul class="circleContainer">
                <div class="circle" v-for="(circle,index) in 4" :key=index></div>
            </ul>
        </div>
        <div class="revealerBox"></div>
        <div class="revealerBox">
            <p class="counter">{{ i }}%</p>
        </div>
        <div class="revealerBox"></div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0
    };
  },
  methods: {
    counter() {
      setInterval(() => {
        if (this.i < 100) {
          this.i++;
        }
      }, 20);
    },
  },
  created() {
    this.counter();
    this.destroyLoaders();
  }
};
</script>

<style scoped>
.circle {
  height: 25px;
  width: 25px;
  background: black;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  animation: enlarge 2s infinite;
  animation-timing-function: ease-in-out;
}

.circleContainer {
  margin: 0 auto;
  margin-top: 25%;
  width: 100%;
  margin-right: 0;
  padding: 0;
  position: fixed;
  animation: fadeOut 2s 1;
  animation-fill-mode: forwards;
}

.circle:first-child {
  background: #f56b5e;
}

.circle:nth-child(2) {
  background: #009fff;
  animation-delay: 150ms;
}

.circle:nth-child(3) {
  background: #ed5181;
  animation-delay: 300ms;
}

.circle:last-child {
  background: #fdc01a;
  animation-delay: 450ms;
}

.counter {
  color: white;
  text-align: center;
  margin: 0 auto;
  animation: fadeOut 2.1s 1;
  animation-fill-mode: forwards;
  font-size: 150px;
}

.revealerBox {
  width: 100%;
  height: 25%;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  background-color: #2c3e50;
  z-index: 9000;
}

.revealerBox:first-child {
  animation: slideOutRight 1s 1;
  z-index: 9001;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.revealerBox:nth-child(2) {
  animation: slideOutLeft 1s 1;
  top: 25%;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.revealerBox:nth-child(3) {
  animation: slideOutRight 1s 1;
  top: 50%;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.revealerBox:last-child {
  animation: slideOutLeft 1s 1;
  top: 75%;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes enlarge {
  0% {
    transform: scale(1);
  }
  25% {
    transform: translateY(-100px);
  }
  50% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slideOutLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
