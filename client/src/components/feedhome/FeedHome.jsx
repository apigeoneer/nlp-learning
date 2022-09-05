import SingleFeedHome from "../singlefeedhome/SingleFeedHome";
import "./feedhome.css";
// import { posts } from "../../data/postsdata";
import {useState} from "react";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function FeedHome() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await axios.get(`http://localhost:5000/api/posts/63118094f96e61b4f331b1c4`)
        .then(res => {
          const postFetched = res.data;
          console.log("postFetched", postFetched);

          setPosts(posts.push({postFetched}));
          console.log("posts", posts);
        })

      }
      catch(err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="feedhome">
      <div>
        {/* {posts.map((post) => (
          <div>
            <SingleFeedHome key={post.id} post={post} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
