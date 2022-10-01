// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCev1_lYnFceIViUt-VKLJhrAkzaDQB0BY',
  authDomain: 'computas-stocks.firebaseapp.com',
  projectId: 'computas-stocks',
  storageBucket: 'computas-stocks.appspot.com',
  messagingSenderId: '1083268345932',
  appId: '1:1083268345932:web:8f73d2ba86d5532c3b04e9',
  measurementId: 'G-WPSBWT9DSG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
