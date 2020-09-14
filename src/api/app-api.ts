import {instance} from './api'
import {MenuType} from '../store/app-reducer'


export const appAPI = {
	async getMenu() {
		return await instance.get<MenuType[]>('menu.json').then(response => response.data)
	}
}