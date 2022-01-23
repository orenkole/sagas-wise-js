import { useDispatch, useSelector } from "react-redux"

export default function Blog () {
	const blogData = useSelector(store => store.app.blog);
	console.log('blog data', blogData);
	const dispatch = useDispatch()
	return (
		<div>
			Blog
			<button
				onClick={() => {
					dispatch({type: 'LOAD_SOME_DATA'})
				}}
			>
				Load some data
			</button>	
		</div>
	)
}