import { ApolloServer, gql } from 'apollo-server'
import { prisma } from './prisma/client.js'

// The GraphQL schema
const typeDefs = gql`
	type Query {
		posts: [Post!]!
	}

	type Post {
		id: Int!
		title: String!
		body: String!
	}

	type Mutation {
		createPost(title: String!, body: String!): Post!

		updatePost(id: Int!, title: String, body: String): Post!

		deletePost(id: Int!): Post!
	}

	type Subscription {
		posts: [Post!]!
	}
`

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		posts: () => {
			return prisma.post.findMany()
		},
	},

	Mutation: {
		createPost: (_, args) => {
			return prisma.post.create({
				data: {
					title: args.title,
					body: args.body,
				},
			})
		},

		updatePost: (_, args) => {
			return prisma.post.update({
				where: {
					id: args.id,
				},
				data: {
					title: args.title,
					body: args.body,
				},
			})
		},

		deletePost: (_, args) => {
			return prisma.post.delete({
				where: {
					id: args.id,
				},
			})
		},
	},
}

async function startServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	})

	await server.listen()
	console.log(`🚀 Server ready at ${server.url}`)
}

startServer()
