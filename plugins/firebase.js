import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7gMRW2JOm_TrfLhkvpLTOqGm8jInjT8o',
  authDomain: 'cmslayer-c3869.firebaseapp.com',
  databaseURL: 'https://cmslayer-c3869.firebaseio.com',
  projectId: 'cmslayer-c3869',
  storageBucket: 'cmslayer-c3869.appspot.com',
  messagingSenderId: '1027810095143',
  appId: '1:1027810095143:web:1494a6909d5ae36db79e02'
}
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
