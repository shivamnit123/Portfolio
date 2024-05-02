import Loader from 'react-loaders';
import '../../component/EducationSection/education.css'
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter'
import EducationData from "../../EducationData/education.json"
const EducationSection = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const doSomething = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }
    useEffect(() => {
        doSomething();
    }, [])
    const renderEducation = (education) => {
        return (
            <>
                <div className='main-part'>
                    {
                        education.map((element, index) => {
                            return (
                                <div className='box-part'>
                                    <h3 className="vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle">
                                        {element.college}
                                    </h5>
                                    <p className="vertical-timeline-element-subject" id='subject'>{element.subject}</p>
                                    <p id="description">{element.year}</p>
                                </div>
                            );
                        })}
                </div>
            </>
        );
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Education".split("")}
                        idx={16}
                    />
                </h1>
                <div>{renderEducation(EducationData.education)}</div>
            </div>

            <Loader type="square-spin" />
        </>
    );
}


export default EducationSection