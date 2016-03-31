import React, {Component} from 'react';
import marked from 'marked';

class Comment extends Component {
  constructor() {
    super();
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return {__html: rawMarkup}
  }

  render() {
    return (
      <div>
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
      </div>
    );
  }
}
export default Comment;
