import * as firebase from 'firebase';
//import firestone from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

//  Configuration firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQIQJpdfRSGZXr5jjR8pHXeEr4qoOiKi4",
    authDomain: "il-piccolo-restaurante.firebaseapp.com",
    databaseURL: "https://il-piccolo-restaurante.firebaseio.com",
    projectId: "il-piccolo-restaurante",
    storageBucket: "il-piccolo-restaurante.appspot.com",
    messagingSenderId: "878022984897",
    appId: "1:878022984897:web:605481abd846ce77"
  };
//  Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings(settings);
export default firebase;