new Vue({
    el: "#app",
    data: {
        currentH1: "My Projects",
        currentH3: null,
        currentActive: "myProjects",
        mainContent: "I went to school lol",
        javaScriptProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js"},

            {name: "Vue Bloodborne", 
            github: "https://github.com/femosc2/vue-bloodborne",
            description: "An inventory management game made with Vue", 
            image: "images/bloodborne.jpg", 
            language: "Vue.js"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with React", 
            image: "images/florence.png", 
            language: "React.js, CSS"},

            {name: "Politweet", 
            github: "https://github.com/femosc2/politweet", 
            description: "Project for the course System Development and Project, created with React", 
            image: "images/politweet.png", 
            language: "React, CSS"}
        ],
        webProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with React", 
            image: "images/florence.png", 
            language: "React.js, CSS"}
        ],
        pythonProjects: [
            {name: "Bus Database",
            github: "https://github.com/femosc2/db-project-mortfors", 
            description: "Database assignment made with Python and PSQL", 
            image: "images/background.jpg", 
            language: "Python"},

            {name: "Discord Bot", 
            github: "https://github.com/femosc2/ia-discord-bot", 
            description: "A discord bot for the IA discord channel made with Python.", 
            image: "images/florence5.png", 
            language: "Python"}
        ],
        universityProjects: [
            {name: "Bus Database",
            github: "https://github.com/femosc2/db-project-mortfors", 
            description: "Database assignment made with Python and PSQL", 
            image: "images/background.jpg", 
            language: "Python"},

            {name: "Politweet", 
            github: "https://github.com/femosc2/politweet", 
            description: "Project for the course System Development and Project, created with React", 
            image: "images/politweet.png", 
            language: "React, CSS"}
        ]
    },

    methods: {
        about() {
            this.currentH1 = "Felix Morau";
            document.querySelector(".about").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "about";
            this.scrollToTop();
            
        },
        myProjects() {
            this.currentH1 = "My Projects";
            document.querySelector(".myProjects").classList.add("active");
            document.querySelector(".about").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "myProjects";
            this.scrollToTop();
        },
        contact() {
            this.currentH1 = "Contact";
            document.querySelector(".contact").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".about").classList.remove("active");
            this.currentActive = "contact";
            this.scrollToTop();
        },
        scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
}

});