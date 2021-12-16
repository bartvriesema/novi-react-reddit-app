import React, {useEffect, useState} from 'react';
import './Subredditpage.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import Subredditinfo from "../../components/Subredditinfo";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

function Subredditpage() {
    const {subreddit} = useParams();
    const [subRedditInfo, setSubRedditInfo] = useState();
    const [hasError, setHasError] = useState(false);

    async function getSubRedditInfo() {
        try {
            const result = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
            setSubRedditInfo(result.data.data);
        } catch (e) {
            console.log(e);
            setHasError(true);
        }
    }


    useEffect(() => {
        getSubRedditInfo();
    }, [])


    return (<>
            {hasError && <Error/>}

            {!hasError && <div className="subredditinfo-container">
                <h1>Subreddit information</h1>
                {subRedditInfo ? <Subredditinfo
                    name={subRedditInfo.url}
                    banner={subRedditInfo.banner_img}
                    title={subRedditInfo.title}
                    description={subRedditInfo.public_description}
                    subs={subRedditInfo.subscribers}
                /> : <Loader/>}
            </div>}
        </>

    );
}

export default Subredditpage;