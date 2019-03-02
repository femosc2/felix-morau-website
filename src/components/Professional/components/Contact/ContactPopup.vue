<template>
    <div>
        <h2>{{ popUpText }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popUpText: ""
        }
    },
    props: ["popUpText"]
}
</script>

<style scoped>
div {
    position: fixed;
    z-index: 2000;
    top: 50%;
    background-color: rgba(255,255,255, 0.9);
    color: #070707;
    padding: 10px;
    border: 1px solid #070707;
    animation: bloop 3s 1;
    overflow: hidden;
    text-align: center;
    animation-fill-mode: forwards;
    height: 75px;
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}
h2 {
    white-space: nowrap;
    text-align: center;
}
p {
    white-space: nowrap;
    text-align: center;
}

h2 {
    animation: fadeIn 3s 1;
}
@keyframes bloop {
    0% {
       width: 75px;
       height: 75px;
       border-radius: 50%;
       left: 50%;
       top: 0%;
        
    }
    20% {
        top: 50%;
        width: 75px;
        height: 75px;
        left: 50%;
        border-radius: 50%;
    }
    80% {
        opacity: 1;
    }
    100% {
        width: 100%;
        border-radius: 0px;
        left: 0%;
        opacity: 0;
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

