import Link from "next/link"
import { useRouter } from "next/router"

import Icon from "../../ui/Icon"

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
            <li
              key={link.href}
              className={`h-full border-l border-line-gray relative ${
                index + 1 === headerLinks.length ? "xl:border-r" : ""
              }`}
            >
              <Link
                className={`h-full px-8 text-base flex items-center ${
                  router.pathname === link.href
                    ? "text-secondary-white"
                    : "text-secondary-gray"
                }`}
                href={link.href}
              >
                {link.title}
              </Link>

              <div
                className={`absolute left-0 bottom-0 h-[3px] bg-accent-orange transition-all ${
                  router.pathname === link.href ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}

          <li
            key="/contact-me"
            className="h-full border-l border-line-gray relative ml-auto"
          >
            <Link
              className={`h-full px-8 text-base flex items-center ${
                router.pathname === "/contact-me"
                  ? "text-secondary-white"
                  : "text-secondary-gray"
              }`}
              href="/contact-me"
            >
              _contact-me
            </Link>

            <div
              className={`absolute left-0 bottom-0 h-[3px] bg-accent-orange transition-all ${
                router.pathname === "/contact-me" ? "w-full" : "w-0"
              }`}
            />
          </li>
        </ul>
      </div>

      <div>
        <Icon className="xl:hidden" name="MenuHam" width={18} height={16} />
      </div>
    </header>
  )
}

export default Header
