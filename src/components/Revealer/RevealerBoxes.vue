<template>
<div>
    <div class="box leftBox one"></div>
    <div class="box rightBox two"></div>
    <div class="box leftBox three"></div>
    <div class="box rightBox four"></div>
</div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    methods: {
        destroyBoxes() {
            setTimeout(() => {
                this.$destroy(); 
            }, 2*1000)
        }
    },
    created() {
        this.destroyBoxes()
    }
}
</script>

<style scoped> 
.box {
    width: 100%;
    height: 25%;
    position: fixed;
    z-index: 90000000
}

.rightBox {
    animation: slideOutRight 1s 1 forwards;
    animation-timing-function: cubic-bezier(1,.01,.86,.96)
}

.leftBox {
    animation: slideOutLeft 1s 1 forwards;
    animation-timing-function: cubic-bezier(1,.01,.86,.96)
}

.one {
    background-color: #f56b5e;
    top: 0;
}

.two {
    background-color: #009fff;
    top: 25%;
}

.three {
    background-color: #ed5181;
    top: 50%;
}

.four {
    background-color: #fdc01a;
    top: 75%;
}

@keyframes slideOutRight {
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(100%)
    }
}

@keyframes slideOutLeft {
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(-100%)
    }
}
</style>
