import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Header/Header';
import { MensCatalog, WomensCatalog } from './Catalog/CatalogWrapper';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/men" component={MensCatalog} />
      <Route path="/women" component={WomensCatalog} />
      <Redirect from="/" to="/men" />
    </Switch>
  </>
);

export { App };
