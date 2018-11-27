import React from "react";
import { Link } from "react-router-dom";

const Comments = function(props) {
  console.log(props.storycomments);
  return props.storycomments.map(singleComment => (
    <div key={singleComment.id} id="comments">
      <div className="comment row">
        <img src={singleComment.author.imageUrl} />
        <div className="column">
          <Link to="#">
            <h5>{singleComment.author.name}</h5>
          </Link>
          <div>{singleComment.content}</div>
        </div>
      </div>
    </div>
  ));
};

export default Comments;
