function Button({ label, onClick }){ //criar um componente funcional chamado de Button
    //Props (de properties = propriedades) são dados que você passa para um componente.
    return (
        <button onClick={onClick} className="botao">{label}</button>
    );
            
}
export default Button; 
//Componentes React: sempre com a primeira letra MAIÚSCULA.
//Tags HTML: sempre minúsculas.
//Componente = função
//Props      = parâmetros

//return, o React precisa retornar um único elemento raiz.
// <>...</> fragment
//Você pode ter vários elementos, desde que estejam dentro de um único elemento pai. return