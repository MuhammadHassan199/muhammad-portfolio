import '../About/index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() =>{
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
  }, []);

    return (
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

      
    </div>
  );
};

export default About;