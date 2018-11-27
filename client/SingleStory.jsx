import React, { Component } from "react";
import axios from "axios";
import Comments from "./comments.jsx";
import { Link } from "react-router-dom";

export default class SingleStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        title: "LOADING",
        content: "LOADING",
        author: {},
        comments: []
      }
    };
  }

  async componentDidMount() {
    try {
      const storyId = this.props.match.params.storyId;
      const response = await axios.get(`/api/stories/${storyId}`);
      this.setState({ story: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const contentP = this.state.story.content
      .split("\n")
      .map((line, i) => <p key={i}>{line}</p>);

    return (
      <div id="single-story" className="column">
        <h1>{this.state.story.title}</h1>
        {contentP}
        <h3>Responses:</h3>
        <Comments storycomments={this.state.story.comments} />
      </div>
    );
  }
}
