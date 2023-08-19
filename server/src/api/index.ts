import express from 'express';

import projectsRouter from './Routes/projectsRoute';
import skillsRouter from './Routes/skillsRoute';
import translationsRouter from './Routes/translationsController';

const api = express();

api.use('/skills', skillsRouter);
api.use('/projects', projectsRouter);
api.use('/translations', translationsRouter);

export default api;
