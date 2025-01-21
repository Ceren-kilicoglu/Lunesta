import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';  // Doğru import

import PageContent from './layouts/pagecontent';
import Home from './pages/Home';


function App() {
  return (
    <Switch>
      <PageContent>
        <Route exact path="/">
          <Home />
        </Route>
      </PageContent>
    </Switch>
  );
}

export default App;
