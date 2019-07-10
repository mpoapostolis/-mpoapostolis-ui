import React, { ReactNode } from "react"
import { css, cx } from "emotion"

export const option = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: solid 1px #0001;
  min-width: 75px;
  padding: 10px 20px 10px 20px;
  &:hover {
    background: #5551;
  }
`

type ValueType = string | number | boolean | {}

interface IProps {
  children: ReactNode
  value?: ValueType
  onClick: (e?: ValueType) => void
  className?: string
}

function PopOverItem(props: IProps) {
  function onClick(_event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.onClick(props.value)
  }
  return (
    <div onClick={onClick} className={cx(option, props.className)}>
      {props.children}
    </div>
  )
}

export default PopOverItem
