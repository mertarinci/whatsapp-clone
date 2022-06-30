import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyCDUAvYBjfvwxabF8qaop6CiNC65rIwJNU",
    authDomain: "whatsapp-clone-bbc.firebaseapp.com",
    projectId: "whatsapp-clone-bbc",
    storageBucket: "whatsapp-clone-bbc.appspot.com",
    messagingSenderId: "352602390304",
    appId: "1:352602390304:web:5151e1dabd87af858da145"
  };

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, app}

