// Firebase Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBZ1937IbLViR2MXYYMKqxZKDyUyj9IqY",
  authDomain: "life-band-ai.firebaseapp.com",
  projectId: "life-band-ai",
  storageBucket: "life-band-ai.firebasestorage.app",
  messagingSenderId: "629516132408",
  appId: "1:629516132408:web:2e785ce826ddb57a5686cd",
  measurementId: "G-FX93K55JQN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
