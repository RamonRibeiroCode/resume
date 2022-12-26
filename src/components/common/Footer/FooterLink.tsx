import type { ReactNode } from "react"
import Icon from "../../ui/Icon"

interface FooterLinkProps {
  name: string
  href: string
  lastChild: boolean
  extraClasses?: string
  children?: ReactNode
}

function FooterLink({
  name,
  href,
  lastChild,
  extraClasses = "",
  children,
}: FooterLinkProps) {
  return (
    <a
      className={`flex justify-center items-center w-14 border-l border-line-gray ${
        lastChild ? "xl:border-r" : ""
      } ${extraClasses}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Link para rede social ${name}`}
    >
      {children}

      <Icon
        className="opacity-40 hover:opacity-100"
        name={name}
        width={24}
        height={24}
      />
    </a>
  )
}

export default FooterLink
