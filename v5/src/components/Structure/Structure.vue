<template>
    <div>
        <div class="structure"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentScroll: 0,
        }
    },
    methods: {
        handleScroll() {
            const hardPink = "#E91E63";
            const hardPurple = "#673AB7";
            const hardPurpleDark = "#320b86";

            const softPink = "#f48fb1";
            const softPurple = "#ce93d8";
            const cyan =  "#4dd0e1";
            this.currentScroll = window.scrollY; // Checks what the current scroll is.
            const h = document.documentElement, 

          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      
      if (percent <= 10) {
          this.changeBackground(softPink)
        } else if (percent > 10 && percent <= 25) {
            this.changeBackground(hardPurpleDark)
        } else if (percent > 18 && percent <= 66) {
        } else if (percent > 66 && percent <= 87) {
        }
        },
        changeBackground(color) {
            document.querySelector(".structure").style.backgroundColor = color
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
    }
    
}
</script>

<style lang="scss" scoped>
@import "../../sass/Variables.scss";
.structure {
    background-color: $softPink;
    min-height: 100%;
    width: 100%;
    z-index: -100;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    transition: 1s;
}

</style>


