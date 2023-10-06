import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-7T1VGlRaa4sRbO_j-VsqfIO-tnF19GI",
  authDomain: "mangamania-store.firebaseapp.com",
  projectId: "mangamania-store",
  storageBucket: "mangamania-store.appspot.com",
  messagingSenderId: "551524379791",
  appId: "1:551524379791:web:f8d87d11228116034b54fa",
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
