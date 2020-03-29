import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import history from '~/services/history';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </Router>
  );
}

export default App;
