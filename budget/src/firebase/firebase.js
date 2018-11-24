import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyA0WkjPkxqYZAuba0rUwMe50Jeu7dUMOJc',
  authDomain: 'react-budget-app-2a1d3.firebaseapp.com',
  databaseURL: 'https://react-budget-app-2a1d3.firebaseio.com',
  projectId: 'react-budget-app-2a1d3',
  storageBucket: 'react-budget-app-2a1d3.appspot.com',
  messagingSenderId: '509873231596'
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
