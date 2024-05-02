import { useEffect, useState } from 'react'
import {
    faCss3,
    faGithub,
    faHtml5,
    faJsSquare,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../AboutSection/about.css'
import Loader from 'react-loaders'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const doSomething = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }
    useEffect(() => {
        doSomething();
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm Shivam Tiwari a 2nd year MCA (Master of Computer Applications) student at National Intitute of Technology Raipur.
                        I'm a Tech Enthusiastic, having interest in solving Data Structure and Alogrithm problems and Frontend Developement.
                    </p>
                    <p align="LEFT">
                        I am a self motivated person and I try to exceed my
                        superior’s expectations with high-quality work.
                    </p>
                    <p>
                        I'm looking for a front-end developer openings which matches my preferred skill sets.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon className='im' icon={faNode} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon className='im' icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon className='im' icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon className='im' icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon className='im' icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon className='im' icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default About