import React, { useState, useEffect } from 'react';
import '../Logo/index.css';
import LogoS from '../../../assets/images/WhatsApp Image 2024-01-22 at 10.21.03_58b6d56e.jpg';

const Logo = () => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`logo-container ${showLogo ? 'show' : ''}`}>
            {showLogo && (
                <>
                    <img
                        className="solid-logo"
                        src={LogoS}
                        alt=""
                    />
                    <svg
                        width="559pt"
                        height="897pt"
                        version="1.0"
                        viewBox="0 0 559 897"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Your SVG content */}
                    </svg>
                </>
            )}
        </div>
    );
}

export default Logo;
