import React, {Component} from 'react';
import $ from 'jquery';

import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

  }

  componentDidMount() {
    this.loadCommentsFromServer();
    let that = this;
    setInterval(function() {
      that.loadCommentsFromServer();
    }, this.props.pollInterval);
  }

  loadCommentsFromServer() {
    console.log("loading comments from:" + this.props.url);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: 'false',
      success: function(data) {
        this.setState({data: data});
        console.log("loadCommentsFromServer success!!!  " + new Date());
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleCommentSubmit(comment) {
    console.log("handleCommentSubmit called! comment:" + JSON.stringify(comment));

    let originalComments = this.state.data;
    comment.id = Date.now();
    let expectedComments = originalComments.concat([comment]);

    this.setState({data: expectedComments})

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      cache: false,
      success: function(data) {
        console.log("ajax returned:" + JSON.stringify(data));
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: originalComments})
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  render() {
    return (
      <div>
        <h1>CommentBox</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

export default CommentBox;
