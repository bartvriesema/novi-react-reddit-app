import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Homepage.css';
import Redditpost from "../../components/Redditpost";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

function Homepage() {
    const [redditHottest, setRedditHottest] = useState();
    const [hasError, setHasError] = useState(false);

    async function getRedditHottest() {
        try {
            const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
            setRedditHottest(result.data.data.children);
        } catch (e) {
            console.log(e);
            setHasError(true);
        }
    }

    useEffect(() => {
        getRedditHottest();
    }, [])


    return (<>
        {hasError && <Error />}

        {!hasError && <div className="homepage-container">
            <h1>Hottest Reddit posts</h1>
            {redditHottest ? <ul className="reddit-post-list">
                {redditHottest.map((redditPost) => {
                    return (<Redditpost
                            key={redditPost.data.id}
                            title={redditPost.data.title}
                            upvotes={redditPost.data.ups}
                            link={redditPost.data.url}
                            subreddit={redditPost.data.subreddit_name_prefixed}
                            comments={redditPost.data.num_comments}
                        />

                    )

                })}
            </ul> : <Loader/>}
        </div>}
    </>);
}

export default Homepage;