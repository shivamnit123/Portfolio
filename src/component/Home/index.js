import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import '../Home/index.css'
import Animate from '../AnimatedLetter/index'
import Resume from './Resume'
import Logopart from './Logo/index'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['h', 'i', 'v', 'a', 'm', ' ', 'T', 'i', 'w', 'a', 'r', 'i']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]
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
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={`${letterClass} _11`}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
                        <Animate
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <Animate
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={27}
                        />
                    </h1>
                    <h2>Web Developer / Coder / Problem Solver</h2>
                    <Resume />
                </div>
                <Logopart />
            </div>
            <Loader type='square-spin' />

        </>
    )
}

export default Home