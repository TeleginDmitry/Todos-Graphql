import { useAppDispatch } from '@/hooks/useAppDispatch'
import { getPosts } from '@/store/posts/posts.actions'
import { useEffect } from 'react'

interface Props {
	children: React.ReactNode
}

export function GettingPosts({ children }: Props) {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return children
}
