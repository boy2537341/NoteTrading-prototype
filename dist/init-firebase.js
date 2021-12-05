const firebaseConfig = {
    apiKey: "AIzaSyAS-qSBoxXXV-zBDHD6J4Sg5lnLFUAqxC4",
    authDomain: "notetrading-d1215.firebaseapp.com",
    databaseURL: "https://notetrading-d1215-default-rtdb.firebaseio.com",
    projectId: "notetrading-d1215",
    storageBucket: "notetrading-d1215.appspot.com",
    messagingSenderId: "1017579404142",
    appId: "1:1017579404142:web:3e2573003d0a1d20141f7f",
    measurementId: "G-B04DTC0ZTZ"
};

// Initialize Firestore Database
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
/* 
// Test Firebase
db.collection('users')
    .add({
        first: 'Dez',
        last: 'Chuang',
        gender: 'male'
    })
    .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
        console.error('Error adding document: ', error)
    })
*/
