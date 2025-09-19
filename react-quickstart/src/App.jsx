import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const user = {
  name: 'RuthMay',
  imageUrl: 'https://www.pinterest.com/pin/essentials-are-essential--8655424280926299/',
  imageSize: 90,
};

  return (
    <> 
    <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

    </>
  )
}

export default App
