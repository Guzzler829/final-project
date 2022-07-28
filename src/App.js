import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home';
import InputField from './components/input-field';
import Post from './components/post';
import Sidebar from './components/sidebar';
import NotFound from './components/404';
import SavedPosts from './components/saved';
import Settings from './components/settings';
import Profile from './components/profile';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default function App() {

  useEffect( () => {
    getPosts()
  }, []);

  let [postJSONs, setPostJSONs] = useState([]);

  async function getPosts() {
    await fetch(apiURL + '/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then( res => res.json() )
        .then( res => setPostJSONs(res) )
        .catch( err => console.error(err) );
  }

  return (
    <Suspense fallback={(
      <div className='magnifier'></div>
    )}>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/post" exact={true}>
            <InputField />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/saved" exact={true}>
            <SavedPosts />
          </Route>
          <Route path="/settings" exact={true}>
            <Settings />
          </Route>
          <Route path="/user" exact={true}>
            <Profile />
          </Route>
          
          {postJSONs.map( (post) => {
            <Route path={"/posts/" + post.postId}>
              <Post 
                typeOfPost={post.type}
                title={post.title}
                text={post.text}
                imgSrc={post.url}
                myHref={post.url}
                date={post.date}
                key={post._id}
                postId={post._id}
              /> 
            </Route>
          })}

          {/* Jeff sent me a message with an explanation of how to route to the posts properly using useParams, but I didn't really understand it */}
          
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}


/*

TODO:
-Make post component
-Make comment component
-Interface with API



*/