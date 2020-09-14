import {AppStateType} from './store'


export const getMenuItemsSelector = (state: AppStateType) => state.app.menu
export const getCurrentMenuItem = (state: AppStateType) => state.app.currentMenuItem