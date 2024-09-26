import { Post } from '@/components/ui/Post'
import { useAppSelector } from '@/hooks/useAppSelector'
import { postsSelector } from '@/store/posts/posts.selectors'

function PostList() {
	const posts = useAppSelector(postsSelector)

	if (!posts.length) return <p>No posts</p>

	return (
		<ul className='flex flex-col gap-3'>
			{posts.map(({ body, id, title }) => (
				<Post key={id} body={body} id={id} title={title}></Post>
			))}
		</ul>
	)
}

export { PostList }
