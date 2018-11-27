import React, { Component } from "react";
import axios from "axios";
import Comments from "./comments.jsx";
import Stories from "./Stories.js";
import { Route, Link } from "react-router-dom";

export default class SingleAuthor extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      bio: "",
      imageUrl: "",
      stories: [],
      comments: []
    };
  }

  async componentDidMount() {
    const authorId = this.props.match.params.authorId;
    const baseRoute = "/api/authors/" + authorId;

    try {
      const authorDetailP = axios.get(baseRoute);
      const storiesP = axios.get(baseRoute + "/stories");
      const commentsP = axios.get(baseRoute + "/comments");

      const [details, stories, comments] = await Promise.all([
        authorDetailP,
        storiesP,
        commentsP
      ]);

      const { name, bio, imageUrl } = details.data;

      this.setState({
        name,
        bio,
        imageUrl,
        stories: stories.data,
        comments: comments.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const author = this.state;
    const authorId = this.props.match.params.authorId;

    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <hr />
        <div id="single-author-nav">
          <Link to={`/authors/${authorId}/comments`}>Comments</Link>
          <Link to={`/authors/${authorId}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          {console.log("test" + author.comments[0])}
          <Route
            path="/authors/:authorId/comments"
            render={() => <Comments storycomments={author.comments} />}
          />
          <Route
            path="/authors/:authorId/stories"
            render={() => <Stories allstories={author.stories} />}
          />
        </div>
      </div>
    );
  }
}

/*
          <h4>STORIES</h4>
          <Stories allstories={this.state.stories} />
          <h4>COMMENTS</h4>
          <Comments storycomments={this.state.comments} />
          */
