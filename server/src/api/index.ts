import express from 'express';
import skillsRouter from './routes/skillsRoute';
import projectsRouter from './Routes/projectsRoute';
const api = express();

api.use('/skills', skillsRouter)
api.use('/projects', projectsRouter)

export default api;