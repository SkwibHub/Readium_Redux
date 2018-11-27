import React, { Component } from "react";
import Stories from "./Stories.js";
import axios from "axios";

export default class AllStories extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  async componentDidMount() {
    try {
      const storiesResponse = await axios.get("/api/stories");
      this.setState({ stories: storiesResponse.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <Stories allstories={this.state.stories} />;
  }
}
