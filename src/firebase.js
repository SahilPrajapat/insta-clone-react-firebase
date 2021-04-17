import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4TfxABSHLPqOwCu3afG9TIJ-Me2cRqr0",
    authDomain: "insta-clone-react-b6359.firebaseapp.com",
    projectId: "insta-clone-react-b6359",
    storageBucket: "insta-clone-react-b6359.appspot.com",
    messagingSenderId: "120923155137",
    appId: "1:120923155137:web:3eecb5377a835cd5580240",
    measurementId: "G-ZNJW23PTF6"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};

