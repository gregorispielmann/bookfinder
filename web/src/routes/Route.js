import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

/** LAYOUTS */
import AuthLayout from '~/pages/_layouts/Auth';
import DefaultLayout from '~/pages/_layouts/Default';

export default function Routes({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const id = localStorage.getItem('userId');

  if (id === null && isPrivate) return <Redirect to="/" />;

  const Layout = id && id.length >= 0 ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Routes.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Routes.defaultProps = {
  isPrivate: false,
};
