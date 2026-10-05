function Button({ label, onClick }){ //criar um componente funcional chamado de Button
    //Props (de properties = propriedades) são dados que você passa para um componente.
    return (
        <button onClick={onClick} className="botao">{label}</button>
    );
            
}
export default Button; 