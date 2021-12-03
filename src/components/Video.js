import Likes from "./Likes";

function Video({ video }) {
    console.log("video: ", video);
return(
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <h1>{video.title}</h1>
        <h5>{video.views} Views | Uploaded {video.createdAt}</h5>
        <Likes video={video} />
    </div>
)
}

export default Video 