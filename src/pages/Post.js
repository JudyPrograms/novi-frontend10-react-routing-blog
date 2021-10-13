import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import posts from '../data/posts.json';
import Button from "../components/Button";

function Post() {

    const history = useHistory()

    const {num} = useParams()

    const post = posts[num-1]

    return (
        <>
            <div className="posts-container">
                <article>
                    <header>
                        <h2>{post.title}</h2>
                        <h5>{post.date}</h5>
                    </header>
                    <p>{post.content}</p>
                </article>
            </div>
            <div className="posts-buttons">

                <Button size={"small-button"} handleClick={() => num > 1 && history.push(`/blogposts/${parseInt(num)-1}`)}>
                    PREVIOUS
                </Button>
                <Button size={"small-button"} handleClick={() => num < posts.length && history.push(`/blogposts/${parseInt(num)+1}`)}>
                    NEXT
                </Button>
            </div>
        </>
    )
        ;
}

export default Post;