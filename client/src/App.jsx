// import './assets/css/app.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//Importing Components...
import Nav from './Components/Nav';
import Image from './Components/Image';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Nav /> */}
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
