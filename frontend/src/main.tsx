import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { apolloClient } from './apollo-client.ts'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { GettingPosts } from './providers/GettingPosts.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<GettingPosts>
					<App />
				</GettingPosts>
			</ApolloProvider>
		</Provider>
	</StrictMode>
)
