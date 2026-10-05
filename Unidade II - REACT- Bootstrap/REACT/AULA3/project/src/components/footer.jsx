function Footer() { //indica a seção de rodapé da página 
   return (
     <footer className="rodape">
       <p> &copy; {new Date().getFullYear()}Todos os direitos reservados</p>
     </footer>
   );
 }
 // const styles = {
  // footer: {
   //  backgroundColor: "#6200ea", //Define a cor de fundo do rodapé.
  // },
 //};
  export default Footer;
//&copy -> representa o simbolo de copyright
//new date - criar a data atual
//.getFullYear() - pega apenas o ano da data