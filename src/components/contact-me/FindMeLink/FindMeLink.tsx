import Icon from "../../ui/Icon"

interface FindMeLinkProps {
  title: string
  href: string
}

function FindMeLink({ title, href }: FindMeLinkProps) {
  return (
    <a
      className="flex items-center cursor-pointer mb-3 last:mb-0"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="Redirect" width={16} height={17} />

      <span className="text-sm text-secondary-gray ml-2 hover:text-secondary-white">
        {title}
      </span>
    </a>
  )
}

export default FindMeLink
