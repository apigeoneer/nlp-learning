import { Link } from "react-router-dom";
import "./singleFeedHome.css";


export default function SingleFeedHome({ post }) {
  return (
    <div className="singlefeedhome">
      <div className="sfh-leftcontent">
        <img
          className="profilepic"
          src="https://cdn4.buysellads.net/uu/1/118579/1653486637-260x200-stop-overpaying-Mumbai-ads_260x200-Deploy-Servers-in-Seconds-from-Mumbai-.jpg"
          alt=""
        />
      </div>
      <div className="sfh-rightcontent">
        <div className="sfh-contentmain">
          <div>
            <span className="username">
              <a href="#">Stinky Chameleon</a>
            </span>{" "}
            posted 
            <Link to={`/post/${post.id}`}>
              <span className="posttitle"> {post.desc} </span>
            </Link>
          </div>
          <p>
            Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build
            is not optimized. To create a production build, use npm run build...
          </p>
        </div>

        <div className="contentother">
          <div className="leftother">
            <span>4 hours ago</span>
          </div>
          <div className="rightother">
            <div className="f-votes">
              <div className="f-upvotes">
                <div>
                  <i class="fa fa-angle-up"></i>
                </div>
                <div>
                  <span className="f-numupvotes">34</span>
                </div>
              </div>
              <div className="f-downvotes">
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
            <div className="f-views">
              <div>
                <i class="fa fa-eye"></i>
              </div>
              <div>
                <span>92</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
