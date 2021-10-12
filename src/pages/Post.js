import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import posts from '../data/posts.json';
import Button from "../components/Button";

function Post() {

    const history = useHistory()

    const num = useParams()

    const [postId, setPostId] = useState(parseInt(num.num))
    const [post, setPost] = useState(posts[postId - 1])

    useEffect(() => {
        history.push('/post/' + postId)
        setPost(posts[postId - 1])
    }, [postId])

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
                <Button size={"small-button"} handleClick={() => postId > 1 && setPostId(postId-1)}>
                    PREVIOUS
                </Button>
                <Button size={"small-button"} handleClick={() => postId < posts.length && setPostId(postId+1)}>
                    NEXT
                </Button>
            </div>
        </>
    )
        ;
}

export default Post;