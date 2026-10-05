function Footer({label}){
    return (
       <footer style={styles} className="rodape">
        {/*Acessa o objeto que está dentro de styles*/}
        <p> &copy; {label}</p>
       </footer>
    )
} export default Footer;

const styles={ //cria um objeto JavaScript chamado styles para guardar estilos:
       backgroundColor:"red" //É uma propriedade de estilo
}
//style={{ backgroundColor: "red" }}