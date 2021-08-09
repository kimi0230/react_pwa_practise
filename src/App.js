import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Welcome = React.lazy(() => import('./view/welcome/welcome'));
const App = () => (
  <BrowserRouter>
    {/* fix: [ERROR] A React component suspended while rendering, but no fallback UI was specified.
    https://stackoverflow.com/questions/54432861/a-react-component-suspended-while-rendering-but-no-fallback-ui-was-specified */}
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

/*
[ERROR] A React component suspended while rendering, but no fallback UI was specified
https://stackoverflow.com/questions/54432861/a-react-component-suspended-while-rendering-but-no-fallback-ui-was-specified
1. Without Using suspense, you can configure that i18n.js like this:

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    react: {
      useSuspense: false //   <---- this will do the magic
    }
});

2. Using Suspense, for example:

<Suspense fallback={<div>Loading... </div>}>
      <App />
</Suspense>
*/