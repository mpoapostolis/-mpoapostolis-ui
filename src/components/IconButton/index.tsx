import React, { HTMLProps } from "react"
import { cx, css } from "emotion"

const btnClass = css`
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    width: 100%;
  }
`

interface IProps extends HTMLProps<HTMLButtonElement> {}
function IconButton(props: IProps) {
  return (
    <button onClick={props.onClick} className={cx(btnClass, props.className)}>
      <img src={props.src} alt="" />
    </button>
  )
}

export default IconButton
