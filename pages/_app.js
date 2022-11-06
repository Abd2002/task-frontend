import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import '../styles/bootstrap.min.css';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';

let supportedChainIds = [1, 4, 137];
let connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors} >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
