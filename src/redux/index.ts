import { createStore, compose } from "redux"
import reducers from "./reducers"
import { loadState, saveState } from "./localStorage"

const persistedData = loadState()

const ench =
  process.env.NODE_ENV === "development"
    ? //
      //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
const store = createStore(reducers, persistedData, ench)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
