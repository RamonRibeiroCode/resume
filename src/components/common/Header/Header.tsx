import { usePathname } from "next/navigation"
import { useState } from "react"

import Drawer from "./Drawer"
import DrawerLink from "./DrawerLink"
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
  {
    title: "_donate",
    href: "/donate",
  },
  {
    title: "_contact-me",
    href: "/contact-me",
  },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative flex justify-between items-center h-14 px-4 border-b border-line-gray z-50 xl:px-0">
      <div className="flex h-full items-center flex-1">
        <span className="block text-base text-secondary-gray xl:pl-5 xl:max-w-[272px] xl:w-full">
          ramon-ribeiro
        </span>

        <ul className="hidden h-full xl:flex flex-1">
          {headerLinks.map((link, index) => (
            <HeaderLink
              key={link.title}
              title={link.title}
              href={link.href}
              active={pathname === link.href}
              penultimate={index + 2 === headerLinks.length}
            />
          ))}
        </ul>
      </div>

      <Drawer open={menuOpen} setOpen={setMenuOpen}>
        <ul>
          {headerLinks.map((link) => (
            <DrawerLink
              key={link.title}
              title={link.title}
              href={link.href}
              active={pathname === link.href}
              setOpen={setMenuOpen}
            />
          ))}
        </ul>
      </Drawer>
    </header>
  )
}

export default Header
