import { useState } from "react"
import { PostComponent } from "./Post"

function App() {

  const [posts, setPosts] = useState([]);

  const PostedComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "Want to know how to win big? Check out this folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            {PostedComponents}
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
