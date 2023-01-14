import { Dispatch, SetStateAction } from "react"

import type { Archive as IArchive } from "../../../hooks/useAboutMe"
import Icon from "../../ui/Icon"

interface ArchiveProps extends IArchive {
  name: string
  setActiveArchive: Dispatch<SetStateAction<IArchive>>
}

function Archive({ setActiveArchive, ...archive }: ArchiveProps) {
  return (
    <li className="mb-2 last:mb-0">
      <button
        className="flex items-center"
        onClick={() => setActiveArchive(archive)}
      >
        <Icon name="Markdown" width={17} height={15} />

        <span className="text-sm text-secondary-gray ml-2 hover:text-secondary-white">
          {archive.name}
        </span>
      </button>
    </li>
  )
}

export default Archive
