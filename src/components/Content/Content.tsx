import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'

export function Content() {
	const articleId = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
	}, [dispatch])

	return <div>1</div>
}
