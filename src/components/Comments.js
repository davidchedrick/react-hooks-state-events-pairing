import { useState } from "react"
import CommentCard from "./CommentCard"

function Comments({ video }) {
    const [isVisible, setIsVisible] = useState('Show Comments')

    const comments = video.comments.map(comment => {
        return(
         isVisible === 'Hide Comments' ? 
         <CommentCard 
            key={video.comments.id}
            user={comment.user} 
            comment={comment.comment}
        /> : null 
        )
    })

    function handleCommentVisible() {
        if(isVisible === 'Hide Comments') {
            setIsVisible('Show Comments')
        } else {
            setIsVisible('Hide Comments')
        }
    }

    return(
        <div>
            <button onClick={handleCommentVisible}>{isVisible}</button>
            <hr/>
            <h2>{video.comments.length} Comments</h2>
            {comments}
        </div>
    )
}

export default Comments