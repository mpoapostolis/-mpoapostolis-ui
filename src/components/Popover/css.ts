import { css } from "emotion"

export const imgKlass = css`
  margin-left: 5px;
  vertical-align: middle;
  transform: rotate3d(0, 0, 0);
  transition: 0.2s;
  &.active {
    transform: rotate(-180deg);
  }
`

export const popOverClass = css`
  position: absolute;
  transform: scale3d(1, 0, 1);
  border: solid 1px rgb(200, 200, 200);
  box-shadow: rgba(26, 26, 29, 0.3) 0 15px 46px -10px;
  background: white;
  z-index: 99999999;
  max-height: 300px;
  overflow-y: auto;
  &.right {
    right: 0;
  }

  &.left {
    left: 0;
  }

  &.top {
    top: 20px;
  }
  &.bottom {
    bottom: 20px;
  }
  &.active {
    transform: scale3d(1, 1, 1);
  }
  transition: transform 0.125s;
`

export const wrapper = css`
  user-select: none;
  position: relative;
  * {
    cursor: pointer;
  }
`
