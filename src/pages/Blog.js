import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const Blog = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch({type: 'LOAD_BLOG_DATA'})
	}, [])
	return (
		<div>Blog</div>
	)
}