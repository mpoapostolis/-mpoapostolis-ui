import React from "react"
import Button from "../../components/Button"
import Highlight from "react-highlight"
import { css } from "emotion"

const container = css`
  display: flex;
  width: 100%;
`

function ButtonRoute() {
  return (
    <div>
      <div className={container}>
        <Button type="primary">Primary</Button>

        <Button type="danger">Danger</Button>
      </div>
      <Highlight className="">
        {`
          import React from "react"
          import Button from "../../components/Button"

          function ButtonRoute() {
            return (
              <div>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
              </div>
            )
          }

          export default ButtonRoute
        `}
      </Highlight>
    </div>
  )
}

export default ButtonRoute
