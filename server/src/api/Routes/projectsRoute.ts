import { Router } from 'express';

import { getProjects } from '../controllers/projectsController';

const projectsRouter = Router();

projectsRouter.get('/', getProjects);

export default projectsRouter;