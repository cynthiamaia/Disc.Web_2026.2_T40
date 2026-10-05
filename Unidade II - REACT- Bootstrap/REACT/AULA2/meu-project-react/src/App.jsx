import Button from './components/button'
import './App.css'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'
import MenuLateral from './components/menulateral'
function App() {

  function handleClick(){
    alert("voce clicou no botao")
  }

  return (
    <>
     <Header />
     <MenuLateral />
     <Card titulo="Bem vindo!" content="Este é um componente de card simples em react"></Card>
     <Button label="Clique aqui" onClick={handleClick}/>
     <Footer></Footer>
      </>
  )
}
export default App
