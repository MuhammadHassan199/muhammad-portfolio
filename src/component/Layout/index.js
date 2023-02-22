import './index.scss'
import Sidebar from '../Sidebar'
import Home from '../Home'
// import About from '../About'



const Layout = () => {
    return ( 
    <div className='App'>
    <Home />
    {/* <About /> */}
    <Sidebar />
    </div>
    )
}

export default Layout