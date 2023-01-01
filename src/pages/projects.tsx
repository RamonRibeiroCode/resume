import Accordion, { AccordionItem } from "../components/ui/Accordion"
import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import Checkbox from "../components/ui/Checkbox"

import projectImage1 from "../assets/imgs/projects/project-1.png"
import projectImage2 from "../assets/imgs/projects/project-2.png"
import projectImage3 from "../assets/imgs/projects/project-3.png"
import { useCallback, useState } from "react"
import Icon from "../components/ui/Icon"
import Image, { StaticImageData } from "next/image"
import CodeBar from "../components/common/CodeBar"

interface Project {
  name: string
  imageUrl: string | StaticImageData
  description: string
  href: string
  tags: Tech[]
}

type Tech = "Gatsby" | "React" | "CSS" | "SASS" | "NextJs" | "Tailwind" | "VTEX"

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
  const [tagsApplied, setTagsApplied] = useState<Tech[]>(["Gatsby"])

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

  const filteredProjects = projects.filter((project) => {
    const projectTags = project.tags

    let tagMatch = false

    projectTags.forEach((projectTag) => {
      if (tagsApplied.includes(projectTag)) {
        tagMatch = true
      }
    })

    return tagMatch
  })

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

      <div className="flex-1 xl:border-l xl:border-line-gray">
        <div className="p-4 pb-0 xl:h-[41px] xl:border-b xl:border-line-gray xl:p-0 xl:flex xl:items-center">
          <span className="text-secondary-white xl:hidden">
            {"//"} projects
          </span>{" "}
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
        </div>

        <div className="flex h-[calc(100%_-_41px)]">
          <ul className="flex-1 grid mt-4 p-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <li className="mb-5" key={project.name}>
                <div className="mb-4">
                  <span className="font-bold text-primary-blue-code">
                    Project {index + 1}
                  </span>
                  <span className="text-secondary-gray"> / {project.name}</span>
                </div>

                <article className="border border-secondary-gray rounded-2xl overflow-hidden">
                  <a href={project.href}>
                    <Image className="w-full" src={project.imageUrl} alt="" />
                    <div className="p-6">
                      <p className="text-secondary-gray">
                        {project.description}
                      </p>

                      <span className="block w-fit text-sm py-[10px] px-[14px] bg-secondary-light-gray rounded-lg mt-6 text-secondary-white hover:bg-accent-orange hover:text-primary-black">
                        view-project
                      </span>
                    </div>
                  </a>
                </article>
              </li>
            ))}
          </ul>

          <CodeBar />
        </div>
      </div>
    </div>
  )
}

export default Projects
