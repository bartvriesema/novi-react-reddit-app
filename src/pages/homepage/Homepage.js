import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Homepage.css';
import Redditpost from "../../components/Redditpost";

function Homepage(props) {
    const [redditHottest, setRedditHottest] = useState([]);


    async function getRedditHottest() {
        try {
            const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
            console.log(result.data.data.children);
            setRedditHottest(result.data.data.children);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRedditHottest();
    }, [])


    return (
        <div className="homepage-container">
            <h1>Hottest Reddit posts</h1>
            <ul className="reddit-post-list">
                {redditHottest.map((redditPost) => {
                    return (
                        <Redditpost
                            key={redditPost.data.id}
                            title={redditPost.data.title}
                            upvotes={redditPost.data.ups}
                            link={redditPost.data.url}
                            subreddit={redditPost.data.subreddit_name_prefixed}
                            comments={redditPost.data.num_comments}
                        />

                    )

                })}
            </ul>
        </div>
    );
}

export default Homepage;