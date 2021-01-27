import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Header/Header';
import { CatalogWrapper } from './Catalog/CatalogWrapper';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/men" component={CatalogWrapper} />
      <Route path="/women" component={CatalogWrapper} />
      <Route path="/saved-items" />
      <Redirect from="/" to="/men" />
    </Switch>
  </>
);

export { App };
