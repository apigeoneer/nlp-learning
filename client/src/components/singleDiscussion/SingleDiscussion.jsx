import "./singleDiscussion.css"

export default function SingleDiscussion() {
  return (
    <div className="singleDiscussion">
        <div className="contentmain">
        <div className="leftmain">
            <span className="posttitle"><a href="#">How to become a PM in 90 days!</a></span> by
            <span className="username"><a href="#">Stinky Chameleon</a></span>
       </div>
       <div className="rightmain">
            <div className="votes">
              <div className="upvotes">
                <div><i class="fa fa-angle-up"></i></div>
                <div><span className="numupvotes">34</span></div>
              </div>
            </div>
            <div className="views">
              <div><i class="fa fa-eye"></i></div>
              <div><span>92</span></div>
            </div>
        </div>
        </div>
        <div className="date">
           <span>4 hours ago</span>
        </div>
    </div>
  )
}
