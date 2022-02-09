import React, { Component } from "react";
import { appendCommentsScript, COMMENTS_CONTAINER_ID } from "../../utils/comments";
import { isDarkMode } from "../../utils/theme";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    appendCommentsScript(this.commentBox.current, isDarkMode());
  }

  render() {
    return (
      <div className="w-full" id={COMMENTS_CONTAINER_ID}>
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
