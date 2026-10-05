import './App.css'
import Button from './components/button'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'
import MenuLateral from './components/menulateral'
function App() {
 function handleclick(){
  alert("Clique aqui")
 }

 //arrow functions
 //const handleclick = () =>{
 // alert("Clique aqui!")
 //}

  return (//retorna um unico elemento raiz
    <>
     <Header />
     <MenuLateral />
     <Card titulo="Bem vindo!" content="Este é um componente de card simples em react"></Card>
     <Button label="Clique aqui" onClick={handleclick}/>
     <Footer label="UNIFOR"/>
      </>
  )
}

export default App
