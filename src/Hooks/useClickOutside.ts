import { useEffect, useState, useCallback } from "react"

function useClickOutside<T extends HTMLElement>(element: T | null) {
  const [clickOutside, setClickOutside] = useState(false)

  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      if (element) {
        setClickOutside(!element.contains(target))
      }
    },
    [element]
  )

  useEffect(() => {
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [listener])
  return clickOutside
}

export default useClickOutside
