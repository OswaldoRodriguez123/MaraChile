// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiL0CsYLOH75bz2bhBfWQ4J69QZYkvozI",
  authDomain: "marachile-7cebf.firebaseapp.com",
  projectId: "marachile-7cebf",
  storageBucket: "marachile-7cebf.appspot.com",
  messagingSenderId: "698529357055",
  appId: "1:698529357055:web:25885995eeb92c0bbcc0ca"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
export const getDocs = (collection_name, condition = null) => {
    return new Promise(async (resolve, reject) => {
        const db = getFirestore();
        let collection = db.collection(collection_name);
        if (condition) collection = collection.where(...condition);
        const querySnapshot = await collection.get();
        const docs = querySnapshot.docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return { id, ...data }
        });
        resolve(docs);
    });
}