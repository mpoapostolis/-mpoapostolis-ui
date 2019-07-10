import { AnyAction } from "redux"
import { LOGIN } from "../names"

export enum ROLES {
  admin = "ADMIN",
  operator = "OPERATOR",
  waiter = "WAITER"
}

export interface IAccount {
  name: string
  token: string
  role: string
  imgSrc?: string
}

export const initAccount = {
  name: "name",
  token: "",
  role: ROLES.admin
}

function auth(state: IAccount = initAccount, action: AnyAction) {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: "valid" }
    default:
      return state
  }
}

export default auth
