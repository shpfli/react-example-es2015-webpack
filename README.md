# react-example-es2015-webpack
This is a react example which use es2015 and webpack to rewrite [React comment box example](https://github.com/reactjs/react-tutorial) from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## to use
### 1. install node modules
```
npm i
```
### 2. Start server
You can start a server with one of the following:
#### A. pages and ajax use different server
Start ajax server
```
node server.js

```
open another terminal to start pages server
```
npm start
```
And visit <http://localhost:8888/>. Try opening multiple tabs!

#### B. pages and ajax use one server
```
npm run server
```

And visit <http://localhost:3000/>. Try opening multiple tabs!
