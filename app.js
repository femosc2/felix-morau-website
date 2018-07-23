new Vue({
    el: "#app",
    data: {
        currentH1: "My Projects",
        currentH3: null,
        currentActive: "myProjects",
        mainContent: null,
        javaScriptProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js, CSS"},

            {name: "Vue Bloodborne", 
            github: "https://github.com/femosc2/vue-bloodborne",
            description: "An inventory management game made with Vue", 
            image: "images/bloodborne.jpg", 
            language: "Vue.js"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with Vue", 
            image: "images/florence.png", 
            language: "Vue.js, CSS"},

            {name: "Politweet", 
            github: "https://github.com/femosc2/politweet", 
            description: "Project for the course System Development and Project, created with React", 
            image: "images/politweet.png", 
            language: "React.js, CSS"},

            {name: "Jonas Sjöstedt Bird", 
            github: "https://github.com/femosc2/svpol-bird", 
            description: "Help Jonas Sjöstedt avoid the Nazis.", 
            image: "images/communism.png", 
            language: "JavaScript"}
        ],
        webProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js, CSS"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with Vue", 
            image: "images/florence.png", 
            language: "Vue.js, CSS"}
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
            language: "React.js, CSS"}
        ]
    },

    methods: {
        about() {
            this.currentH1 = "Felix Morau";
            document.querySelector(".about").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "about";
            this.mainContent = "Hello!";
            this.scrollToTop();
            this.currentH3 = "About";
            
        },
        myProjects() {
            this.currentH1 = "My Projects";
            document.querySelector(".myProjects").classList.add("active");
            document.querySelector(".about").classList.remove("active");
            document.querySelector(".contact").classList.remove("active");
            this.currentActive = "myProjects";
            this.mainContent = null;
            this.scrollToTop();
            this.currentH3 = null;
        },
        contact() {
            this.currentH1 = "Contact";
            document.querySelector(".contact").classList.add("active");
            document.querySelector(".myProjects").classList.remove("active");
            document.querySelector(".about").classList.remove("active");
            this.currentActive = "contact";
            this.mainContent = "Do not hesitate to contact me!";
            this.scrollToTop();
            this.currentH3 = "Contact";
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        },
        scrollToWeb() {
            window.scroll({
                top: 1250,
                behavior: "smooth"
            });
        },
        scrollToPython() {
            window.scroll({
                top: 1500,
                behavior: "smooth"
            });
        },
        scrollToUniversity() {
            window.scroll({
                top: 2000,
                behavior: "smooth"
            });
        },
}

});