import SingleFeedHome from "../singlefeedhome/SingleFeedHome";
import "./feedhome.css";
import { posts } from "../../data/postsdata";

export default function FeedHome() {
  return (
    <div className="feedhome">
      <div>
        {posts.map((post) => (
          <div>
            <SingleFeedHome key={post.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
