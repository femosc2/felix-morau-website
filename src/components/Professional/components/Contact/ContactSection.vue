<template>
    <div>
      <br>
      <hr>
      <br>
      <p>
        If you have any questions about me, my work or my studies feel free to contact me through either mail or LinkedIn or send me a message through the site.
        I am also open for offers regarding jobs, internships or fun projects!
      </p>
      <ul class="revealerWhite">
        <div class="contactList" v-for="(contact, index) in contacts" :key=index>
         <a class="contactLink" v-bind:href="contact.link">
          <p><i class="contactIcon" :class="contact.fa"></i></p>
        <p class="contactText">{{ contact.name }}</p>
        </a> 
        </div>
        
      </ul>
      <contact-email />
    </div>
</template>

<script>
import ContactEmail from "./ContactEmail"
export default {
    data() {
        return {
          contacts: [
            {
                name: "FeMoSC2",
                fa: "fab fa-github",
                link: "http://www.github.com/femosc2"
            },
            {
                name: "felixmorau@gmail.com",
                fa: "far fa-envelope",
                link: null,
            },
            {
                name: "Felix Morau",
                fa: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/felix-morau-0193a2163/"
            }
        ],
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

p {
  font-size: 20px;
  width: 80%;
  margin: 0 auto;
}

.contactList {
  margin: 0 auto;
  display: inline-block;
  width: 33%;
  margin-left: -3%;
}

.contactIcon {
  font-size: 50px;
  color: #fff;
  transition: 1s;
}

.contactText {
  color: #fff;
  transition: 1s;
  text-align: center;
}

.contactIcon:hover, .contactText:hover {
  color: #00e00e;
}

.contactLink:visited{
  color: #fff;
  transition: 1s;
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
