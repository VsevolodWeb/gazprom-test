import {instance} from './api'
import {CurrentMenuItemType, MenuType} from '../store/app-reducer'


export const appAPI = {
	async getMenu() {
		return await instance.get<MenuType[]>('menu.json').then(response => response.data)
	},
	async getMenuItem(articleId: string) {
		return await instance.get<CurrentMenuItemType>(`${articleId}.json`).then(response => response.data)
	}
}