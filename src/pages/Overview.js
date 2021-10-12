import React, {useState, useEffect} from 'react';

function Overview() {

    const [amountPosts, setAmountPosts] = useState(0)
    // const [blogTitles, setBlogTitles] = useState([])

    // setBlogTitles(["first title", "second title"])

    return (
        <div className="overview-container">
            <p>aantal posts: {amountPosts}</p>
            <p>
                titles
                {/*{blogTitles}*/}
            </p>
        </div>
    );
}

export default Overview;