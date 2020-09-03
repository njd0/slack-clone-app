import React, {useEffect} from 'react';
import './styles/index.scss';
import Router from "./routes/index";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <header className="app-header">
          {/* Add small apps like global search, calculator, etc... */}
        </header>
        <div className="app-content-wrapper">
          <Router />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
