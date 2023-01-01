import LabelPage from "../components/common/LabelPage"
import SideBar from "../components/common/SideBar"
import CodeBar from "../components/common/CodeBar"

import useProjects from "../hooks/useProjects"
import Project from "../components/projects/Project"
import AppliedTags from "../components/projects/AppliedTags"
import Filters from "../components/projects/Filters"

function Projects() {
  const {
    tags,
    tagsApplied,
    filteredProjects,
    emptyFilters,
    handleApplyFilter,
    setTagsApplied,
  } = useProjects()

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
          <ul className="flex-1 grid mt-4 p-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Project
                key={project.name}
                name={project.name}
                position={index + 1}
                description={project.description}
                href={project.href}
                imageUrl={project.imageUrl}
              />
            ))}
          </ul>

          <CodeBar />
        </div>
      </div>
    </div>
  )
}

export default Projects
