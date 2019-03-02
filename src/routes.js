import PersonalContainer from "./components/Personal/PersonalContainer";
import ProfessionalContainer from "./components/Professional/ProfessionalContainer"


export const routes = [
    { path: "/", component: PersonalContainer },
    { path: "/personal", component: PersonalContainer },
    { path: "/professional", component: ProfessionalContainer }
];