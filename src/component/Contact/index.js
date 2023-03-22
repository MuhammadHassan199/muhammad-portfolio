import '../Contact/index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);
    const form = useRef ()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send("service_o1dwxh8","template_455rwgs",{
        from_name: name,
        from_email: email,
        Subject: subject,
        from_message: message,   
        },'RxlfyKhoI3C2Wp3dL');
}

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Contact me".split("")}
                        idx ={15}
                        />
                    </h1>
                    <p>I ensure that designs are eye-catching, user-friendly and
                    fulfil the project requirements. I stay updated on the latest trends in technology
                    to provide best possible solutions based on cutting-edge technologies.
                    </p>
                        <div className='contact-form'>
                            <form ref={form} onSubmit={sendEmail} >
                                <ul>
                                    <li className='half'>
                                        {/* <input type="text" name="name" placeholder='Name' required /> */}
                                        <input
                                             type="text"
                                              id="name"
                                              name="name"
                                              value={name}
                                              placeholder="Name"
                                              onChange={(event) =>
                                                setName(event.target.value)
                                              }
                                            />
                                    </li>
                                    <li className='half'>
                                        {/* <input type="email" name="email" placeholder='Email' required /> */}
                                        <input
                                             type="text"
                                              id="email"
                                              name='email'
                                              value={email}
                                              placeholder="Email"
                                              onChange={(event) =>
                                                setEmail(event.target.value)
                                              }
                                            />
                                    </li> 
                                    <li>
                                    <input
                                             type="text"
                                              id="subject"
                                              name='subject'
                                              value={subject}
                                              placeholder="Subject"
                                              onChange={(event) =>
                                                setSubject(event.target.value)
                                              }
                                            />
                                        {/* <input placeholder="Subject" type="text" name="subject" required /> */}
                                    </li>
                                    <li>
                                    <textarea
                                             type="text"
                                              id="message"
                                              name='message'
                                              value={message}
                                              placeholder="Message"
                                              onChange={(event) =>
                                                setMessage(event.target.value)
                                              }
                                            />
                                        {/* <textarea placeholder="Message" name="message" required ></textarea> */}
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                </div>
            </div>
                <Loader type= "pacman" />
        </>
    )
}


export default Contact