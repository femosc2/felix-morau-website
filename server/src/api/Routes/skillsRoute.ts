import { Router } from 'express';

import { getSkills } from '../Controllers/skillsController';

const skillsRouter = Router();

skillsRouter.get('/', getSkills);

export default skillsRouter;
