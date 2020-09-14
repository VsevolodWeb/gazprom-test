import {InferActionsTypes} from './store'


export type AppInitialStateType = {
	menu: MenuType[]
	currentMenuItem: CurrentMenuItemType
}
export type MenuType = {
	name: string
	items: MenuItemType[]
}
type MenuItemType = {
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
export type CurrentMenuItemType = {
	name: string
	text: string | MenuItemTextType
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
		case 'app/SET_MENU': {
			return {...state, menu: action.menu}
		}
		case 'app/SET_MENU_ITEM': {
			return {...state, currentMenuItem: action.currentMenuItem}
		}
		default: {
			return state
		}
	}
}


export const actions = {
	setMenu: (menu: MenuType[]) => ({type: 'app/SET_MENU', menu} as const),
	setMenuItem: (currentMenuItem: CurrentMenuItemType) => ({type: 'app/SET_MENU_ITEM', currentMenuItem} as const)
}


export default appReducer