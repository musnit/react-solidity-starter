import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components';
import FullContract from './FullContract';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />
          </div>
          <FullContract contract="SupplyChain" />
        </div>
      </div>
    )
  }
}

export default Home;
