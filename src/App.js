import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Nav  from './Nav';
import BookList from './components/BookList';
import AddBooks from './components/AddBooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Nav kind="kind" honest="honest" pure="pure"/>
      <BookList/>
      <AddBooks />
    </div>
    </ApolloProvider>
  );
}

export default App;
