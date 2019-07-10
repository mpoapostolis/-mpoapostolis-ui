import React, { useState } from "react"
import Routes from "../routes"
import { layoutContainer, main, aside, header } from "./css"
import { cx } from "emotion"
import Menu from "../components/Menu"
import Header from "../components/Header"
import { RouteChildrenProps } from "react-router"

export interface ILayout {
  layoutClass: string
}

interface IProps extends RouteChildrenProps {}
function Layout(props: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <div className={cx(layoutContainer, { active: isMenuOpen })}>
      <Header
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        layoutClass={header}
      />
      <Menu {...props} layoutClass={aside} />
      <Routes layoutClass={main} />
    </div>
  )
}

export default Layout
