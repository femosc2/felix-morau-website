<template>
<div class="outerDiv">
<div class="innerDiv">
        <h1>Felix Morau</h1>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped>

.innerDiv {
  background: #6dff77;
  background-image: url("https://images.alphacoders.com/964/thumb-1920-964422.jpg");
  height: 1000px;
  -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0 100%);
}
h1 {
  margin: 0;
}

.outerDiv {
    background: -webkit-linear-gradient(to bottom, #6dff77, #ec2f4b);
  background: linear-gradient(to bottom, #6dff77, #ec2f4b);
}
</style>