import { SetStateAction } from "react"

import { ProjectTag } from "../../../__generated__/graphql"
import Icon from "../../ui/Icon"

interface AppliedTagsProps {
  emptyFilters: boolean
  tagsApplied: ProjectTag[]
  setTagsApplied: (value: SetStateAction<ProjectTag[]>) => void
}

function AppliedTags({
  emptyFilters,
  tagsApplied,
  setTagsApplied,
}: AppliedTagsProps) {
  return (
    <span className="text-secondary-gray xl:h-full xl:border-r xl:border-line-gray xl:px-4 xl:flex xl:items-center">
      <span className="xl:hidden"> / </span>
      {emptyFilters ? "All" : tagsApplied.join("; ")}

      {!emptyFilters && (
        <button
          className="hidden ml-12 xl:flex"
          onClick={() => setTagsApplied([])}
        >
          <Icon name="MenuClose" width={10} height={10} />
        </button>
      )}
    </span>
  )
}

export default AppliedTags
