import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
