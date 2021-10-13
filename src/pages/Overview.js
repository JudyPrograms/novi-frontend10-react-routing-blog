import React from 'react';
import {Link} from 'react-router-dom';
import posts from '../data/posts.json';


function Overview() {

    // Stel je moest data extern ophalen, dan zou je het zo doen:
    // const [amountPosts, setAmountPosts] = useState(0)
    //
    // useEffect(() => {
    //         RESULT = GET DATA
    //         POSTS = RESULT.DATA
    //         setAmountPosts(posts.length)
    //     }, []
    // )

    return (
        <div className="overview-container">
            <header>
                <h2>Overview</h2>
                <h5>Posts: {posts.length}</h5>
            </header>
            <ul>
            {posts.map((item) => {
                return (
                    <Link to={`/blogposts/${item.id}`} key={item.id}>
                        <li>{item.title}</li>
                    </Link>
                )
            })}
            </ul>
        </div>
    );
}

export default Overview;