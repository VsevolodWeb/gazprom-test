import React from 'react'
import {useSelector} from 'react-redux'
import {getMenuItemsSelector} from '../../store/app-selectors'
import {NavLink} from 'react-router-dom'

export function Menu() {
	const menuItems = useSelector(getMenuItemsSelector)

	return (
		<ul>
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
	)
}