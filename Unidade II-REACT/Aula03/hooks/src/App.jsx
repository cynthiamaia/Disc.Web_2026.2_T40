import './App.css'
import CounterEffect from './components/counter_effect'
import Counter from './components/counter'
import CounterSem from './components/counter_sem_hooks'
function App() {
 

  return (
      <div>
          <h1>Meu aplicativo</h1>
          <CounterSem />
          <Counter />
          <CounterEffect />
        </div>
  )
}

export default App
