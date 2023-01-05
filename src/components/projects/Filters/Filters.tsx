import Accordion, { AccordionItem } from "../../ui/Accordion"
import Checkbox from "../../ui/Checkbox"
import Icon from "../../ui/Icon"

import { getIconDimensions } from "../../../helpers/projects"
import { Tech } from "../../../hooks/useProjects"

interface FiltersProps {
  tags: Tech[]
  tagsApplied: Tech[]
  handleApplyFilter: (tag: Tech) => void
}

function Filters({ tags, tagsApplied, handleApplyFilter }: FiltersProps) {
  return (
    <Accordion>
      <AccordionItem id="projects" title="projects">
        <div className="flex flex-col">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center mb-4 last:mb-0">
              <Checkbox
                id={tag}
                active={tagsApplied.includes(tag)}
                onClick={handleApplyFilter}
              />
              <span className="text-secondary-white ml-4 mr-3">{tag}</span>
              <Icon name={tag} {...getIconDimensions(tag)} />
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Filters
