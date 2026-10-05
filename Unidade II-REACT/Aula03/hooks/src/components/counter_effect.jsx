import { useState, useEffect } from 'react';
export default function CounterEffect() {
const [count, setCount] = useState(0);
function incrementar() {
    setCount(count + 1);
    console.log(count + 1);
  }
useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
        },  // função
        [count]); 
        //Quando count mudar, execute esse código// dependência

return (
        <div>
        <p>Você clicou {count} vezes</p>
        <button onClick={incrementar}>
        Clique aqui
        </button>
        </div>
);
}
