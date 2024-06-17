import { useState } from 'react'
import './App.css'
import According from './component/accordian'
import TestAccordian from './component/accordian/accordianTest'
import ColorGenerator from './component/randomcolor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <According /> */}
     {/* <TestAccordian /> */}
     <ColorGenerator/>
    </>
  )
}

export default App
