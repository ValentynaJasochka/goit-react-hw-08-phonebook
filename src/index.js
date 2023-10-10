import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
