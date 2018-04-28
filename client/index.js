import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import { ConnectedRouter } from 'react-router-redux';
import Web3 from 'web3';

import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';

import store, { history } from './store';
import drizzleOptions from './drizzleOptions';

import App from './components/App';
import HomeContainer from './components/HomeContainer';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
      <LoadingContainer>
        {/* <ConnectedRouter history={history}> */}
          {/* <Route path="/" component={App} />
          <Route exact component={HomeContainer} /> */}
          <App>
            <HomeContainer />
          </App>
        {/* </ConnectedRouter> */}
      </LoadingContainer>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
