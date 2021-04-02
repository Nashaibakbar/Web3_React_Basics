import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export const injectedConnector = new InjectedConnector({
  supportedChainIds:[
    1, // Mainnet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan 
  ],
})

const getLibrary = (provider) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000;
  return library
  
}

export const Wallet =() => {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector)
  }
  return (
    <div>
      <div> ChainId: {chainId}</div>
      <div> Account: {account}</div>
      {active ? (
        <dive>✅ </dive>
      ): (
        <button type ="button" onClick={onClick}>Connect</button>
      )}
    </div>
  )
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet />
    </Web3ReactProvider>
  )
}

export default App;
