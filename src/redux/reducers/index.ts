import account, { IAccount, initAccount } from "./account"
import { combineReducers, AnyAction } from "redux"
import { LOGOUT } from "../names"

export interface IReduxStore {
  account: IAccount
}

const initReduxStore = {
  account: initAccount
}

const appReducer = combineReducers<IReduxStore>({
  account
})

function rootReducer(_state: IReduxStore = initReduxStore, action: AnyAction) {
  const currentStore = action.type === LOGOUT ? initReduxStore : undefined
  return appReducer(currentStore, action)
}

export default rootReducer
