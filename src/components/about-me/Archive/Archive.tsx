import Icon from "../../ui/Icon"

interface ArchiveProps {
  name: string
}

function Archive({ name }: ArchiveProps) {
  return (
    <li className="flex items-center mb-2 cursor-pointer last:mb-0 ">
      <Icon name="Markdown" width={17} height={15} />
      <span className="text-sm text-secondary-gray ml-2 hover:text-secondary-white">
        {name}
      </span>
    </li>
  )
}

export default Archive
