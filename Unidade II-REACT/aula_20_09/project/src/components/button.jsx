function Button({ label, funcao}){//props
    return (
        <button className="botao" onClick={funcao}>{label}</button>
    )
}
export default Button;