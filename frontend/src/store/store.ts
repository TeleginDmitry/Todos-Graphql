import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './posts/posts.slice'

export const store = configureStore({
	reducer: {
		posts: postsSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
