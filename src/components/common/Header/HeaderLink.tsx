import Link from "next/link"

interface HeaderLinkProps {
  title: string
  href: string
  penultimate: boolean
  active: boolean
}

function HeaderLink({ title, href, penultimate, active }: HeaderLinkProps) {
  return (
    <li
      key={href}
      className={`h-full border-l border-line-gray relative last:ml-auto ${
        penultimate ? "border-r" : ""
      }`}
    >
      <Link
        className={`h-full px-8 text-base flex items-center ${
          active ? "text-secondary-white" : "text-secondary-gray"
        }`}
        href={href}
      >
        {title}
      </Link>

      <div
        className={`absolute left-0 bottom-0 h-[3px] bg-accent-orange transition-all ${
          active ? "w-full" : "w-0"
        }`}
      />
    </li>
  )
}

export default HeaderLink
