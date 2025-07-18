import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-pink-500">
        Welcome to Baabi Bakery
        <h1 className="text-4xl text-pink-600 font-bold underline">
  Tailwind is working!
</h1>
      </h1>
    </div>
  );
}

export default App
