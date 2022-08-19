import "./joinUs.css"
import JoinUsImg from "../../../src/assets/joinus.jpg"

export default function JoinUs() {
  return (
    <div className="joinUs">
        <div className="leftcontent">
            <img src={JoinUsImg} alt="" />
        </div>
        <div className="rightcontent">
            <p>hi 👋</p>
            <p><span className="pmparainline">pmpara</span> is being created with the aim to provide product folks
               a place where they can find and share answers, resources, motivation and guidance.</p>
            <p>The platform is designed in a way that favors insightful discussions rather than pubishing long monlogous articles.</p>
            <br />
            <p><span className="pmparainline">pmpara</span> has just started and is headed towards creating a ton of value for countless people.
               Be a part of this journey by joining us.
               Fill out this form to get started.</p>
            <br/>
            <p>If you are interested in the product field, pease take a couple minutes to take this survey.</p>
            <br/>
            <p>If you're a developer and wish to contribute to the pmpara code, check out the GitHub repo.</p>
            <br/>
            <p>This platform is being built by Chitranshi Srivastava, an aspiring PM herself. Get in touch with her over LinkedIn or Twitter.</p>
            <br/>
            <p>Any queries and feedbacks are welcome at queries@pmpara.com.</p>
        </div>
    </div>
  )
}
