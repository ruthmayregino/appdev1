import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AdminPanel () {
  return (
  <h1> Admin Panel</h1>
  )
}

function LoginForm () {
  return (
    <h1> Login Form </h1>
  )
}
let content;

if (false) {
  content = <AdminPanel/>
}
else{
  content = <LoginForm/>
}
function App() {

  return (
    <>
    {content}
    </>
  )
}

export default App
