// src/apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
})

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})

export { apolloClient }
