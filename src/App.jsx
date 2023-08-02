import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Faq,LinkButton,ButtonDiv,Logform,Button,File } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faq />
      <LinkButton />
      <ButtonDiv />
      <Logform />
      <File />
      <Button color="purple" />
      <Button color="tomato" />
    </>
  )
}

export default App
