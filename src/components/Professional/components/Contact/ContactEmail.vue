<template>
    <div class="revealerWhite">
        <p>
            <label for="">Name</label>
            <br>
            <input type="text" id="" v-model="name">   
        </p>
        <p>
            <label for="">Email</label>
            <br>
            <input type="email" v-model="email">   
        </p>
        <p>
            <label for="">Message</label>
            <br>
            <input class="textMessage" type="text" v-model="message">   
        </p>
        <button @click="postMessage">SUBMIT</button>
        <!-- <div v-if="messageSent">
         <contact-popup />   
        </div> -->
        <contact-popup />
        
    </div>
</template>

<script>
import axios from "axios"
import ContactPopup from "./ContactPopup"
export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
            messageSent: false
        }
    },
    methods: {
        postMessage() {
            let messageObject = {
                name: this.name,
                email: this.email,
                message: this.message,
                date: new Date()
            }
            axios
            .post(
              "https://my-website-21d35.firebaseio.com/Messages.json", messageObject
            )
            .then(response => {
              let postArray = [];
              for (let key in response) {
                postArray.push(response[key]);
              }
            });
            this.messageSent = true;
            setTimeout(() => {
                this.messageSent = true
            }, 3000);
        }
    },
    components: {
        ContactPopup
    }
    
}
</script>

<style lang="scss" scoped>
input {
    width: 30%;
    margin: 0 auto;
    border: none;
    padding: 0;
    height: 30px;
}
p {
    animation: fadeIn 1s 1;
}
div {
    text-align: center;
}
.textMessage {
    height: 200px;
    width: 40%;
}
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
