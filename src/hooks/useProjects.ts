import { StaticImageData } from "next/image"
import { useState, useCallback } from "react"

import projectImage1 from "../assets/imgs/projects/project-1.png"
import projectImage2 from "../assets/imgs/projects/project-2.png"
import projectImage3 from "../assets/imgs/projects/project-3.png"

export interface Project {
  name: string
  imageUrl: string | StaticImageData
  description: string
  href: string
  tags: Tech[]
}

export type Tech =
  | "Gatsby"
  | "React"
  | "CSS"
  | "SASS"
  | "NextJs"
  | "Tailwind"
  | "VTEX"

const projects: Project[] = [
  {
    name: "VTEX Community Starter",
    imageUrl: projectImage1,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    href: "",
    tags: ["Gatsby", "SASS"],
  },
  {
    name: "Carrefour Market Store",
    imageUrl: projectImage2,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    href: "",
    tags: ["React", "NextJs", "Tailwind"],
  },
  {
    name: "Carrefour Shopping Store",
    imageUrl: projectImage3,
    description:
      "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
    href: "",
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

function useProjects() {
  const [tagsApplied, setTagsApplied] = useState<Tech[]>([])

  const handleApplyFilter = useCallback(
    (tag: Tech) => {
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

  const filteredProjects = emptyFilters
    ? projects
    : projects.filter((project) => {
        const projectTags = project.tags

        let tagMatch = false

        projectTags.forEach((projectTag) => {
          if (tagsApplied.includes(projectTag)) {
            tagMatch = true
          }
        })

        return tagMatch
      })

  return {
    tags,
    tagsApplied,
    filteredProjects,
    emptyFilters,
    handleApplyFilter,
    setTagsApplied,
  }
}

export default useProjects
