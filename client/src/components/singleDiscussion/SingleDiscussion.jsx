import "./singleDiscussion.css";

export default function SingleDiscussion() {
  return (
    <div className="singleDiscussion">
      <main>
        <div className="leftmain">
          <span>
            <a href="#">How to become a PM in 90 days!</a>
          </span>{" "}
          by
          <span>
            <a href="#">Stinky Chameleon</a>
          </span>
        </div>
        <div className="rightmain">
          <div className="d-votes">
            <div className="d-upvotes">
              <div>
                <i class="fa fa-angle-up"></i>
              </div>
              <div>
                <span className="d-numupvotes">34</span>
              </div>
            </div>
          </div>
          <div className="d-views">
            <div>
              <i class="fa fa-eye"></i>
            </div>
            <div>
              <span>92</span>
            </div>
          </div>
        </div>
      </main>
      <div className="d-date">
        <span>4 hours ago</span>
      </div>
    </div>
  );
}
