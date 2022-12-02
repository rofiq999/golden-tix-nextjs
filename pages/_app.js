import "../styles/globals.css";
import { Provider } from "react-redux";
import store, { persistedStore } from "/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
