import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import ApolloAppProvider from "./apollo/ApolloProvider.tsx";

import './styles/style.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloAppProvider>
          <App />
      </ApolloAppProvider>
  </React.StrictMode>,
)
