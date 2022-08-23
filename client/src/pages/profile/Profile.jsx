import "./profile.css";
import FeedPostsProfile from "../../components/feedPostsProfile/FeedPostsProfile";

export default function Profile() {
  return (
    <div className="profile">
      <div className="pf-container">
        <div className="pf-userDetails">
          <div className="pf-profileImg">
            <img src="" alt="" />
          </div>
          <div className="pf-primaryDetails">
            <h1 className="pf-name">Chitranshi Srivastava</h1>
            <h2 className="pf-username">chitranxshi</h2>
            <div className="pf-jobDetails">
            <div>Full stack engineer</div>
            <div>Tunerlabs</div>
            </div>
          </div>
          <div className="pf-contact">
            <div><i class="fa fa-map-pin"></i> JP Nagar (p-7), Bengaluru</div>
            <div><i class="fa fa-envelope"></i> chitranxshi@gmail.com</div>
            <div><i class="fa fa-globe"></i> www.stinky-chameleon.com</div>
            <div><i class="fa fa-twitter"></i> @chitranxshi</div>
          </div>
          <button className="pf-editButton" type="submit">Edit</button>
          <div className="pf-status">
            <div><i class="fa fa-eye"></i> Views 6587</div>
            <div><i class="fa fa-angle-up"></i> Upvotes 569</div>
            <div><i class="fa fa-angle-down"></i> Downvotes 90</div>
            <div><i class="fa fa-bookmark"></i> Bookmarked 76 times</div>
            <div><i class="fa fa-align-left"></i> Posts 47</div>
            <div><i class="fa fa-comments"></i> Comments 201</div>
            <div><i class="fa fa-star"></i> Reputation 876</div>
          </div>
        </div>
        <div className="pf-userActivity">
          {/* <h3>203 Activities in the last year</h3>
            <div className="pf-activitiesChart"></div> */}
          <h3>Recent Discussions</h3>
          <div className="pf-discussionTypes">
            <div className="pf-discussionType">
              <i class="fa fa-align-left"></i> Posts
            </div>
            <div className="pf-discussionType">
              <i class="fa fa-comments"></i> Comments
            </div>
          </div>
          <div className="pf-discussionsFeed">
            <FeedPostsProfile />
          </div>
          <div className="pf-recentDiscussions"></div>
        </div>
      </div>
    </div>
  );
}
