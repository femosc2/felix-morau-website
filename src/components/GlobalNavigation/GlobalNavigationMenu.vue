<template>
    <div>
        <div @click="showNav">
            <button class="globalNavigationButton">
                <span class="menuBar menuBar--1"></span>
                <span class="menuBar menuBar--2"></span>
                <span class="menuBar menuBar--3"></span>
                <span class="menuBar menuBar--4"></span>
            </button>
        </div>
        <div id="globalNavigationMenu" v-if="shownav">
         <ul class="linkUL">
            <div v-for="(page, index) in pages" :key="index" @click="goTo(page.link)">
                <router-link :to="page.link" tag="li" active-class="active" :style="{background: page.color}" exact class="navListItem"><a  :style="{color: page.textColor}" class="navLink"><i @click="goTo(page.link)" class="pageIcon" :style="{color: page.textColor}" :class="page.icon"></i> <p class="pageName">{{page.name}}</p></a></router-link>
            </div>
        </ul>   
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    name: "Professional",
                    link: "professional",
                    icon: "fas fa-user-tie",
                    color: "#fff",
                    textColor: "#000 !important"
                },
                {
                    name: "Personal",
                    link: "personal",
                    icon: "fas fa-user",
                    color: "#F56B5E",
                    textColor: "#fff !important"
                },
            ],
            shownav: false
        }
    },
    methods: {
        showPage(page) {
            this.$emit("gNavClicked", page)
        },
        showNav() {
            if (this.shownav === false) {
                this.shownav = true;
                document.getElementById("globalNavigationMenu").style.width = "100%"  
            } else {
                setTimeout(() => {
                    this.shownav = false;   
                }, 1000);
                document.getElementById("globalNavigationMenu").style.width = "0%";
            } 
        },
        goTo(pageName) {
            window.location.href = "https://www.felixmorau.se/" + pageName
            console.log("hej")
        },
        newPage() {
            this.shownav = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.globalNavigationButton {
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,1.0);
    transition: 1s;
    transform: rotate(45deg);
    left: 10px;
    position: absolute;
    overflow: hidden;
    z-index: 9000;
    padding: 0;
    border: none;
    margin-top: 20px
}


.menuBar {
    position: absolute;
    display: block;
    transform: rotate(315deg);
    height: 3px;
    width: 100px;
    background: black;
    transition: all 2s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    &--1 {
        top: 40%;
        margin-left: -40%;
    }
    &--2 {
        top: 70%;
        margin-left: -40%;
    }
    &--3 {
        top: 100%;
        margin-left: -40%;
    }
    &--4 {
        top: 125%;
        margin-left: -40%;
    }
 }


#globalNavigationMenu {
    width: 100%;
    list-style: none;
    float: left;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    z-index: 8999;
    transition: 1s;
    animation: slideIn 1s 1;
}

.linkUL {
    list-style: none;
    padding: 0;
    margin: 0;
}

.navListItem {
    float: right;
    padding: 0;
    margin: 0;
    overflow: hidden;
    margin-top: 10%;
    display: block;
    width: 100%;
    height: 200px;
    background-color: black;
    font-family: inherit;
    font-size: 50px;
    text-align: center;
}

.pageName {
    margin-top: 1%;
}
.pageIcon {
    font-size: 100px;
    margin-top: 1%;
}

.buttonLine {
    display:block;
    padding: 0;
    margin: 0;
}

.navListItem a:visited {
    color: inherit;
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%)
    }
    100% {
        transform: translateX(0%)
    }
}
</style>
