<template>
    <div class="indicatorContainer">
        <div class="sideIndicator"><i class="fas fa-fingerprint fingerPrint"></i></div>
        <div class="topIndicator"><i class="fas fa-fingerprint fingerPrint"></i></div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        reRender() {
            this.$forceUpdate()
        }
    },
    props: ["currentSection"],
    created() {
        setInterval(() => {
            this.$forceUpdate()
        }, 3000)
    }
}
</script>

<style lang="scss" scoped>
.sideIndicator {
    background: rgba(255, 255, 255, 1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: fixed;
    z-index: 15000;
    animation: swipeIndicatorSide 2s 1;
    opacity: 0;
}
.topIndicator {
    background: rgba(255, 255, 255, 1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: fixed;
    z-index: 15000;
    animation: swipeIndicatorUp 2s 1;
    opacity: 0;
}
.fingerPrint {
    font-size: 95px;
    margin: 0 auto;
}

@keyframes swipeIndicatorSide {
    0% {
        transform: translateX(1000%);
        opacity: 1;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translateX(0%)
    }
}
@keyframes swipeIndicatorUp {
    0% {
        transform: translateY(1000%);
        opacity: 1;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translateY(0%)
    }
}


</style>

