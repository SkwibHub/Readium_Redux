import React from "react";
import Navbar from "./Navbar";
import AllStories from "./AllStories.jsx";
import { HashRouter, Route, Link } from "react-router-dom";

import SingleStory from "./SingleStory";
import Authors from "./Authors";
import SingleAuthor from "./SingleAuthor";

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path="/" component={AllStories} />
          <Route exact path="/stories" component={AllStories} />
          <Route exact path="/stories/:storyId" component={SingleStory} />
          <Route exact path="/authors" component={Authors} />
          <Route path="/authors/:authorId" component={SingleAuthor} />
        </div>
      </HashRouter>
    );
  }
}
