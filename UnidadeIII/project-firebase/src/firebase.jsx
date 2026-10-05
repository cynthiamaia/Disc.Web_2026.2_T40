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
  apiKey: "AIzaSyBpp3HzPgutXJ6uyRje5ZUQcqrwTrlt_b0",
  authDomain: "project-firebase-7c558.firebaseapp.com",
  projectId: "project-firebase-7c558",
  storageBucket: "project-firebase-7c558.firebasestorage.app",
  messagingSenderId: "141563965166",
  appId: "1:141563965166:web:cdca89dc295d20d9450dff",
  measurementId: "G-4QPQQDS1ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//inclui isso
const auth = getAuth(app) //Criando a instância da autenticação
export {auth, app} //Exportando para outros arquivos