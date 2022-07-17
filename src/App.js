import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { Suspense } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home';
import InputField from './components/input-field';
import Sidebar from './components/sidebar';
import NotFound from './components/404';

export default function App() {
  return (
    <Suspense fallback={(
      <div>
        <div className='spinner'></div>
        <div className='spinner-2'></div>
      </div>
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