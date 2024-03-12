import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


//API STUFF HERE


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage= getStorage(app)



export {db,auth,analytics, provider, storage}