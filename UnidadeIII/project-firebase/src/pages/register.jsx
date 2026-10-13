import {useState} from "react" //cria vaiaveis de estado ao componente, guarado os dados e atualiza
import {auth} from "../firebase"
import Button from "../components/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom" //navegacao entre as paginas.  
//É uma biblioteca que permite fazer navegação entre páginas/rotas em uma aplicação React.

function Register() { //Cria o componente de cadastro
    const [nome, setNome]  = useState(""); //cria um estado chamado nome com valor inicial vazio
    const [email, setEmail] = useState(""); //cria um estado chamado email com valor inicial vazio
    const [senha, setSenha] = useState(""); //cria um estado chamado senha com valor inicial vazio
    const [error, setError] = useState("");
    const navigate = useNavigate() //criando uma instancia de navegacao

const handleregister = async(e) => {//async -> essa funcao vai esperar algo acontecer
        e.preventDefault();//evita o comportamento padrao de recarregar a pagina quando o formulario é enviado
        try { //tratamento de excecao //fluxo normal de execucao
            await createUserWithEmailAndPassword(auth, email, senha)//Espere o Firebase terminar de criar o usuário com esse e-mail e senha.
            alert("cadastrado!")
            navigate("/login")
        } catch (error){ //fluxo, caso ocorra algum comportamento inesperado no try, cai no cath
            setError(error.message)
        }
    }

function alterarNome(event) {
        const valor = event.target.value;//Dentro dele, conseguimos descobrir o valor digitado:
        setNome(valor);//setNome é a função que atualiza o estado nome.
    }
    return (
        <div >
        <h2>Cadastro</h2> 
        <form onSubmit={handleregister}> 
            <input
                type="text" /*campo de texto*/
                placeholder="Nome" /*campo cinza dentro do input */
                onChange={alterarNome} /*Quando o usuário alterar o input, pegue o valor que está no input e coloque esse valor no estado nome */
                required /*Campo obrigatório */              
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                onChange={(event) => setSenha(event.target.value)}              
                required
            />
             <Button label="Cadastro" />
        </form>
        </div>
    )
    }
export default Register;
