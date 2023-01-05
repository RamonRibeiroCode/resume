import { StaticImageData } from "next/image"
import { useState, useCallback } from "react"

import projectImage1 from "../assets/imgs/projects/project-1.jpg"
import projectImage2 from "../assets/imgs/projects/project-2.jpg"
import projectImage3 from "../assets/imgs/projects/project-3.jpg"

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
      "Project made in a hackathon in 48 hours at a face-to-face event, the website won the competition and is open to developers who want a template to build VTEX stores.",
    href: "https://www.faststore.dev/starters/beauty",
    tags: ["Gatsby", "SASS"],
  },
  {
    name: "Carrefour Market Store",
    imageUrl: projectImage2,
    description:
      "Carrefour e-commerce (largest supermarket in Brazil), where different types of food are sold.",
    href: "https://mercado.carrefour.com.br/",
    tags: ["React", "NextJs", "Tailwind"],
  },
  {
    name: "Carrefour My Account",
    imageUrl: projectImage3,
    description:
      '"My account" on the Carrefour website, where customers can view their orders, request changes and cancellations, and be able to repurchase some items, among other options.',
    href: "https://www.carrefour.com.br/account#/orders",
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
