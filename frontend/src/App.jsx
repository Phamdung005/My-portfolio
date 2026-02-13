import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-24 px-6">
        <h1 className="text-4xl font-bold">Chào Dũng IT Phenikaa!</h1>
        <p className="mt-4">Thử bấm nút đổi mode trên Navbar xem nhé.</p>
      </main>
    </>
  )
}

export default App
