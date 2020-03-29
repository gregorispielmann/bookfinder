import React from 'react';
import { Switch } from 'react-router-dom';

/** PAGES */
import Login from '~/pages/Login';
import Books from '~/pages/Books';
import Favorites from '~/pages/Favorites';
import Page404 from '~/pages/Page404';

/** CUSTOM ROUTE COMPONENT */
import Route from '~/routes/Route';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/books" component={Books} isPrivate />
      <Route path="/favorites" component={Favorites} isPrivate />

      <Route path="" component={Page404} />
    </Switch>
  );
}
