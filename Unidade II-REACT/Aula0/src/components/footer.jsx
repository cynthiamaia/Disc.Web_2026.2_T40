function Footer({label}){
    return (
       <footer style={styles} className="rodape">
        <p> &copy; {label}</p>
       </footer>
    )
} export default Footer;

const styles={
    footer:{
        backgroundColor:"red"
    }
}