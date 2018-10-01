var site;

function siteLoader() {
    site = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("app").style.display = "block";
}


new Vue({
    el: "#loader",
    data: {
        firstName: "Felix",
        lastName: "Morau",
    }
});


new Vue({
    el: "#app",
    data: {
        currentH1: "My Projects",
        currentH3: null,
        currentActive: "myProjects",
        mainContent: null,
        firstName: "Felix",
        lastName: "Morau",
        introduction1: "My name is Felix Morau and I'm an 22 year old information architecture student at Malmö University.",
        introduction2: "I made this website as a way to track my programming journey through university and beyond! Make sure to check out my 'My Projects' to see what I've done and what I'm currently working on!",
        skillText: "I'm proficient in Python, JavaScript, Photoshop and CSS!",
        footerText: "Made by Felix Morau 2018",
        footerLink: "https://www.github.com/femosc2",
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
            language: "JavaScript"},

            {name: "Electron-todo", 
            github: "https://github.com/femosc2/electron-todo", 
            description: "Todo app made with Electron", 
            image: "images/electron.jpg", 
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
        ],
        contactLinks: [
            {
                name: "moraufelix",
                fa: "fab fa-twitter",
                link: "http://www.twitter.com/moraufelix"
            },
            {
                name: "FeMoSC2",
                fa: "fab fa-github",
                link: "http://www.github.com/femosc2"
            },
            {
                name: "moraufelix",
                fa: "fab fa-instagram",
                link: "http://www.instagram.com/moraufelix"
            },
            {
                name: "Felixmorau@gmail.com",
                fa: "far fa-envelope",
                link: null,
            },
            {
                name: "Felix Morau",
                fa: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/felix-morau-0193a2163/"
            }
        ],
        sideBarIcons: [
            {
                fa: "fab fa-js sidebarIcon",
                fontsize: 40,
                method: "JavaScript"
            },
            {
                fa: "fab fa-css3-alt sidebarIcon",
                fontsize: 40,
                method: "Web"
            },
            {
                fa: "fab fa-python sidebarIcon",
                fontsize: 40,
                method: "Python"
            },
            {
                fa: "fas fa-graduation-cap sidebarIcon",
                fontsize: 30,
                method: "Uni"
            }
        ],
        navItems: [
            {
                name: "About",
                cssName: "navItem about",
                codeName: "about"
            },
            {
                name: "My Projects",
                cssName: "navItem myProjects",
                codeName: "myProjects"
            },
            {
                name: "Contact",
                cssName: "navItem contact",
                codeName: "contact"
            }
        ],
        mySkills: [
            {
                fa: "fab fa-python skills",
                fontsize: 60,
            },
            {
                fa: "fab fa-js skills",
                fontsize: 60,
            },
            {
                fa: "fas fa-file-powerpoint skills",
                fontsize: 60,
            },
            {
                fa: "fab fa-css3 skills",
                fontsize: 60,
            }
        ]
    },

    methods: {
        menuSelect(menuOption, active) {
            this.currentH1 = menuOption;
            this.currentActive = active;
            this.mainContent = "Hello!";
            this.scrollToTop();
            this.currentH3 = menuOption;
            
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        },
        scrollTo(element) {
            document.querySelector(element).scrollIntoView({ 
                behavior: 'smooth' 
              });
        },
    },

});