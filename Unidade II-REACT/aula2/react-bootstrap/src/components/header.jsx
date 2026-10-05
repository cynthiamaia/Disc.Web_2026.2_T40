import Navbar from 'react-bootstrap/Navbar';//Importa o componente Navbar do React-Bootstrap.
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';//Importa o componente responsável pelo menu suspenso.

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        {/*Crie uma Navbar com fundo escuro e conteúdo no estilo escuro.*/}

      <Navbar.Brand href="#">
        Meu Site {/*Navbar.Brand representa a marca ou nome da aplicação.*/}
      </Navbar.Brand>

      <Nav>
        <Dropdown>
          <Dropdown.Toggle variant="primary"> {/*É o botão que o usuário clica.*/}
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu> {/*É a caixa que aparece depois que você clica em "Menu".*/}
            <Dropdown.Item href="#">
              Início
            </Dropdown.Item>

            <Dropdown.Item href="#">
              Perfil
            </Dropdown.Item>

            <Dropdown.Item href="#">
              Configurações
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>

    </Navbar>
  );
}

export default Header;