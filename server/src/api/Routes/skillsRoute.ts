import { Router } from 'express';

import { getSkills } from '../controllers/skillsController';

const skillsRouter = Router();

skillsRouter.get('/', getSkills);

export default skillsRouter;
