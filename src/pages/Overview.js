import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import posts from '../data/posts.json';


function Overview() {

    const [amountPosts, setAmountPosts] = useState(0)

    useEffect(() => {
            setAmountPosts(posts.length)
        }, []
    )

    return (
        <div className="overview-container">
            <header>
                <h2>Overview</h2>
                <h5>Posts: {amountPosts}</h5>
            </header>
            <ul>
            {posts.map((item) => {
                return (
                    <Link to={'/post/' + item.id} key={item.id}>
                        <li>{item.title}</li>
                    </Link>
                )
            })}
            </ul>
        </div>
    );
}

export default Overview;