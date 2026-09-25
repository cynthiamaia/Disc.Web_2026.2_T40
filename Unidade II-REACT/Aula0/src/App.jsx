import './App.css'
import Button from './components/button'
import Card from './components/card'
import Footer from './components/footer'
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
    <Button label="Clique aqui!" funcao={handleclick}/>
    <Card titulo="Card1" content="Informacoes complementares" />
    <Footer/>
    </>
  )
}

export default App
