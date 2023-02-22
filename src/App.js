import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import './App.scss'

function App() {
  return (
    <>
         
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>


    </>
  );
}
export default App
