import { useAppDispatch } from '@/hooks/useAppDispatch'
import { createPost } from '@/store/posts/posts.actions'
import { useState } from 'react'

export function PostForm() {
	const dispatch = useAppDispatch()

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		dispatch(createPost({ title, body }))

		setTitle('')
		setBody('')
	}

	return (
		<form className='flex flex-col gap-3' onSubmit={handleSubmit}>
			<label className='flex flex-col gap-2'>
				Заголовок
				<input
					onChange={event => setTitle(event.target.value)}
					value={title}
					type='text'
					name='title'
				/>
			</label>
			<label className='flex flex-col gap-2'>
				Тело
				<input
					onChange={event => setBody(event.target.value)}
					value={body}
					type='text'
					name='body'
				/>
			</label>

			<button type='submit'>Создать</button>
		</form>
	)
}
