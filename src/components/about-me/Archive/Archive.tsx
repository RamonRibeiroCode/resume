import { Dispatch, SetStateAction } from "react"

import type { AboutMeContent } from "../../../hooks/useAboutMe"
import { Archive as ArchiveType } from "../../../__generated__/graphql"
import Icon from "../../ui/Icon"

interface ArchiveProps extends ArchiveType {
  name: string
  setActiveContent: Dispatch<SetStateAction<AboutMeContent>>
  folderName: string
}

function Archive({ setActiveContent, folderName, ...archive }: ArchiveProps) {
  return (
    <li className="mb-2 last:mb-0">
      <button
        className="flex items-center"
        onClick={() => setActiveContent({ folderName: folderName, ...archive })}
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
