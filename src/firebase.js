import firebase from "firebase/app";
import"firebase/storage";
import"firebase/auth";
import"firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG-gV_m7HantV9RfI_DU3od7nBUNjLdNU",
  authDomain: "unisomea.firebaseapp.com",
  projectId: "unisomea",
  storageBucket: "unisomea.appspot.com",
  messagingSenderId: "925848122390",
  appId: "1:925848122390:web:687cad08b083fb37ee3137",
  measurementId: "G-4BC5KYQZC3"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();



const auth=firebaseApp.auth();

const storage=firebaseApp.storage();
export {db,auth,storage};
