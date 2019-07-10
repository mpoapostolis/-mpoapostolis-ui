import { css } from "emotion"

export const layoutContainer = css`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "aside header header header"
    "aside main main main"
    "aside main main main"
    "aside main main main";
  overflow: hidden;
  grid-template-columns: 205px repeat(3, 1fr);
  grid-template-rows: 60px repeat(3, 1fr);
  transition: 0.25s;
  width: calc(100vw + 205px);
  transform: translate3d(-205px, 0, 0);
  &.active {
    transform: translate3d(0, 0, 0);
    width: 100vw;
  }
`

export const aside = css`
  grid-area: aside;
  overflow-y: auto;
`

export const header = css`
  grid-area: header;
`

export const main = css`
  z-index: 0;
  grid-area: main;
  overflow-y: auto;
  padding: 20px;
  display: flex;
`
