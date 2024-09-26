import { createSlice } from '@reduxjs/toolkit'
import { PostType } from '@/types/post.types'
import { createPost, deletePost, getPosts } from './posts.actions'

interface PostsStateType {
	posts: PostType[]
}

const initialState: PostsStateType = {
	posts: [],
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.posts = action.payload
		})

		builder.addCase(getPosts.rejected, state => {
			state.posts = []
		})

		builder.addCase(createPost.fulfilled, (state, action) => {
			state.posts = [...state.posts, action.payload]
		})

		builder.addCase(deletePost.fulfilled, (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload.id)
		})
	},
})

export default postsSlice.reducer
