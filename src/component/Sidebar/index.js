import '../Sidebar/index.css'
import { useState } from 'react'
import pic from "../../assets/images/logo-s.png"
import title from "../../assets/images/a.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faUserGraduate,
    faAddressBook,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={pic} alt="Logo" />
                <img className="sub-logo" src={title} alt="Shivam" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="education-link"
                    to="/education"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUserGraduate} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="myprofile-link"
                    to="/myprofiles"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/projects"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/shivam-tiwari-013428254/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/shivamnit123"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/shivam_tiwari7170/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ShivamT93907806" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}
export default Sidebar