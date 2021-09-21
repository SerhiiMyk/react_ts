import React from 'react';
import './App.css';
import Posts from "./Posts";
import {BrowserRouter as Router, Link, Route, RouteComponentProps} from "react-router-dom";
import {PostsDetails} from "./PostsDetails";

function App() {
  return (
    <div>
        <Router>
            <Link to={'/posts'}>posts</Link>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/posts/:id'} render={(props:RouteComponentProps) => <PostsDetails {...props}/>}/>
        </Router>
    </div>
  );
}

export default App;
