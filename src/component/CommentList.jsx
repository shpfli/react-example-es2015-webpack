import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="commentList">
        <h2>Comments</h2>
        {this.props.data.map(function(comment) {
          return (
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        })}
      </div>
    );
  }
}
export default CommentList;
