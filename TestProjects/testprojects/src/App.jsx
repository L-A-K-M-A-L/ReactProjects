import { useState } from 'react'
import './App.css'
import According from './component/accordian'
import TestAccordian from './component/accordian/accordianTest'
import ColorGenerator from './component/randomcolor'
import StarRating from './component/starRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <According /> */}
     {/* <TestAccordian /> */}
     {/* <ColorGenerator/> */}
    
     <StarRating noOfStars={10} />
    </>
  )
}

export default App
