import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAlhPGy2SkRK-mP_9Ftlr6cxQE8Daot8LA",
    authDomain: "workshop-project-58361.firebaseapp.com",
    databaseURL: "https://workshop-project-58361.firebaseio.com",
    projectId: "workshop-project-58361",
    storageBucket: "workshop-project-58361.appspot.com",
    messagingSenderId: "1060428135996",
    appId: "1:1060428135996:web:8391c7d9d695ef72be0d39",
    measurementId: "G-4PHL0N0826"
}

const app = firebase.initializeApp(firebaseConfig);

const admin = () => {
    const db = app.firestore();
    const storage = app.storage();


    return {
        // url: 'http://localhost:5000/workshop-project-58361/us-central1/api/',
        url: 'https://us-central1-workshop-project-58361.cloudfunctions.net/api/',
        db,
        storage,
    }
}

export default admin