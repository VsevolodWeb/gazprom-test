import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cn from 'classnames'
import {getMenuItemsSelector} from '../../store/app-selectors'
import {NavLink} from 'react-router-dom'
import {appAPI} from '../../api/app-api'
import {actions} from '../../store/app-reducer'
import s from './Menu.module.sass'

export function Menu() {
	const menuItems = useSelector(getMenuItemsSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			const response = await appAPI.getMenu()
			dispatch(actions.setMenu(response))
		}
		fetchData()
	}, [dispatch])

	return <div className={s.menu}>
		<div className={cn("header", s.menu__header)}>Меню</div>
		<ul className={s.menuItems}>
			{menuItems.map((parentItem, index) => {
				return <React.Fragment key={index}>
					<li>
						{parentItem.name}
						<ul>
							{parentItem.items.map(
								childItem => (
									<li key={childItem.id}>
										<NavLink to={childItem.id}>{childItem.name}</NavLink>
									</li>
								)
							)}
						</ul>
					</li>
				</React.Fragment>
			})}
		</ul>
	</div>
}