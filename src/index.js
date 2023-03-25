import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getConfig } from './config';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: 'http://localhost:3000/products',
    ...(config.audience ? { audience: config.audience } : null),
  },
};

root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <Auth0Provider {...providerConfig}>
        <App />
      </Auth0Provider>
    </ProSidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
