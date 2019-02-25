import PersonalContainer from "./components/Personal/PersonalContainer";
import CVContainer from "./components/CV/CVContainer";
import ProfessionalContainer from "./components/Professional/ProfessionalContainer"


export const routes = [
    { path: "/", component: PersonalContainer },
    { path: "/personal", component: PersonalContainer },
    { path: "/cv", component: CVContainer },
    { path: "/professional", component: ProfessionalContainer }
];