import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "../Cursor/curcor.css"; // Import your CSS file

export default function AnimatedCurs() {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={30}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'var(--cursor-color)'
            }}
            outerStyle={{
                border: '3px solid var(--cursor-color)'
            }}
            speed={0.3} // Adjust the speed here (increase or decrease as needed)
        />
    );
}
