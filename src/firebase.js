import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCVYS6erAqDMHZHe8MRraD7F9a3OcqVMgo",
    authDomain: "prakriyadigitalcms.firebaseapp.com",
    databaseURL: "https://prakriyadigitalcms-default-rtdb.firebaseio.com",
    projectId: "prakriyadigitalcms",
    storageBucket: "prakriyadigitalcms.appspot.com",
    messagingSenderId: "23127380227",
    appId: "1:23127380227:web:edf533022fcfa98a8b5936"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export {storage}
export {db}
export {app}