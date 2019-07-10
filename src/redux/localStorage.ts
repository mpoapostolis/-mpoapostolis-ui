import { IReduxStore } from "./reducers"

export const loadState = (): IReduxStore | undefined => {
  try {
    const serializedState = localStorage.getItem("my_app")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state: IReduxStore) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("my_app", serializedState)
  } catch (e) {} //eslint-disable-line
}
