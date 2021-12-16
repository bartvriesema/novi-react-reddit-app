import React from 'react';
import './Redditpost.css';
import Link from "react-router-dom/es/Link";

function Redditpost({title, comments, link, subreddit, upvotes}) {
    return (<li className="reddit-post">
            <h2 className="reddit-title"><a href={link}
                                            target="_blank"
                                            rel="noreferrer">
                {title}
            </a></h2>
            <div className="reddit-info">
                <Link to={`/subreddit/${subreddit}`}>{subreddit} </Link>
                | {new Intl.NumberFormat('nl-NL').format(comments)} comments
                - {new Intl.NumberFormat('nl-NL').format(upvotes)} ups
            </div>
        </li>);
}

export default Redditpost;