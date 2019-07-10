import { css } from "emotion"

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0 10px 0 10px;
  max-width: 150px;
  height: 34px;
  border-radius: 5px;
  border: solid 1px rgba(218, 218, 218, 0.79);
  background: #fff;
  cursor: pointer;
  color: #333;
  font-size: small;
  &.disabled,
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const imgClass = css`
  width: 20px;
  height: 20px;
  object-fit: scale-down;
  margin-right: 10px;
`

export const floatType = css`
  width: 34px;
  height: 34px;
  box-shadow: 0 2px 4px 0 rgba(34, 158, 221, 0.62);
  background-color: #008fd8;
  font-size: 20px;
  color: #fff;
  font-size: xx-small;
  border-radius: 50%;
`

export const primary = css`
  background-color: #008fd8;
  color: #fff;
`

export const dangerType = css`
  border: solid 1px #dc1937;
  color: #dc1937;
`
