import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC0-D30r0gEAQgqCKUmby0JRBPhjcRfolI",
    authDomain: "react-project-77c23.firebaseapp.com",
    databaseURL: "https://react-project-77c23-default-rtdb.firebaseio.com",
    projectId: "react-project-77c23",
    storageBucket: "react-project-77c23.appspot.com",
    messagingSenderId: "1045600590753",
    appId: "1:1045600590753:web:5afa122840ed74bdde89e0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
