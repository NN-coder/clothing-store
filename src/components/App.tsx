import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { StyledHeader } from './Header/StyledHeader';
import { CatalogWrapper } from './Catalog/CatalogWrapper';
import { SavedItemsWrapper } from './SavedItems/SavedItemsWrapper';

const App: React.FC = () => (
  <IconContext.Provider value={{ size: '20px' }}>
    <StyledHeader />
    <Switch>
      <Route path="/men" component={CatalogWrapper} />
      <Route path="/women" component={CatalogWrapper} />
      <Route path="/saved-items" component={SavedItemsWrapper} />
      <Redirect from="/" to="/men" />
    </Switch>
  </IconContext.Provider>
);

export { App };
