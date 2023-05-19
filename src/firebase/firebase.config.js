// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAQtFAr6kLJhQr5NvooL_qw1H8KJbz2IfE",
//   authDomain: "toy-marketplace-a5e10.firebaseapp.com",
//   projectId: "toy-marketplace-a5e10",
//   storageBucket: "toy-marketplace-a5e10.appspot.com",
//   messagingSenderId: "813535209962",
//   appId: "1:813535209962:web:f7c69dd201f2b710f56a93"
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain:import.meta.env.VITE_AUTHDOMAIN,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;