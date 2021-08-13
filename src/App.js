import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import "./App.css";

import Home from "./view/demo/home";
const TopPicks = React.lazy(() => import("./view/demo/top_picks"));

const App = () => (
  <BrowserRouter>
    <Route path="/" exact>
      <Home />
    </Route>{" "}
    {/* fix: [ERROR] A React component suspended while rendering, but no fallback UI was specified.
    https://stackoverflow.com/questions/54432861/a-react-component-suspended-while-rendering-but-no-fallback-ui-was-specified */}
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/demo/top_picks" exact>
          <TopPicks />
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
