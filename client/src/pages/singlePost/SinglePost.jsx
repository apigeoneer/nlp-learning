import "./singlePost.css"
import {posts} from "../../data/postsdata" 
import { useLocation } from "react-router-dom"

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find(
    (p) => p.id.toString() === path 
  );

  console.log(location);

  return (
    <div className="singlePost">
      <div className="top">
        <div className="votesAndViews">
          <div className="votes">
            <div className="upvotes">
              <div><i class="fa fa-angle-up"></i></div>
              <div><span className="numupvotes">34</span></div>
            </div>
            <div className="downvotes">
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="views">
            <div><i class="fa fa-eye"></i></div>
            <div><span>92</span></div>
          </div>
        </div>
        <div className="topHeading">
          <div><h1>{post.desc}</h1></div>
          <div className="topactions">
            <div><i class="fa fa-share"></i></div>
            <div><i class="fa fa-bookmark"></i></div>
          </div>
        </div>
        <div className="postDetails"><span>4 hours</span> ago | <span>Chitranxshi</span></div>
      </div>

      <div className="container">
        <div className="details">
          <div className="tags">
            <ul>
              <li>interview experience</li>
              <li>interview question</li>
              <li>google apm program</li>
            </ul>
          </div>
        </div>

        <div className="postContent">
          <p>
        LeetCode Discuss is a community where you can share questions and experiences from interviews.
        Before you post, please try to follow these guidelines:
        <br />
        <br />
        The title should follow this format:
        <br />
        Company Name | Stage (Phone, Onsite, OA) | Question name
        For example, this could look like:
        <br />
        Amazon | Phone | Missing number
        Google | Onsite | Robot Room Cleaner
        <br />
        <br />
        Please post clear and concise descriptions of the problems and make sure your question has not already been posted.
        If you're including code in your post, please surround the code block with three backticks (```) to make it more readable. Posts that do not follow this guideline may be removed by moderators.
        Each question should be accompanied by at least one example - the more the better!
        Please enter the company name in the tags shown below which will help people see your question more easily.
        <br />
        <br />
        Each post should include only one question. If you want to share your overall interview experience, please post in the Interview Experience category.
        You represent and warrant that any User Content that you submit, post or display through the Services does not infringe or violate any of the copyright, patent, trademark, trade name, trade secrets or any other personal or proprietary rights of any third party.
        <br />
        <br />
        Happy discussing! :)
          </p>
        </div>
      </div>

      <div className="commentSection">
        <div className="commentDetails">
          <div><i class="fa fa-comment"></i></div>
          <div className="numComments">56</div>
          <div>Comments</div>
        </div>

        <div className="writeComment">
          <form className="writeform">        
            <div className="writeFormGroup">
              <textarea className="commentinput" placeholder="Write a comment to join the discussion!"></textarea>
            </div>
           <div><button className="postCommentButton" type="submit">Post</button></div>
          </form>
        </div>

        <div className="comments">
          
        </div>
      </div>
    </div>
  )
};

export default SinglePost;
