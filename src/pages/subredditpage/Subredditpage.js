import React, {useEffect, useState} from 'react';
import './Subredditpage.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import Subredditinfo from "../../components/Subredditinfo";
import Loader from "../../components/Loader";

function Subredditpage(props) {
    const {subreddit} = useParams();
    const [subRedditInfo, setSubRedditInfo] = useState([]);

    async function getSubRedditInfo() {
        try {
            const result = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
            setSubRedditInfo(result.data.data);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getSubRedditInfo();
    }, [])


    return (<div className="subredditinfo-container">
            <h1>Subreddit information</h1>
            {subRedditInfo.title ? <Subredditinfo
                name={subRedditInfo.url}
                banner={subRedditInfo.banner_img}
                title={subRedditInfo.title}
                description={subRedditInfo.public_description}
                subs={subRedditInfo.subscribers}
            /> : <Loader />}
        </div>

    );
}

export default Subredditpage;