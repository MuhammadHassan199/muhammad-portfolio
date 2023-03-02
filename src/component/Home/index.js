import { useEffect, useState } from 'react';
import DownloadCV from '../..';
import '../Home/index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H',
    'a',
    's',
    's',
    'a',
    'n',
    ' ',
    'H',
    'e',
    'r',
    'e',
    '!']

    useEffect(() =>{
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
    }, []);
    

    return(
        <>
    <div className='container home-page'>
        {/* <img className='home-img' src={Portrait} alt=''/> */}
        <div className='text-zone'>
            <h1 className='hi-heading'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _14`}>i,</span> <br />      
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
        </h1>
        <h2>Welcome to my portfolio world! You can see my work and <br></br> if you want me to hire me download my CV below.</h2>
        <DownloadCV />
        </div>
        <Logo />
    </div>
    <Loader type="pacman" />
    </>
)
}

export default Home;

