import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/store'
import reportWebVitals from "./reportWebVitals"

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

reportWebVitals()