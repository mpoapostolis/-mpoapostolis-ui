import React from "react"
import { ILayout } from "../Layout"
import { Switch } from "react-router"

interface IMainRoutes extends ILayout {}

function Routes(props: IMainRoutes) {
  return (
    <div className={props.layoutClass}>
      <Switch />
    </div>
  )
}

export default Routes
