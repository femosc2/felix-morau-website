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
  background-image: url("https://i.imgur.com/5He4smd.jpg");
  background-position: center;
  height: 75vh;
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 90%, 0 100%); */
}
h1 {
  margin: 0;
  padding-top: 25vh;
  font-size: 10vw;
}

@media only screen and (max-width: 1000px) {
    .innerDiv {
        height: 50vh;
    }

}
</style>