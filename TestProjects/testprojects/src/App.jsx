import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import According from './component/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <According />
    </>
  )
}

export default App
