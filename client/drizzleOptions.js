import ExampleContract from '../build/contracts/ExampleContract.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    ExampleContract,
  ],
  events: {
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions;
