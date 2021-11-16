// import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../Redux/store";
import 'tailwindcss/tailwind.css';
import "../styles/styles.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="font-Poppins">
      <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
