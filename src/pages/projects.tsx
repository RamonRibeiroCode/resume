import Accordion, { AccordionItem } from "../components/ui/Accordion"
import LabelPage from "../components/ui/LabelPage"
import SideBar from "../components/ui/SideBar"
import Checkbox from "../components/ui/Checkbox"

import projectImage1 from "../assets/imgs/projects/project-1.png"
import projectImage2 from "../assets/imgs/projects/project-2.png"
import projectImage3 from "../assets/imgs/projects/project-3.png"
import { useCallback, useState } from "react"
import Icon from "../components/ui/Icon"
import { StaticImageData } from "next/image"

interface Project {
  name: string
  imageUrl: string | StaticImageData
  description: string
  tags: Tech[]
}

type Tech = "Gatsby" | "React" | "CSS" | "SASS" | "NextJs" | "Tailwind" | "VTEX"

const projects: Project[] = [
  {
    name: "VTEX Community Starter",
    imageUrl: projectImage1,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    tags: ["Gatsby", "SASS"],
  },
  {
    name: "Carrefour Market Store",
    imageUrl: projectImage2,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    tags: ["React", "NextJs", "Tailwind"],
  },
  {
    name: "Carrefour Shopping Store",
    imageUrl: projectImage3,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    tags: ["React", "VTEX", "CSS"],
  },
]

const tags = projects.reduce<Tech[]>((accumulator, currentValue) => {
  currentValue.tags.forEach((tag) => {
    if (!accumulator.includes(tag)) {
      accumulator.push(tag)
    }
  })

  return accumulator
}, [])

const getIconDimensions = (name: Tech) => {
  switch (name) {
    case "Gatsby":
      return { width: 21, height: 20 }
    case "React":
      return { width: 22, height: 20 }
    case "CSS":
      return { width: 21, height: 18 }
    case "Tailwind":
      return { width: 20, height: 12 }
    case "VTEX":
      return { width: 21, height: 18 }
    default:
      return { width: 20, height: 20 }
  }
}

function Projects() {
  const [tagsApplied, setTagsApplied] = useState<string[]>([])

  const handleApplyFilter = useCallback(
    (tag: string) => {
      if (tagsApplied.includes(tag)) {
        return setTagsApplied((prevTagsApplied) =>
          prevTagsApplied.filter((prevTag) => prevTag !== tag)
        )
      }

      setTagsApplied((prevTagsApplied) => [...prevTagsApplied, tag])
    },
    [tagsApplied]
  )

  const emptyFilters = tagsApplied.length === 0

  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_projects" />

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
      </SideBar>

      <div className="p-4">
        <div>
          <span className="text-secondary-white">{"//"} projects</span>{" "}
          <span className="text-secondary-gray">
            / {emptyFilters ? "All" : tagsApplied.join("; ")}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects
