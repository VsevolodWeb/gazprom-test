import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Route } from 'react-router-dom'
import {appAPI} from './api/app-api'
import {actions} from './store/app-reducer'
import {Menu} from './components/Menu/Menu'
import {Content} from './components/Content/Content'


function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			const response = await appAPI.getMenu()
			dispatch(actions.setMenu(response))
		}
		fetchData()
	}, [dispatch])

	return <>
		<Menu/>
		<Route path="/:articleId">
			<Content/>
		</Route>
	</>
}

export default App