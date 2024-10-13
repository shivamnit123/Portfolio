import React from 'react'
import '../Home/index.css'
import file from '../../resume/Resumeoff.pdf'
const Resume = () => {
    return (
        <a href={file} target="_blank" rel="noreferrer" className="flat-button">
            My Resume
        </a>
    )
}

export default Resume