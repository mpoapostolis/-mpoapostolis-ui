import React, { useContext } from "react"

import {
  container,
  activeClass,
  selectionItem,
  menuItemCont,
  titleClass
} from "./css"
import { match, matchPath, RouteChildrenProps } from "react-router"
import I18n from "../../I18n"
import { ILayout } from "../../Layout"
import { cx } from "emotion"
import { menuItems, MenuProps } from "./menuConf"
import { NavLink } from "react-router-dom"
import { Location } from "history"
import AuthWrapper from "../AuthWrapper"

interface IMenuItemProps extends MenuProps {
  location: Location
}

function MenuItem(props: IMenuItemProps) {
  const t = useContext(I18n)
  const isActive = (_match: match, location: Location) => {
    return Boolean(
      matchPath(location.pathname, {
        path: props.activeOn,
        exact: true
      })
    )
  }
  const isSame = props.activeOn[0] === props.location.pathname
  return (
    <AuthWrapper requiredRole={props.requiredRole}>
      <NavLink
        to={props.activeOn[0]}
        onClick={e => isSame && e.preventDefault()}
        isActive={isActive}
        activeClassName={activeClass}
        className={selectionItem}>
        {t(props.name)}
      </NavLink>
    </AuthWrapper>
  )
}

interface IProps extends ILayout, RouteChildrenProps {
  authorities?: string[]
  name?: string
  imgUrl?: string
}

const Menu = React.memo(function(props: IProps) {
  return (
    <aside className={cx(props.layoutClass, container)}>
      <h1 className={titleClass}>@mpoapostolis-ui</h1>
      <div className={menuItemCont}>
        {menuItems.map((obj, idx) => (
          <MenuItem key={idx} {...obj} location={props.history.location} />
        ))}
      </div>
    </aside>
  )
})

export default Menu
