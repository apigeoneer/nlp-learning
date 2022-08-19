import SingleDiscussion from "../../components/singleDiscussion/SingleDiscussion"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <form className="writeform">
        <div className="writeFormGroup">
            <label className="addimage" htmlFor="fileInput"><i class="fa fa-plus"></i>Add Image</label>
            <input id="fileInput" type="file" style={{display: "none"}}/>
            <br />
            <input className="titleinput" placeholder="Post title" type="text" autoFocus={true} />
        </div>
        
        <div className="writeFormGroup">
            <textarea className="contentinput" placeholder="Write a post and start a discussion!"></textarea>
        </div>
        <div className="actions">
          <div className="writeFormGroup">
            <input className="tagsinput" placeholder="Add your tags (interview experience, cars24 etc.) here." type="text" />
          </div>
          <div><button className="postbuton" type="submit">Create</button></div>
        </div>
      </form>

      <div className="ongoingdiscussions">
        <h2>Ongoing Discussions</h2>
        <SingleDiscussion/>
        <SingleDiscussion/>
        <SingleDiscussion/>
        <SingleDiscussion/>
        <SingleDiscussion/>
      </div>
    </div>
  )
}
