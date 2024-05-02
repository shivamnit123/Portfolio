import React from 'react'
import '../../component/ProjectSection/project.css'
import AnimatedLetters from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import projectData from '../../Data/project.json'
const ProjectSection = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(projectData);
    const doSomething = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }
    useEffect(() => {
        doSomething();
    }, [])

    const renderProject = (project) => {
        return (
            <div className='images-container'>
                {
                    project.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover}
                                    className="project-image"
                                    alt="project" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProject(projectData.project)}</div>
            </div>
            <Loader type="square-spin" />
        </>
    );
}

export default ProjectSection