import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserButton } from './components/MainContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>
      </div>
      {/* <div>
        <button onClick={() => setCount((count) => count + 10)}>
          +10
        </button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - 100)}>
          -100
        </button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 25)}>
          +25
        </button>
      </div>
       */}
       <UserBatton/>
    </>
  )
}

export default App
