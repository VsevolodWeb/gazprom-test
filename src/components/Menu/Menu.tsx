import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cn from 'classnames'
import {getCurrentMenuItem, getMenuItemsSelector} from '../../store/app-selectors'
import {NavLink} from 'react-router-dom'
import {appAPI} from '../../api/app-api'
import {actions} from '../../store/app-reducer'
import s from './Menu.module.sass'
import fileImage from './file.svg'

export function Menu() {
	const [currentParentCategoryName, setCurrentParentCategoryName] = useState('')
	const menuItems = useSelector(getMenuItemsSelector)
	const currentMenuItem = useSelector(getCurrentMenuItem)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			const response = await appAPI.getMenu()
			dispatch(actions.setMenu(response))
		}
		fetchData()
	}, [dispatch])

	return <div className={s.menu}>
		<div className={cn('header', 'header_default', s.menu__header)}>Меню</div>
		<ul className={s.menuList}>
			{menuItems.map((parentItem, index) => {
				const isVisibleSubMenu = !currentParentCategoryName ? (currentMenuItem.parentCategory === parentItem.name) : (currentParentCategoryName === parentItem.name)

				return <React.Fragment key={index}>
					<li className={cn(s.menuList__item, isVisibleSubMenu && s.menuList__item_active)}>
						<button className={cn('header', s.menuList__title)}
						        onClick={() => setCurrentParentCategoryName(parentItem.name)}>
							{parentItem.name}
						</button>
						{isVisibleSubMenu &&
							<ul className={s.menuList__subMenu}>
								{parentItem.items.map(
									childItem => (
										<li key={childItem.id}>
											<NavLink to={childItem.id} className={s.menuList__link}>
												<img className={s.menuList__icon} src={fileImage} alt="Пункт меню"/>
												{childItem.name}
											</NavLink>
										</li>
									)
								)}
							</ul>}
					</li>
				</React.Fragment>
			})}
		</ul>
	</div>
}