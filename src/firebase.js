import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4tszWG939jyUoMNFGAqlw5p7bTyxtg-Y',
  authDomain: 'netflix-clone-ae764.firebaseapp.com',
  projectId: 'netflix-clone-ae764',
  storageBucket: 'netflix-clone-ae764.appspot.com',
  messagingSenderId: '391897259339',
  appId: '1:391897259339:web:6633ecd0fc44ba22eadcce',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };
export default db;
