import React from "react"

export type Translate = (key: string) => string
const t: Translate = key => key

const I18n = React.createContext<Translate>(t)

export default I18n
