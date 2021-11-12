// import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../Redux/Store";
import 'tailwindcss/tailwind.css';
import "../styles/styles.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
