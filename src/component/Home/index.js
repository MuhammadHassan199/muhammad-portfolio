import DownloadCV from '../..';
import Portrait from '../../assets/images/potrait.png';
import '../Home/index.scss'
import '../../App.js'
const Home = () => {
    return(
    <div className='container home-page'>
        <img src={Portrait} alt=''></img>
        <div className='text-zone'>
        <h1>Hi,</h1>
        <h2>Hassan Here!</h2>
        <p>Welcome to my portfolio world! You can see my work and <br></br> if you want me to hire me download my CV below.</p>
        <DownloadCV />
        </div>
    </div>
)
}

export default Home;

