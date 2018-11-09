var site;

function siteLoader() {
    site = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
}


let loader = new Vue({
    el: "#loader",
    data: {
        firstName: "Felix",
        lastName: "Morau",
    }
});


let main = new Vue({
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
        currentCourses: "LOOOL",
        footerText: "Made by Felix Morau 2018",
        footerLink: "https://www.github.com/femosc2",
        currentHour: "",
        currentMinute: "",
        javaScriptProjects: [{
                name: "Personal Website",
                github: "https://github.com/femosc2/felix-morau-website",
                description: "A personal website made with Vue",
                image: "images/javascript.jpg",
                language: "Vue.js, CSS"
            },

            {
                name: "Vue Bloodborne",
                github: "https://github.com/femosc2/vue-bloodborne",
                description: "An inventory management game made with Vue",
                image: "images/javascript.jpg",
                language: "Vue.js"
            },

            {
                name: "Felix Inspo",
                github: "https://github.com/femosc2/felix-inspo",
                description: "An inspo site made with Vue",
                image: "images/javascript.jpg",
                language: "Vue.js, CSS"
            },

            {
                name: "Politweet",
                github: "https://github.com/femosc2/politweet",
                description: "Project for the course System Development and Project, created with React",
                image: "images/javascript.jpg",
                language: "React.js, CSS"
            },

            {
                name: "Jonas Sjöstedt Bird",
                github: "https://github.com/femosc2/svpol-bird",
                description: "Help Jonas Sjöstedt avoid the Nazis.",
                image: "images/javascript.jpg",
                language: "JavaScript"
            },

            {
                name: "Electron-todo",
                github: "https://github.com/femosc2/electron-todo",
                description: "Todo app made with Electron",
                image: "images/javascript.jpg",
                language: "JavaScript"
            },

            {
                name: "easy-electron-boilerplate",
                github: "https://github.com/femosc2/easy-electron-boilerplate",
                description: "Easy to edit electron boilerplate.",
                image: "images/javascript.jpg",
                language: "JavaScript"
            },
        ],
        webProjects: [{
                name: "Personal Website",
                github: "https://github.com/femosc2/felix-morau-website",
                description: "A personal website made with Vue",
                image: "images/webdesign.jpg",
                language: "Vue.js, CSS"
            },

            {
                name: "Felix Inspo",
                github: "https://github.com/femosc2/felix-inspo",
                description: "An inspo site made with Vue",
                image: "images/webdesign.jpg",
                language: "Vue.js, CSS",
            }
        ],
        pythonProjects: [{
                name: "Bus Database",
                github: "https://github.com/femosc2/db-project-mortfors",
                description: "Database assignment made with Python and PSQL",
                image: "images/python.jpg",
                language: "Python"
            },

            {
                name: "Discord Bot",
                github: "https://github.com/femosc2/ia-discord-bot",
                description: "A discord bot for the IA discord channel made with Python.",
                image: "images/python.jpg",
                language: "Python"
            },

            {
                name: "FeMoShop",
                github: "https://github.com/femosc2/femoshop",
                description: "A easy to use photo editor with a TkInter GUI",
                image: "images/python.jpg",
                language: "Python"
            },
        ],
        universityProjects: [{
                name: "Bus Database",
                github: "https://github.com/femosc2/db-project-mortfors",
                description: "Database assignment made with Python and PSQL",
                image: "images/university.jpg",
                language: "Python"
            },

            {
                name: "Politweet",
                github: "https://github.com/femosc2/politweet",
                description: "Project for the course System Development and Project, created with React",
                image: "images/university.jpg",
                language: "React.js, CSS"
            }
        ],
        contactLinks: [{
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
        sideBarIcons: [{
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
        navItems: [{
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
        mySkills: [{
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
        showCurrentCourses() {
            let today = new Date();
            const secondPeriod = new Date(2018, 11, 12);
            const thirdPeriod = new Date(2019, 1, 15);
            const fourthPeriod = new Date(2019, 3, 4);
            const summer = new Date(2019,6,1);


            if (today.getTime() > secondPeriod.getTime() && today.getFullYear() == 2018) {
                this.currentCourses = "I'm currently taking the Web Services (7.5hp) and Information Design (7.5hp) courses!";
            } else if (today.getTime() > thirdPeriod.getTime() && today.getFullYear() == 2019 && today.getMonth() >= 1) {
                this.currentCourses = "I'm currently taking the Research Methods (15hp) and Multiplatform Web Applications (7.5hp) courses!";
            } else if (today.getTime() > fourthPeriod.getTime() && today.getFullYear() == 2019 && today.getMonth() >= 3) {
                this.currentCourses = "I'm currently taking the Research Methods (15hp) and Information Security (7.5hp) courses!";
            } else if (today.getTime() > summer.getTime() && today.getFullYear() == 2019 && today.getMonth() >= 6) {
                this.currnetCourses= "The semester is over and I'm not taking any courses at the moment";
            } else {
                this.currentCourses = "I'm currently taking the Object Oriented Programming (7.5hp) and Information Architecture 2 (7.5hp) courses!";
            }
        },

    },

});

main.showCurrentCourses();