<template>
    <div>
        <section class="skillContainer">
            <section class="codeWindow" v-for="(prompt, index) in prompts" :key=index in prompts>
                <div class="greyBar">
                    <div class="greyBarButtons">
                        <div class="exitButton"></div>
                        <div class="minimizeButton"></div>
                        <div class="maximizeButton"></div>  
                    </div>
                    <span class="greyBarText"> {{index + 1}}. {{ prompt.language }}</span>
                </div>
                <div class="textWindow">
                    <div class="sideBar"></div>
                    <p class="standardConsoleText">
                        Last Login: {{ currentDay }} {{ currentMonth}} {{ currentDate }} {{ currentTime }} on console
                        <br>
                        felixmorau.se:~ user$ {{ prompt.userInput }}
                        <br>
                        {{ prompt.terminalCommand }}
                        <br>
                        {{ prompt.promptStyle }} {{ prompt.print}}
                        <br>
                        {{ prompt.terminalOutput}}
                        <br>
                        <span v-for="(variable, index) in prompt.variables" :key=index > {{ prompt.promptStyle }} {{ variable}} <br> </span>
                    </p>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: "",
            currentDay: "",
            currentMonth: "",
            currentTime: "",
            currentDate: "",
            prompts: [
                {
                    language: "Python",
                    userInput: "python3",
                    terminalCommand: "Python 3.6.5 (default, Apr 25 2018, 14:23:58) \n [GCC 4.2.1 Compatible Apple LLVM 9.1.0 (clang-902.0.39.1)] on darwin \n Type 'help', 'copyright', 'credits' or 'license' for more information.",
                    print: "print('Hello World!')",
                    terminalOutput: "Hello World!",
                    promptStyle: ">>> ",
                    variables: ["familiarity = 50"],
                },
                {
                    language: "JavaScript",
                    userInput: "node",
                    terminalCommand: null,
                    print: "console.log('Hello World')",
                    terminalOutput: "Hello World!",
                    variables: ["let familiarity = 60", "const Vue = true", "const React = true", "const Node = true"],
                    promptStyle: "> ",
                }
            ]
        }
    },
    methods: {
        setTime() {
            // Method for showing a clock
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let today = new Date() // sets the current date
            let hour = today.getHours() // sets the current hour
            let minute = today.getMinutes() // sets the current minute
            let second = today.getSeconds() // sets the current second
            minute = this.addZeroes(minute);
            second = this.addZeroes(second);
            this.currentTime = hour + ":" + minute + ":" + second // formats the time
            this.currentDay = days[today.getDay()] // sets the current day
            this.currentMonth = months[today.getMonth()] // sets the current momth
            this.currentDate = today.getDate() // sets the current date
        },
        addZeroes(i) {
            // add zero in front of numbers < 10
            if (i < 10) {
                i = "0" + i
            }
            return i;
        },
    },
    created() {
        this.setTime()
    }
}
</script>

<style lang="scss" scoped>
$space-grey: #303030;
$border-grey: #444444;

.skillContainer {
    z-index: 1000;
    height: 1000px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 100%;
}
p {
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
    font-size: 20px;
    text-align: center;
    animation: fadeIn 0.75s 1;
    text-align: left;
}
.codeWindow {
    width: 70%;
    background-color: #000;
    height: 300px;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

.greyBar {
    height: 30px;
    background-color: $space-grey;
    border-radius: 10px 10px 0px 0px;
    border: 0.5px solid $border-grey;
    border-left: none;
    border-right: none;
    text-align: center;
}

.greyBarText {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-size: 15px;
}

.greyBarButtons {
    text-align: left;
    position: absolute;
}

.exitButton, .minimizeButton, .maximizeButton {
    background-color: white;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: inline-block;
    margin-top: 8px;
    margin-left: 10px;
    left: 0;
}
.exitButton {
    background-color: #db0000;
}
.minimizeButton {
    background-color: #ffff23;
}
.maximizeButton {
    background-color: #00e00e;
}

.textWindow {
    border: 0.5px solid $border-grey;
    border-top: none;
    background-color: #000;
    min-height: 270px;
}

.sideBar {
    float: right;
    min-height: inherit;
    background-color: #232323;
    width: 10px;
    height: 270px;
    overflow: hidden;
    border-left: 0.5px solid $border-grey;
    border-bottom: 0.5px solid $border-grey;
}

.standardConsoleText {
    margin: 0;
    padding: 0;
    font-family: monospace;
    font-size: 15px;
}
</style>

