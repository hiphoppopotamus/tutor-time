import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius adipisci quo rerum natus sint similique optio deleniti consequuntur ut! Rerum dolor id alias obcaecati, harum sint dolore aliquid libero!</p>
        </div>
    )
}

export default Rainbow(About)