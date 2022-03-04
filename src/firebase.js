import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4tszWG939jyUoMNFGAqlw5p7bTyxtg-Y',
  authDomain: 'netflix-clone-ae764.firebaseapp.com',
  projectId: 'netflix-clone-ae764',
  storageBucket: 'netflix-clone-ae764.appspot.com',
  messagingSenderId: '391897259339',
  appId: '1:391897259339:web:6633ecd0fc44ba22eadcce',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
