import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCKLv8te7ur42c9Dv1q8_GDOWRm0NEU2HM",
  authDomain: "goalcoach-58bb6.firebaseapp.com",
  databaseURL: "https://goalcoach-58bb6.firebaseio.com",
  projectId: "goalcoach-58bb6",
  storageBucket: "goalcoach-58bb6.appspot.com",
  messagingSenderId: "501322316621"
};

export const firebaseApp = firebase.initializeApp(config);
