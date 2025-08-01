// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,  
  authDomain:import.meta.env.VITE_authDomain, 
  projectId:import.meta.env.VITE_projectId,  
  storageBucket:import.meta.env.VITE_storageBucket, 
  messagingSenderId:import.meta.env.VITE_messagingSenderId,  
  appId:import.meta.env.VITE_appId,

};

//  console.log("Firebase Config:", firebaseConfig);
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export default app;

// let app = null;

// if (import.meta.env.MODE !== "development") {
//   const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
//   };

//   app = initializeApp(firebaseConfig);
// }

// export default app;
