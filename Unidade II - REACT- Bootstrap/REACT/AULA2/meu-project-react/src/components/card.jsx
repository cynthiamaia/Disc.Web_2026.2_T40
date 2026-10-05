function Card({titulo, content}){//define o componente, props (properties) são os dados que você passa para um componente
    return (
        <div style={styles}>
            <h2>{titulo}</h2>
            <p>{content}</p>
        </div>
    );
}
const styles ={
//estilos para o cartao
    border: "10px solid #ddd", 
    //uma borda fina e cinza ao redor do cartao
    borderRadius: "8px",
    //arredondar as bordas do cartao
    padding: "40px",
    //espacamento interno ao redor do conteudop
}

export default Card