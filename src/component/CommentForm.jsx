import React, {Component} from 'react';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: ''
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {
      author: this.state.author,
      text: this.state.text
    }

    if(!comment.author || !comment.text){
        console.log("Empty comment can't be submitted!");
        return;
    }

    console.log("Submiting comment:"+JSON.stringify(comment));
    this.props.onCommentSubmit(comment);
    this.setState({author: '', text: ''})
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="Your comment" value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" placeholder="Post"/>
      </form>
    );
  }
}
export default CommentForm;
