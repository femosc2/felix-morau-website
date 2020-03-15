import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: 'https://my-website-21d35.firebaseio.com/',
};

firebase.initializeApp(config);

export const db = firebase.database();
