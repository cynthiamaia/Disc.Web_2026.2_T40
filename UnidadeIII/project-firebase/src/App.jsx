import './App.css'
import Register from './pages/register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
///React Router para permitir navegação entre diferentes páginas/componentes da aplicação React.
//BrowserRouter é o componente que gerencia a navegação da aplicação.
//Routes É o componente que agrupa as rotas da aplicação.
//Route Define uma rota específica.
//Quando a URL for /login, mostre o componente <Login />.
function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/login" element={<Login />}></Route>

       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
