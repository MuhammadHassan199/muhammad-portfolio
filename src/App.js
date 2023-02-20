import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Layout from './component/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
