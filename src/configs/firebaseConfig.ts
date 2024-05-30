import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCon9ySqKrGgx123MWaZ5tc3bUftL38MqU",
  authDomain: "test-front-p.firebaseapp.com",
  projectId: "test-front-p",
  storageBucket: "test-front-p.appspot.com",
  messagingSenderId: "168444097585",
  appId: "1:168444097585:web:6897f97bc4121ab8e91110",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
