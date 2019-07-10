import React, { useContext } from "react"
import { ILayout } from "../../Layout"
import { headerCont, optionClass, infoClass, imgClass } from "./css"
import { cx } from "emotion"
import { useSelector } from "react-redux"
import { IReduxStore } from "../../redux/reducers"
import I18n from "../../I18n"
import IconButton from "../IconButton"
import Avatar from "../Avatar"
import Popover from "../Popover"
import PopOverItem from "../Popover/Item"

interface IProps extends ILayout {
  toggleMenu: () => void
}
function Header(props: IProps) {
  const account = useSelector((state: IReduxStore) => state.account)
  const t = useContext(I18n)

  return (
    <header className={cx(props.layoutClass, headerCont)}>
      <IconButton onClick={props.toggleMenu} src="/images/menu.svg" />

      <Popover label={<Avatar>{account.name[0]}</Avatar>}>
        <PopOverItem onClick={console.log}>
          <div className={optionClass}>
            <IconButton className={imgClass} src="/images/account.svg" />
            <div className={infoClass}>
              <h4>{account.name}</h4>
              <label>{account.role}</label>
            </div>
          </div>
        </PopOverItem>

        <PopOverItem onClick={console.log}>
          <div className={optionClass}>
            <IconButton className={imgClass} src="/images/logout.svg" />
            <span className={infoClass}>{t("int.logout")}</span>
          </div>
        </PopOverItem>
      </Popover>
    </header>
  )
}
export default Header
