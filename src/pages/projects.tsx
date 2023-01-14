import { GetStaticProps } from "next"
import { gql } from "@apollo/client"

import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import CodeBar from "../components/common/CodeBar"
import Project from "../components/projects/Project"
import AppliedTags from "../components/projects/AppliedTags"
import Filters from "../components/projects/Filters"

import { Project as ProjectType } from "../__generated__/graphql"
import useProjects from "../hooks/useProjects"
import { client } from "../lib/apollo"

interface ProjectsProps {
  projects: ProjectType[]
}

function Projects({ projects }: ProjectsProps) {
  const {
    tags,
    tagsApplied,
    filteredProjects,
    emptyFilters,
    handleApplyFilter,
    setTagsApplied,
  } = useProjects(projects)

  return (
    <div className="flex flex-col flex-1 xl:flex-row">
      <SideBar>
        <LabelPage title="_projects" />

        <Filters
          tags={tags}
          tagsApplied={tagsApplied}
          handleApplyFilter={handleApplyFilter}
        />
      </SideBar>

      <div className="flex-1 xl:border-l xl:border-line-gray">
        <div className="p-4 pb-0 xl:h-[41px] xl:border-b xl:border-line-gray xl:p-0 xl:flex xl:items-center">
          <span className="text-secondary-white xl:hidden">
            {"//"} projects{" "}
          </span>
          <AppliedTags
            emptyFilters={emptyFilters}
            setTagsApplied={setTagsApplied}
            tagsApplied={tagsApplied}
          />
        </div>

        <div className="flex h-[calc(100%_-_41px)]">
          <ul className="flex-1 grid mt-4 p-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:max-w-7xl xl:mx-auto xl:mt-8">
            {filteredProjects.map((project, index) => (
              <Project
                key={project.name}
                position={index + 1}
                name={project.name}
                description={project.description}
                href={project.href}
                imageUrl={project.image.url}
              />
            ))}
          </ul>

          <CodeBar />
        </div>
      </div>
    </div>
  )
}

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      name
      href
      description
      tags
      image {
        url
      }
    }
  }
`

interface PageQuery {
  projects: ProjectType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query<PageQuery>({
    query: GET_PROJECTS,
  })

  const queries = response.data

  return {
    props: {
      ...queries,
    },
  }
}

export default Projects
