import express from 'express';
import skillsRoute from './routes/skillsRoute';
const api = express();

api.use('/skills', skillsRoute)

export default api;