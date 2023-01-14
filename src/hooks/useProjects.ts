import { useState, useCallback } from "react"

import { Project, ProjectTag } from "../__generated__/graphql"

function useProjects(projects: Project[]) {
  const [tagsApplied, setTagsApplied] = useState<ProjectTag[]>([])

  const handleApplyFilter = useCallback(
    (tag: ProjectTag) => {
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

  const tags = projects.reduce<ProjectTag[]>((accumulator, currentValue) => {
    currentValue.tags.forEach((tag) => {
      if (!accumulator.includes(tag)) {
        accumulator.push(tag)
      }
    })

    return accumulator
  }, [])

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
