import 'firebase/database';

import dotenv from 'dotenv';
import express from 'express';
import firebase from 'firebase/app';

import api from './api';

// import swaggerUi from 'swagger-ui-express';
// import { swaggerDocument } from './swagger/swagger';
dotenv.config();

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
};

firebase.initializeApp(config);

export const db = firebase.database();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const port = process.env.PORT || 8081; // default port to listen
app.use('/api/v1', api);
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }/api/v1/` );
});
