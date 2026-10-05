// importar de bibliotecas
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //mesma pasta que main

createRoot(document.getElementById('root')).render(//Encontre no documento HTML o elemento que possui o ID root
  <StrictMode>
    <App />  {/*componente principal da aplicação: e sempre renderizado (escrito) em maiuscula */}
    {/*Pegue o componente App e faça com que sua interface apareça no elemento root da página.*/}
  </StrictMode>,
)




