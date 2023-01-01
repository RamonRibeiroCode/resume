import { SetStateAction } from "react"

import Icon from "../../ui/Icon"
import { Tech } from "../../../hooks/useProjects"

interface AppliedTagsProps {
  emptyFilters: boolean
  tagsApplied: Tech[]
  setTagsApplied: (value: SetStateAction<Tech[]>) => void
}

function AppliedTags({
  emptyFilters,
  tagsApplied,
  setTagsApplied,
}: AppliedTagsProps) {
  return (
    <span className="text-secondary-gray xl:h-full xl:border-r xl:border-line-gray xl:px-3 xl:flex xl:items-center">
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
