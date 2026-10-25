import {useState} from "react"
import Button from "../components/button";
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"
function Login(){
        const [email, setEmail] = useState(""); // cria um estado chamado email com valor inicial vazio
        const [senha, setSenha] = useState("");
        const [error, setError] = useState("")
        const navigate = useNavigate() 
        const handlelogin = async(e) => {
            e.preventDefault();//evita o comportamento padrao de recarregar a pagina quando o formulrio é enviado
            try { //tratamento de excecao // fluxo normal de execucao
                await signInWithEmailAndPassword(auth, email, senha)
                //wait so funciona dentro de funcoes assincronas
                alert("Logado com sucesso!")
                navigate("/")
            } catch (error){ // fluxo, caso ocorra algum comportamento inesperado no try, cai no cath e tem o tratamento.
                setError(error.message)
                alert("Cadastro nao encontrado!")
            }
        }
        return (
            <div >
            <h2>Login</h2> 
            <form onSubmit={handlelogin}> 
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}              
                    required
                />
               <Button label="Cadastro" />

            </form>
            </div>
        )
        }
    export default Login;