import './css/base.css';
import ReactDom from 'react-dom';
import React from 'react';

import CommentBox from './component/CommentBox';

let main = document.createElement('main');
document.body.appendChild(main);

const URL = 'http://localhost:3000/api/comments';

ReactDom.render(
  <CommentBox url={URL} pollInterval={2000}/>, main);
