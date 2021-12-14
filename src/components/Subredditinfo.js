import React from 'react';
import './Subredditinfo.css';
import Link from "react-router-dom/es/Link";
import backIcon from "../assets/icons/back-svgrepo-com.svg";

function Subredditinfo({name, banner, title, description, subs}) {

    return (
        <div className="subreddit-info">
            <h1 className="subreddit-name">{name}</h1>
            <img className="subreddit-banner-image" src={banner} alt={`${title} subreddit banner`}/>
            <h2 className="subreddit-title">{title}</h2>
            <p className="subreddit-description">{description}</p>
            <p className="subreddit-subs">Number of subscribers: {subs}</p>
            <Link className="subredditinfo-back" to="/">
                <img src={backIcon} width="20px"/>
                Back to home
            </Link>
        </div>
    );
}

export default Subredditinfo;