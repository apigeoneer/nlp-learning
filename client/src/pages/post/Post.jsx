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
        <button className="create" type="submit">Create</button>
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
