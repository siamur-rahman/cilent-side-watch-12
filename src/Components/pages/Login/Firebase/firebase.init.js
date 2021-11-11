// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './firebase.config';

// const inializeAuthentication = () => {
//    initializeApp(firebaseConfig);
// }

// export default inializeAuthentication;

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeFirebase = () => {
   initializeApp(firebaseConfig);
}


export default initializeFirebase;