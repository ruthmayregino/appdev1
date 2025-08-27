import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", margin: "20px" }}>
      <h1>About Me</h1>

      <p><strong>Name:</strong> Ruth May P. Regino</p>
      <p><strong>Course/Year:</strong> BS Information Systems 3rd Year - A</p>
      <p><strong>Fun Fact:</strong> I can drive both manual and automatic car.</p>

      <h2>Why I Want to Learn React</h2>
      <p>
      I want to learn React because it will help me build interactive and modern websites. It’s a valuable skill that can improve my projects and prepare me for future opportunities in web development.
      </p>
    </div>
    </>
  )
}

export default App
