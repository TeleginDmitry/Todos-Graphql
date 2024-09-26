import { useAppDispatch } from '@/hooks/useAppDispatch'
import { deletePost } from '@/store/posts/posts.actions'
import { PostType } from '@/types/post.types'

export function Post({ body, title, id }: PostType) {
	const dispatch = useAppDispatch()

	function onDelete() {
		dispatch(deletePost(id))
	}

	return (
		<article className='p-4 flex gap-3 items-center'>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<button onClick={onDelete}>Удалить</button>
			</div>
		</article>
	)
}
