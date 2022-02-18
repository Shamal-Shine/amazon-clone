import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpfWjsIsjAzJzRcw8LfCdaOFHQUx6lnNg",
    authDomain: "clone-c04dc.firebaseapp.com",
    projectId: "clone-c04dc",
    storageBucket: "clone-c04dc.appspot.com",
    messagingSenderId: "872494785320",
    appId: "1:872494785320:web:9e392a624671e8e7b9661d",
    measurementId: "G-SVKRK35KN5",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };