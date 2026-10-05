function Button({label}){
    return (
        <button type="button" className="btn btn-outline-primary">{label}</button>
        //Com uma borda colorida e fundo inicialmente transparente.

    )
}export default Button;
//usar estilos prontos sem precisar escrever o CSS de cada elemento
//https://getbootstrap.com/docs/5.3/getting-started/introduction/
//O Bootstrap - um conjunto de classes CSS prontas que você aplica através do className no React.