<template>
    <div>
        <contact-email />
    </div>
</template>

<script>
import ContactEmail from "./ContactEmail"
export default {
    data() {
        return {
        }
    },
    components: {
        ContactEmail
    }
    
}
</script>

<style lang="scss" scoped>
.revealerWhite, .revealerBlue, .revealerPink {
  position: relative;
  overflow: hidden;
  text-align: center;
  
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
</style>
