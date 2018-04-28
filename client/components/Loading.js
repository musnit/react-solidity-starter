import React, { Component, Children } from 'react';

class Loading extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    if (this.props.web3.status === 'failed')
    {
      return(
        <div>
          <h1>⚠️</h1>
          <p>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.</p>
        </div>
      );
    }

    if (this.props.drizzleStatus.initialized)
    {
      return Children.only(this.props.children);
    }

    return(
      <div>
        <h1>⚙️</h1>
        <p>Loading dapp...</p>
      </div>
    );
  }
}

export default Loading;
