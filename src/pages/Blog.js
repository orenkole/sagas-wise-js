import { useSelector } from "react-redux"

export default function Blog () {
	const blogData = useSelector(store => store.app.blog);
	console.log('blog data', blogData);
	return (
		<div>Blog</div>
	)
}