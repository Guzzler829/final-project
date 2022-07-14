import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { lazy, Suspense } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Home = lazy(() => import('./components/home'));
const InputField = lazy(() => import('./components/input-field'));
const Sidebar = lazy(() => import('./components/sidebar'));
const FourZeroFour = lazy(() => import('./components/404'));

export default function App() {
  return (
    <Suspense fallback={(
      <div>
        <div className='spinner'></div>
        <div className='spinner-2'></div>
      </div>
    )}>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Home />}>
            <Route path="/post" component={<InputField />}></Route>
            <Route path="*" component={<FourZeroFour />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    
    
  );
}


/*

TODO:
-Make post component
-Make comment component
-Interface with API



*/