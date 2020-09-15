import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import cn from 'classnames'
import {appAPI} from '../../api/app-api'
import {actions} from '../../store/app-reducer'
import {getCurrentMenuItem} from '../../store/app-selectors'
import s from './Content.module.sass'

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
		<div className="header header_default">{currentMenuItem.name}</div>
		<div className={s.content}>
			{typeof currentMenuItem.text === 'string' ? currentMenuItem.text :
				<table className={cn('table', s.table)}>
					<thead>
					<tr>
						{currentMenuItem.text.header.map((item, index) => <th key={index}>{item}</th>)}
					</tr>
					</thead>
					<tbody>
					{currentMenuItem.text.values.map((item, index) =>
						<tr key={index}>
							{Object.keys(item).map(key => <td key={key}>{item[key]}</td>)}
						</tr>
					)}
					</tbody>
				</table>
			}
		</div>
	</>
}
