import { css } from "emotion"

export const headerCont = css`
  height: 100%;
  width: calc(100% - 40px);
  padding: 0 20px 0 20px;
  background: var(--primary-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 2px #0003;
`

export const avatar = css`
  background: #000a;
  cursor: pointer;
  color: #fff;
`
export const popOverIcon = css`
  font-size: 13px;
  width: 25px;
  height: 25px;
`

export const optionClass = css`
  display: flex;
  align-items: center;
  width: 120px;
`
export const imgClass = css`
  width: 42px;
  height: 42px;
  outline: none;
`
export const infoClass = css`
  margin-left: 7.5px;
  font-size: 15px;
  label {
    font-size: 12px;
  }
`
