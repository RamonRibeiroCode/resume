import Link from "next/link"
import { useRouter } from "next/router"

import Icon from "../../ui/Icon"
import HeaderLink from "./HeaderLink"

const headerLinks = [
  {
    title: "_hello",
    href: "/",
  },
  {
    title: "_about-me",
    href: "/about-me",
  },
  {
    title: "_projects",
    href: "/projects",
  },
]

function Header() {
  const router = useRouter()

  return (
    <header className="flex justify-between items-center h-14 px-4 border-b border-line-gray z-50 xl:pl-5 xl:pr-0">
      <div className="flex h-full items-center flex-1">
        <span className="block text-base text-secondary-gray xl: pr-32">
          ramon-ribeiro
        </span>

        <ul className="hidden h-full xl:flex flex-1">
          {headerLinks.map((link, index) => (
            <HeaderLink
              key={link.title}
              title={link.title}
              href={link.href}
              active={router.pathname === link.href}
              lastChild={index + 1 === headerLinks.length}
            />
          ))}

          <HeaderLink
            key="_contact-me"
            title="_contact-me"
            href="/contact-me"
            active={router.pathname === "/contact-me"}
            lastChild={false}
            extraClasses="ml-auto"
          />
        </ul>
      </div>

      <div>
        <Icon className="xl:hidden" name="MenuHam" width={18} height={16} />
      </div>
    </header>
  )
}

export default Header
