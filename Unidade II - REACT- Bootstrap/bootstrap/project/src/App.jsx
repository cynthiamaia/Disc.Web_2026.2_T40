import 'bootstrap/dist/css/bootstrap.min.css';
//"Importe o arquivo CSS do Bootstrap para este projeto."
import Footer from './components/footer'
import Button from './components/button';
import Alert from './components/alert';
import './App.css'

function App() {
  return (
    <>
   <Button label="Clique aqui!"/>
   <Alert label="Mensagem"/>
   <Footer />
   </>
  )
}

export default App
