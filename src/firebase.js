import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuL3kkZMAU9IGetBiOibOlJOvHScH5oOw",
    authDomain: "linkedin-clone-8fb77.firebaseapp.com",
    projectId: "linkedin-clone-8fb77",
    storageBucket: "linkedin-clone-8fb77.appspot.com",
    messagingSenderId: "880008869397",
    appId: "1:880008869397:web:f6351571c90ff42a19401c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider,db , storage};
  export default db;//will work only if nothing is exported 
