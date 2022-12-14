import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [5]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
    desiredChainId={ChainId.BinanceSmartChainTestnet}
      // connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
