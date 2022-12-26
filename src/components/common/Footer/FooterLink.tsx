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
    <li
      className={`w-14 h-full ${
        lastChild ? "xl:border-r" : ""
      } border-l border-line-gray ${extraClasses}`}
    >
      <a
        className="h-full flex justify-center items-center"
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
    </li>
  )
}

export default FooterLink
