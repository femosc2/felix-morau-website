<template>
    <div>
        <h3 class="revealerOrange UX"><span class="headerSpan ">User Experience Design</span></h3>
        <div class="revealerWhite">
            <p>
                As a student at the Information Architecture at Malmö University a lot of the courses we take are focused on UX-design. During my soon two years
                have I learned about UX-design, Information Design, Interaction Design and Information Architecture.
            </p>  
        </div>
        
        <h3 class="revealerYellow IA"><span class="headerSpan">Information Architecture</span></h3>
        <div class="revealerWhite">
            <p>
                I have studied a combined 15hp of Information Architecture where we have been working mostly project based in designing different exhibitions, apps, products
                with a focus on accessability and user-friendly interfaces.
            </p>  
        </div>  
        
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

h3, h2 {
    text-align: center;
}

.IA {
    color: #fdc01a;
}

.UX {
    color: #F56B5E;
}

p {
    width: 80%;
    margin: 0 auto;
    animation: fadeIn 1s 1;
    font-size: 20px;
}

.revealerGrey, .revealerBlue, .revealerPink, .revealerWhite, .revealerGreen, .revealerYellow, .revealerOrange {
  position: relative;
  overflow: hidden;
  
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 5000px;
    height: 100%;
    background: #fff;
    transform: translateX(-100%);
    animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;
    animation-fill-mode: both;
  }
}

.revealerYellow {
    &::after {
        background: #fdc01a;
    }
}

.revealerOrange {
    &::after {
        background: #F56B5E;
    }
}

.headerSpan {
    animation: fadeIn 1s 1;
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
  99% {
      opacity: 1
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@media only screen and (max-width: 1000px) {
    p {
        width: 100%;
        font-size: 15px;
        text-align: center;
    }

}
</style>
