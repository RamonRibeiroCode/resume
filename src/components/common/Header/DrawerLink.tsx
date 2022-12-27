import { Dispatch, SetStateAction } from "react"
import Link from "next/link"

interface DrawerLinkProps {
  title: string
  href: string
  active: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function DrawerLink({ title, href, active, setOpen }: DrawerLinkProps) {
  return (
    <li
      className="border-b border-line-gray"
      key={title}
      onClick={() => setOpen(false)}
    >
      <Link
        className="block p-[18px] text-base text-secondary-white"
        href={href}
      >
        <span className={`relative ${active ? "text-accent-orange" : ""}`}>
          {active && <span className=" font-bold mr-2">{">"}</span>}

          {title}
        </span>
      </Link>
    </li>
  )
}

export default DrawerLink
