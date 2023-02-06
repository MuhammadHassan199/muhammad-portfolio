import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.svg'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => 
    (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
               {/* <img className="sub-logo" src={LogoSubtitle} alt="muhammad" /> */}
            </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#c9c9c9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
               <FontAwesomeIcon icon={faUser} color="#c9c9c9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
               <FontAwesomeIcon icon={faEnvelope} color="#c9c9c9" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="" rel='moreferre' href='https://www.linkedin.com/in/muhammad-hassan-970818215/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#c9c9c9"/>
                </a>
            </li>
            <li>
                <a target="" rel='moreferre' href='https://github.com/MuhammadHassan199'>
                    <FontAwesomeIcon icon={faGithub} color="#c9c9c9"/>
                </a>
            </li>
            <li>
                <a target="" rel='moreferre' href='https://www.behance.net/muhhassan'>
                    <FontAwesomeIcon icon={faBehance} color="#c9c9c9"/>
                </a>
            </li>
        </ul>
        </div>
    )

export default Sidebar