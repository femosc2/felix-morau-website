import { Router } from 'express';

import { getProjects } from '../Controllers/projectsController';

const projectsRouter = Router();

projectsRouter.get('/', getProjects);

export default projectsRouter;
