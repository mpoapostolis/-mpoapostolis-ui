import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  ReactNode,
  useMemo,
  useCallback
} from "react"
import { cx } from "emotion"
import useClickOutside from "../..//Hooks/useClickOutside"

import { wrapper, imgKlass, popOverClass } from "./css"

const getBounds = (el: HTMLDivElement | null) => {
  return el ? (el.getBoundingClientRect() as DOMRect) : { x: 0, y: 0 }
}

interface ArrowProps {
  open?: Boolean
}

const Arrow: FunctionComponent<ArrowProps> = props => (
  <svg //Arrow down svg
    className={cx(imgKlass, { active: Boolean(props.open) })}
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="5"
    viewBox="0 0 9 5">
    <path fill="#9E9C9C" fillRule="evenodd" d="M4.318 5l4.318-5H0z" />
  </svg>
)

interface IProps {
  value?: String | Boolean | Number | Object
  label?: ReactNode
  className?: string
  renderArrow?: Boolean
  children: ReactNode
}
function Popover(props: IProps) {
  const { value, label, className, children, renderArrow } = props

  const rootRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const clickOutside = useClickOutside<HTMLDivElement>(rootRef.current)

  const togglePopOver = useCallback(() => setIsOpen(!isOpen), [isOpen])

  useEffect(() => setIsOpen(false), [clickOutside, value]) //eslint-disable-line
  // the above useEffect closes the popOver when value prop changes or when a click event occurs outside the component

  const rect = getBounds(rootRef.current)

  const { innerWidth, innerHeight } = window
  const computeRect = useMemo(() => {
    const posX = rect.y + 400 > innerHeight + 300 ? "bottom" : "top" //300 is the max height of popOver\
    const posY = rect.x + 400 > innerWidth ? "right" : "left"
    return { posX, posY }
  }, [rect, innerWidth, innerHeight])

  const { posX, posY } = computeRect

  return (
    <div ref={rootRef}>
      <div className={cx(wrapper, className)}>
        <div onClick={togglePopOver}>
          {React.isValidElement(label) ? <>{label}</> : <label>{label}</label>}
          {renderArrow && <Arrow open={isOpen} />}
        </div>
        <div
          ref={wrapperRef}
          className={cx(popOverClass, posX, posY, { active: isOpen })}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popover
