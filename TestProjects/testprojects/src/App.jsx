import { useState } from 'react'
import './App.css'
import According from './component/accordian'
import TestAccordian from './component/accordian/accordianTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <According /> */}
     <TestAccordian />
    </>
  )
}

export default App
