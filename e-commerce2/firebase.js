import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjSowL1sQ6Cg9vAgaZpV3YGUpOH9Syjk0",
  authDomain: "e-commerce-3ea6d.firebaseapp.com",
  databaseURL: "https://e-commerce-3ea6d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-3ea6d",
  storageBucket: "e-commerce-3ea6d.appspot.com",
  messagingSenderId: "41269558783",
  appId: "1:41269558783:web:eb893ae22bb05b2a1efbca",
  measurementId: "G-PCCRZFB2TP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {app,auth};
