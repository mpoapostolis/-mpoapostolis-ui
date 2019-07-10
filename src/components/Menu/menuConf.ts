import { ROLES } from "../../redux/reducers/account"

export type MenuSection = "Welcome" | "Button"

export type MenuProps = {
  name: MenuSection
  requiredRole: ROLES
  activeOn: string[]
}

export const menuItems: MenuProps[] = [
  {
    name: "Welcome",
    requiredRole: ROLES.admin,
    activeOn: ["/"]
  },

  {
    name: "Button",
    requiredRole: ROLES.admin,
    activeOn: ["/buttons"]
  }
]
