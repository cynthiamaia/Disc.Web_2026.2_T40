import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/card';
import Alert from 'react-bootstrap/Alert';
import Header from './components/header';


function App() {

  return (
    <>
    <Header />
      <Card titulo="Texto 1" co                                                                                                                                                                                                                                                                                                               ntent="Informacoes 1"/>
      <Alert variant="success">
          Funcionou!
      </Alert>
    </>
  )
}

export default App
//Navbar → cria a barra de navegação.
//bg="dark" → fundo escuro.
//variant="dark" → ajusta a cor dos textos para o fundo escuro.
//<Navbar.Brand> é o componente do React-Bootstrap usado para representar a marca/nome do site dentro da Navbar.