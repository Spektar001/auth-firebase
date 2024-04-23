import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu2co0zoBv7_wWEuUzQ52T1ItJK5DpBiE",
  authDomain: "auth-firebase-9da15.firebaseapp.com",
  databaseURL: "https://auth-firebase-9da15-default-rtdb.firebaseio.com",
  projectId: "auth-firebase-9da15",
  storageBucket: "auth-firebase-9da15.appspot.com",
  messagingSenderId: "121909405412",
  appId: "1:121909405412:web:d068890550cd9975196ef1",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();