import { ROLES } from "../../redux/reducers/account"

export type MenuSection =
  | "int.dashBoard"
  | "int.customers"
  | "int.products"
  | "int.offers"
  | "int.internationalization"

export type MenuProps = {
  name: MenuSection
  requiredRole: ROLES
  activeOn: string[]
}

export const menuItems: MenuProps[] = [
  {
    name: "int.dashBoard",
    requiredRole: ROLES.admin,
    activeOn: ["/"]
  },

  {
    name: "int.customers",
    requiredRole: ROLES.admin,
    activeOn: ["/customers", "/customers/:id"]
  },

  {
    name: "int.products",
    requiredRole: ROLES.admin,
    activeOn: ["/products", "/products/new-product", "/products/:id"]
  },

  {
    name: "int.offers",
    requiredRole: ROLES.admin,
    activeOn: ["/offers", "/offers/new-offer", "/offers/:id"]
  },

  {
    name: "int.internationalization",
    requiredRole: ROLES.admin,
    activeOn: ["/i18n"]
  }
]
