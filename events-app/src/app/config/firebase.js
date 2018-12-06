import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC36VwjVuCaZzWlm5hIbEkcvcALT_njrCM",
  authDomain: "react-events-fb598.firebaseapp.com",
  databaseURL: "https://react-events-fb598.firebaseio.com",
  projectId: "react-events-fb598",
  storageBucket: "",
  messagingSenderId: "992091956054"
}

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)

export default firebase