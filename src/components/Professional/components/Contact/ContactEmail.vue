<template>
    <div class="revealerGrey">
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
            <textarea class="textMessage" type="text" v-model="message" />   
        </p>
        <button @click="postMessage">SUBMIT</button>
        <div v-if="messageSent">
            <contact-popup :popUpText="popUpText" />
        </div>
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
            messageSent: false,
            messageTimeOut: false,
            popUpText: "",
        }
    },
    methods: {
        postMessage() {
            if (this.messageTimeOut === false) {
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
                this.popUpText = "Thanks for your message!"
                this.messageSent = true;
                this.message = null;
                this.messageTimeOut = true
                setTimeout(() => {
                    this.messageSent = true
                }, 3000);
                setTimeout(() => {
                    this.messageTimeOut = false
                }, 10000)    
        } else {
            this.popUpText = "You've already sent a message, please wait some time before you send another!"
        }
        }
    },
    components: {
        ContactPopup
    }
    
}
</script>

<style lang="scss" scoped>
$space-grey: #303030;
$border-grey: #444444;
input {
    width: 30%;
    margin: 0 auto;
    border: none;
    padding: 0;
    height: 30px;
    font-family: inherit;
    font-size: 15px;
    background-color: $space-grey;
    color: #fff;
    border: 1px solid $border-grey;
}

p {
    animation: fadeIn 1s 1;
}

div {
    text-align: center;
}

button {
    width: 10%;
    height: 50px;
    border: none;
    background-color: $space-grey;
    color: #fff;
    border: 1px solid $border-grey;
    font-family: inherit;
    font-size: 15px;
    transition: 1s;
}

button:hover {
    color: $space-grey;
    background-color: #fff;
    transition: 1s;
}

.textMessage {
    height: 200px;
    width: 40%;
    font-family: inherit;
    font-size: 15px;
    background-color: $space-grey;
    color: #fff;
    border: 1px solid $border-grey;
}

.revealerWhite, .revealerBlue, .revealerPink, .revealerGrey {
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

.revealerGrey {
    &::after {
        background: $space-grey;
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

@media only screen and (max-width: 1000px) {
    input, .textMessage, button {
        width: 100%

    }
}
</style>
