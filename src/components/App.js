import { video } from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  

  return (
    <div className="App">
      <Video video={video} />
      <br/>
      <Comments video={video}/>
    </div>
  );
}

export default App;
