import { useState } from "react"

function Likes({ video }) {

    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)

    function handleUpvote() {
        setLikes(likes + 1)
    }

    function handleDownvote() {
        setDislikes(dislikes + 1)
    }

    return(
        <div>
            <button onClick={handleUpvote}>{likes} 👍</button>
            <button onClick={handleDownvote}>{dislikes} 👎</button>
        </div>
    )
}

export default Likes