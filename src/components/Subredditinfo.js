import React from 'react';
import './Subredditinfo.css';
import Link from "react-router-dom/es/Link";
import backIcon from "../assets/icons/back-svgrepo-com.svg";

function Subredditinfo({name, banner, title, description, subs}) {

    return (<div className="subreddit-info">
            <h1 className="subreddit-name">{name}</h1>
            <img className="subreddit-banner-image" src={banner} alt={`${title} subreddit banner`}/>
            <h2 className="subreddit-title">{title}</h2>
            <p className="subreddit-description">{description}</p>
            <p className="subreddit-subs">Number of subscribers: {new Intl.NumberFormat('nl-NL').format(subs)}</p>
            <Link className="subredditinfo-back" to="/">
                <img className="subredditinfo-back-icon" src={backIcon} width="20px"/>
                Back to overview
            </Link>
        </div>);
}

export default Subredditinfo;