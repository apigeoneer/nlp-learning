import "./singleFeedHome.css";

export default function SingleFeedHome() {
  return (
    <div className="singlefeedhome">
      <div className="leftcontent">
        <img className="profilepic" src="https://cdn4.buysellads.net/uu/1/118579/1653486637-260x200-stop-overpaying-Mumbai-ads_260x200-Deploy-Servers-in-Seconds-from-Mumbai-.jpg" alt="" />
      </div>
      <div className="rightcontent">
        <div className="contentmain">
          <div>
            <span className="username"><a href="#">Stinky Chameleon</a></span> posted 
            <span className="posttitle"><a href="#">How to become a PM in 90 days!</a></span>
         </div>
         <p>Note that the development build is not optimized. To create a production build, use npm run build.
         Note that the development build is not optimized. To create a production build, use npm run build...</p>
       </div>

        <div className="contentother">
          <div className="leftother">
           <span>4 hours ago</span>
          </div>
          <div className="rightother">
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
        </div>
      </div>
    </div>
  )
}