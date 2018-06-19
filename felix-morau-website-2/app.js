new Vue({
    el: "#app",
    data: {
        currentH1: "Felix Morau",
        currentH3: "Education",
        currentActive: "about",
        mainContent: "I went to school lol",
        projects: [
            {name: "Personal Website", github: "https://github.com/femosc2/felix-morau-website", description: "A personal website made with Vue", image: "images/background.jpg", language: "Vue.js"},
            {name: "Vue Bloodborne", github: "https://github.com/femosc2/vue-bloodborne", description: "An inventory management game made with Vue", image: "images/bloodborne.jpg", language: "Vue.js"}
        ]
    },

    methods: {
        about() {
            this.currentH1 = "Felix Morau";
            document.querySelector(".about").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "about";
        },
        myProjects() {
            this.currentH1 = "My Projects";
            document.querySelector(".myProjects").classList.add("active");
            document.querySelector(".about").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "myProjects";
        },
        contact() {
            this.currentH1 = "Contact";
            document.querySelector(".contact").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".about").classList.remove("active");
            this.currentActive = "contact";
        },
}

});