
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD0HsMYst2XLuvPdOiYufrHiB3AADY92uM',
  authDomain: 'my-website-21d35.firebaseapp.com',
  databaseURL: 'https://my-website-21d35.firebaseio.com/',
};

firebase.initializeApp(config);

export const db = firebase.database();
