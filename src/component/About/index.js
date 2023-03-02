import '../About/index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import illustrator from '../../assets/images/illustrator.png'
import photoshop from '../../assets/images/photoshop.png'
import figma from '../../assets/images/figma.png'
import html5 from '../../assets/images/html-5.png'
import css3 from '../../assets/images/css-3.png'
import react from '../../assets/images/atom.png'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() =>{
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
  }, []);

    return (
      <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass} 
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
 />
        </h1>   
        <p>As a Graphics Designer with a experience of more than 2 years of working on
        different projects, I am able to handle deadlines under pressure and create
        well-made designs.</p>
        <p>I ensure that designs are eye-catching, user-friendly and
        fulfil the project requirements. I stay updated on the latest trends in technology
        to provide best possible solutions based on cutting-edge technologies.</p>
        <p>I'm quiet confident, naturally curious, and perpetually working on
        improving my chops one design problem at a time.</p>
      </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
                <img src={illustrator} alt='icon1' />
            </div>
            <div className='face2'>
                <img src={photoshop} alt='icon2' />
            </div>
            <div className='face3'>
                <img src={figma} alt='icon3' />
            </div>
            <div className='face4'>
                <img src={html5} alt='icon4' />
            </div>
            <div className='face5'>
                <img src={css3} alt='icon5' />
            </div>
            <div className='face6'>
                <img src={react} alt='icon6' />
            </div>
          </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;