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
    <div className="container">
      <Header />
      <MenuLateral />

      <main>
        <Card 
          titulo="Bem vindo!" 
          content="Este é um componente de card simples em react" 
        />

        {/* Novo card com id */}
        <div id="card-destaque">
          <Card 
            titulo="Destaque" 
            content="Este é um card com estilo diferente usando ID" 
          />
        </div>

        <Button 
          label="Clique aqui" 
          onClick={handleClick}
        />
      </main>

      <Footer />
    </div>
  )
}export default App
