import React, { HTMLProps } from "react"
import { css, cx } from "emotion"

export const container = css`
  text-transform: uppercase;
  font-size: large;
  font-weight: 600;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #0006;
  border-radius: 50%;
  user-select: none;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &.large {
    width: 64px;
    height: 64px;
  }
  cursor: pointer;
  &.small {
    width: 24px;
    height: 24px;
    font-size: small;
  }
`

type Size = "small" | "medium" | "large"
interface IProps extends HTMLProps<HTMLImageElement> {
  type?: Size
}
function Avatar(props: IProps) {
  return (
    <div className={cx(container, props.type, props.className)}>
      {props.src ? <img src={props.src} alt={""} /> : String(props.children)[0]}
    </div>
  )
}

export default Avatar
