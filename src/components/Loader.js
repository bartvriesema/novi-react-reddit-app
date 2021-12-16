import React from 'react';
import './Loader.css';

function Loader(props) {
    return (<div className="loader-container">
        <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <p className="loader-text">Computing the secret to life, the universe, and everything.</p>

    </div>);
}

export default Loader;

