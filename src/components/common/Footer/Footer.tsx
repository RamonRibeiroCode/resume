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
  {
    name: "Github",
    href: "https://github.com/RamonRibeiroCode",
  },
]

function Footer() {
  return (
    <footer className="flex justify-between items-center pl-4 h-12 border-t border-line-gray">
      <span className="text-base text-secondary-gray">find me in:</span>

      <div className="flex h-full">
        {socialMedias.map((media) => (
          <a
            key={media.name}
            target="_blank"
            className="flex justify-center items-center w-14 border-l border-line-gray"
            href={media.href}
            rel="noreferrer"
          >
            <Icon
              className="opacity-40 hover:opacity-100"
              name={media.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
