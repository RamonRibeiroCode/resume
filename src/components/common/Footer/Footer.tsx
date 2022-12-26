import Icon from "../../ui/Icon"

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
    <footer className="flex items-center pl-4 h-12 border-t border-line-gray z-10">
      <span className="text-base text-secondary-gray flex-1 xl:flex-none xl:pr-4">
        find me in:
      </span>

      <div className="flex h-full xl:flex-1">
        {socialMedias.map((media, index) => (
          <a
            className={`flex justify-center items-center w-14 border-l border-line-gray ${
              index + 1 === socialMedias.length ? "xl:border-r" : ""
            }`}
            key={media.name}
            href={media.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Link para rede social ${media.name}`}
          >
            <Icon
              className="opacity-40 hover:opacity-100"
              name={media.name}
              width={24}
              height={24}
            />
          </a>
        ))}

        <a
          className="flex justify-center items-center w-14 border-l border-line-gray xl:ml-auto xl:w-auto xl:px-6"
          href="https://github.com/RamonRibeiroCode"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para rede social Github"
        >
          <span className="text-xs text-secondary-gray mr-1">
            @RamonRibeiroCode
          </span>

          <Icon
            className="opacity-40 hover:opacity-100"
            name="Github"
            width={24}
            height={24}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
