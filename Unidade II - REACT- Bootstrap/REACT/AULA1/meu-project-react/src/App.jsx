import Button from './components/button'
import './App.css'


function App() {

  function handleClick(){
    alert("voce clicou no botao")
  }
//const handleClick = () => { //arrow function
 //alert("Você clicou no botão");
//};
  return (
     <Button label="Clique aqui" onClick={handleClick}/>
      
  )
}
export default App
