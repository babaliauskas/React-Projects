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

/////////////////////////////////////////////////////////////

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = [];

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'ggg',
//   note: 'Last Payment',
//   amount: 234234,
//   createdAt: 253451123
// });

// // database.ref('notes/-LRrS9fzoCyQp4S6l3ot').remove();

// // database.ref('expenses').push({
// //   title: 'Course Topics',
// //   body: 'bla bla'
// // });

// // database.ref().on('value', snapshot => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database
// //   .ref()
// //   .once('value')
// //   .then(response => {
// //     const val = response.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log('Error', e);
// //   });

// // firebase
// //   .database()
// //   .ref()
// //   .set({
// //     name: 'Lukas Babaliauskas',
// //     age: 29,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Software developer',
// //       company: 'Google'
// //     },
// //     location: {
// //       city: 'Los Angeles',
// //       country: 'United State'
// //     }
// //   })
// //   .then(() => {
// //     console.log('Data is saved');
// //   })
// //   .catch(e => {
// //     console.log('This faled', e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('age').remove().then(() => {
// //   console.log('data was removed')
// // }).catch(e => {
// //   console.log('Did not remove', e)
// // })
