import React from "react"
import { Switch, Route } from "react-router"
import Layout from "./Layout"

function App() {
  return (
    <main>
      <Switch>
        <Route component={Layout} />
      </Switch>
    </main>
  )
}

export default App
