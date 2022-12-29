import FooterLink from "./FooterLink"

const socialMedias = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ramon-ribeiro-dev/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ramon_ribeiro15/",
  },
]

function Footer() {
  return (
    <footer className="flex items-center pl-4 h-12 border-t border-line-gray z-50 xl:pl-5">
      <span className="text-base text-secondary-gray flex-1 xl:flex-none xl:pr-[35px]">
        find me in:
      </span>

      <ul className="flex h-full xl:flex-1">
        {socialMedias.map((media, index) => (
          <FooterLink
            key={media.name}
            name={media.name}
            href={media.href}
            lastChild={index + 1 === socialMedias.length}
          />
        ))}

        <FooterLink
          name="Github"
          href="https://github.com/RamonRibeiroCode"
          lastChild={false}
          extraClasses="xl:ml-auto xl:w-auto xl:px-6"
        >
          <span className="hidden text-xs text-secondary-gray mr-1 xl:block">
            @RamonRibeiroCode
          </span>
        </FooterLink>
      </ul>
    </footer>
  )
}

export default Footer
