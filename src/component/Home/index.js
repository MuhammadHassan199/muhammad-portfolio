import DownloadCV from '../..';
import '../Home/index.scss'
import Portfolioimg from '../../assets/images/logo-scc.png'
const Home = () => {
    return(
    <div className='text-forhome'>

        <h1>Hi,</h1>
        <h2>Hassan Here!</h2>
        <p>Welcome to my portfolio world! You can see my work and <br></br> if you want me to hire me download my CV below.</p>
         <DownloadCV />
         <div className='img-forhome'>
        <img src={Portfolioimg} alt=''></img>
        </div>        
        
    
    </div>
)
}

export default Home;

