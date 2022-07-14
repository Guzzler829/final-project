import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import InputField from './components/input-field';
import Sidebar from './components/sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRootMatch
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/post">
          <InputField />
        </Route>
      </Switch>
        
      </div>
    </Router>
    
  );
}


/*

TODO:
-Get navbar from week-13 or use Bootstrap navbar
-Make input form component, display component when user clicks create-content button
-Chatroom???????
-



*/