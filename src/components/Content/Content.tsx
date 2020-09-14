import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {appAPI} from '../../api/app-api'
import {actions} from '../../store/app-reducer'
import {getCurrentMenuItem} from '../../store/app-selectors'

export function Content() {
	const {articleId} = useParams()
	const currentMenuItem = useSelector(getCurrentMenuItem)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			const response = await appAPI.getMenuItem(articleId)
			dispatch(actions.setMenuItem(response))
		}
		fetchData()
	}, [dispatch, articleId])

	return <>
		<div className="header">{currentMenuItem.name}</div>
		<p>{currentMenuItem.text}</p>
	</>
}
