import { ReactNode, useEffect } from "react"
import hljs from "highlight.js"

interface SintaxHighlightProps {
  language?: string
  className?: string
  children: ReactNode
}

function SintaxHighlight({
  language = "jsx",
  className,
  children,
}: SintaxHighlightProps) {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement)
    })
  }, [])

  return (
    <pre>
      <code className={`language-${language} scroll-bar ${className}`}>
        {children}
      </code>
    </pre>
  )
}

export default SintaxHighlight
