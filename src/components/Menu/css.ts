import { css } from "emotion"

export const container = css`
  box-shadow: 0px 0 2px 2px #0007;
  text-align: center;
  background: #fff;
`

export const titleClass = css`
  font-size: large;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #0004;
`

export const menuItemCont = css`
  padding-top: 20px;
  display: block;
`
export const selectionItem = css`
  all: unset;
  width: calc(100% - 10px);
  display: flex;
  align-items: center;
  height: 35px;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0001;
  }
`

export const activeClass = css`
  width: calc(100% - 13px);
  border-left: solid 3px #05e;
  background: #05e2;
  color: #05e;
  font-weight: 600;
  transition: 0.125s;
  &:hover {
    background: #05e2;
  }
`
