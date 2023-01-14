import { useEffect, useLayoutEffect, useRef } from "react"

const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useBrowserLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
