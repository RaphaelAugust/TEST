import firebase from 'firebase/app'
import 'firebase/auth'

const Fire = firebase.initializeApp({
    apiKey: "AIzaSyAJYPVy0Dv0fFL5sgJ5CZ_J1IvVEucedLQ",
    authDomain: "first-sljopk.firebaseapp.com",
    databaseURL: "https://first-sljopk.firebaseio.com",
    projectId: "first-sljopk",
    storageBucket: "first-sljopk.appspot.com",
    messagingSenderId: "780183951897",
    appId: "1:780183951897:web:8183daaf161551c7c12888"

})
export default Fire
export const auth = Fire.auth() 