import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Welcome = React.lazy(() => import('./view/welcome/welcome'));
const App = () => (
  <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome" exact>
        <Welcome />
      </Route>
    </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;