import React, { FunctionComponent, DetailedHTMLProps } from "react"
import { cx } from "emotion"
import { floatType, dangerType, container, primary, imgClass } from "./css"

type ButtonType = "primary" | "danger" | "float"

function chooseTypeClass(type: string) {
  switch (type) {
    case "float":
      return floatType

    case "primary":
      return primary

    case "danger":
      return dangerType

    default:
      return ""
  }
}

function IconWrapper(props: { src?: string }) {
  return props.src ? (
    <img className={imgClass} src={props.src} alt=":)" />
  ) : null
}

interface IProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: (e?: any) => void
  className?: string
  type?: ButtonType
  icon?: string
  disabled?: boolean
}

const Button: FunctionComponent<IProps> = props => {
  const { icon, type = "default", onClick, className, disabled = false } = props
  const typeClass = chooseTypeClass(type)

  return (
    <button
      title={props.title}
      disabled={disabled}
      className={cx(container, typeClass, className)}
      onClick={onClick}>
      <IconWrapper src={icon} />
      {props.children}
    </button>
  )
}
export default Button
