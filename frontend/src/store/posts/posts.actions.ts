import { createAsyncThunk } from '@reduxjs/toolkit'
import { apolloClient } from '@/apollo-client'
import { CREATE_POST, DELETE_POST, GET_POSTS } from '@/services/main.service'
import { PostType } from '@/types/post.types'

const getPosts = createAsyncThunk(
	'posts/getPosts',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await apolloClient.query({
				query: GET_POSTS,
			})

			return data.posts
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

const createPost = createAsyncThunk(
	'posts/createPost',
	async (post: Omit<PostType, 'id'>, { rejectWithValue }) => {
		try {
			const { data } = await apolloClient.mutate({
				mutation: CREATE_POST,
				variables: post,
			})

			const newPost = data?.createPost

			if (!newPost) {
				return rejectWithValue('Error creating post')
			}

			return newPost
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (id: number, { rejectWithValue }) => {
		try {
			const { data } = await apolloClient.mutate({
				mutation: DELETE_POST,
				variables: { id },
			})

			const deletedPost = data?.deletePost

			if (!deletedPost) {
				return rejectWithValue('Error deleting post')
			}

			return deletedPost
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export { getPosts, createPost, deletePost }