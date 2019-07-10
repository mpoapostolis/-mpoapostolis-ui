import React from "react"
import { ILayout } from "../Layout"
import { Switch, Route } from "react-router"
import ButtonRoute from "./ButtonRoute"
import { css } from "emotion"

const mainCont = css`
  width: 100%;
  box-shadow: 0px 0 2px 2px #0002;
  background: #fff;
  padding: 20px;
`

interface IMainRoutes extends ILayout {}

function Routes(props: IMainRoutes) {
  return (
    <div className={props.layoutClass}>
      <div className={mainCont}>
        <Switch>
          <Route path="/buttons" component={ButtonRoute} />
        </Switch>
      </div>
    </div>
  )
}

export default Routes
