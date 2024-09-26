import { gql } from '@/__generated__'

const GET_POSTS = gql(`
	query GetPosts {
		posts {
			id
			title
			body
		}
	}
`)

const CREATE_POST = gql(`
	mutation CreatePost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
			title
			body
		}
	}
`)

const UPDATE_POST = gql(`
	mutation UpdatePost($id: Int!, $title: String, $body: String) {
		updatePost(id: $id, title: $title, body: $body) {
			id
			title
			body
		}
	}
`)

const DELETE_POST = gql(`
	mutation DeletePost($id: Int!) {
		deletePost(id: $id) {
			id
			title
			body
		}
	}
`)

export { GET_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST }
