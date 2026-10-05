export default function CounterSem() {
  let count = 0;
  function incrementar() {
    count = count + 1;
    console.log(count);
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
//O problema é que React não fica sabendo que precisa atualizar a tela.
//count é apenas uma variável comum do JavaScript, e o React não sabe que ela mudou.
//o seu count está funcionando como JavaScript, mas não como estado do React