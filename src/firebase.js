import firebase from "firebase";
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBoU8rrp6eeGRug1wvxclWA_p1NsiF2uvo",
    authDomain: "disneyplus-clone-f68b5.firebaseapp.com",
    projectId: "disneyplus-clone-f68b5",
    storageBucket: "disneyplus-clone-f68b5.appspot.com",
    messagingSenderId: "534018192010",
    appId: "1:534018192010:web:50ae3af1aca13b8cfef373",
    measurementId: "G-XSFVT4VESK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export {auth, provider, storage}
export default db