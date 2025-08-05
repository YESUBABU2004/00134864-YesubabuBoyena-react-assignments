import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './hello/Hello'
import Task2 from './task2/task2'
import Parent from './parent/Parent'
import Task4 from './task4/Task4'

function App() {
  const [count, setCount] = useState(0)

 return (
  <div>
    <Hello />
    <br />
    <Task2 />
    <Parent></Parent>
    <Task4></Task4>
  </div>
  
);

}

export default App
