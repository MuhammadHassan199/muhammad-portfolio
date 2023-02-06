import './App.scss';
import { Routes ,Route } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
    </Route>
  </Routes>
    </>
  )
}

export default App;
