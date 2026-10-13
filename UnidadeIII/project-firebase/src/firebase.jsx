// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth" //inclui isso tambem, está relacionado à configuração da autenticação do Firebase no seu projeto React.
// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA65ZAcpknESr8NVSZlMH56yMZ4ghn4UiI",
  authDomain: "project-react-3186c.firebaseapp.com",
  projectId: "project-react-3186c",
  storageBucket: "project-react-3186c.firebasestorage.app",
  messagingSenderId: "936737174604",
  appId: "1:936737174604:web:3a4b0fd0c0b234f6c0b0e9",
  measurementId: "G-T7EGZHP8YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//inclui isso
const auth = getAuth(app) //Criando a instância da autenticação
export {auth, app} //Exportando para outros arquivos