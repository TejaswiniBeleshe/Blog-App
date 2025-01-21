
const Post = function(){

    return(
        <div className="post">
        <div className="image">
        <img src="https://images.pexels.com/photos/29506646/pexels-photo-29506646/free-photo-of-cozy-minimalist-holiday-living-room-scene.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="entry image not found" />
        </div>
        <div className="texts">
          <h2>Personal blog of my LIFE</h2>
          <p className="info">
            <a className="author">Tejaswini Belashe</a>
            <time>{new Date().getDate()}</time>
          </p>
          <p className="summary">This is blog describe the thought of a person who is Author of this blog here you might get information about specific topic</p>
        </div>
      </div>
    )

}
export default Post;