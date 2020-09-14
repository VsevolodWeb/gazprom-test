import {InferActionsTypes} from './store'


export type AppInitialStateType = {
	menu: MenuType[]
	currentMenuItem: {
		name: string
		text: string | MenuItemTextType
	}
}
export type MenuType = {
	name: string
	items: DataItemType[]
}
type DataItemType = {
	id: string
	name: string
}
type MenuItemTextType = {
	headers: string[]
	values: DataItemTextValuesType[]
}
type DataItemTextValuesType = {
	[key: string]: string
}

type ActionsTypes = InferActionsTypes<typeof actions>

const initialState: AppInitialStateType = {
	menu: [],
	currentMenuItem: {
		name: '',
		text: ''
	}
}


const appReducer = (state = initialState, action: ActionsTypes): AppInitialStateType => {
	switch (action.type) {
		case 'app/GET_MENU': {
			return {...state, menu: action.menu}
		}
		default: {
			return state
		}
	}
}


export const actions = {
	setMenu: (menu: MenuType[]) => ({type: 'app/GET_MENU', menu} as const),
	setMenuItemText: (menu: MenuType[]) => ({type: 'app/GET_MENU', menu} as const)
}


export default appReducer