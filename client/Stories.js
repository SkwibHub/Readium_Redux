import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Stories = props => {
  return (
    <div id="stories" className="column">
      {props.allstories.map(story => (
        <div className="story" key={story.id}>
          <Link to={"/stories/" + story.id}>
            <h3>{story.title}</h3>
          </Link>
          <Link to={"/authors/" + story.author.id}>
            <p>{story.author.name}</p>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Stories;
