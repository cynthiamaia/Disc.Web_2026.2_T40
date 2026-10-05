import React, { useState } from 'react';
//Hooks são funções especiais no React que permitem que você "conecte" estados
export default function Counter() {
//definição do hook useState
const [count, setCount] = useState(0); //Crie um estado que começa com o valor 0[valorAtual, funçãoParaAlterar]

function incrementar() {
    setCount(count + 1);
    console.log(count + 1);
  }
return (
    <div>
    <p>Você clicou {count} vezes</p>
            <button onClick={incrementar}>
            Clique aqui
            </button>
    </div>
);
}
