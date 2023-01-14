import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useArgs } from "@storybook/client-api"

import useProjects, { Tech } from "../../../hooks/useProjects"
import Filters from "./Filters"

export default {
  title: "Projects/Filters",
  component: Filters,
  args: {
    tagsApplied: ["NextJs", "SASS"],
  },
} as ComponentMeta<typeof Filters>

const Template: ComponentStory<typeof Filters> = ({ ...args }) => {
  const [{ tagsApplied }, updateArgs] = useArgs()
  const { tags } = useProjects()

  const handleApplyFilter = (tag: Tech) => {
    if (tagsApplied.includes(tag)) {
      const filteredtags = tagsApplied.filter(
        (prevTag: Tech) => prevTag !== tag
      )

      return updateArgs({ tagsApplied: filteredtags })
    }

    updateArgs({ tagsApplied: [...tagsApplied, tag] })
  }

  return <Filters {...args} tags={tags} handleApplyFilter={handleApplyFilter} />
}

export const Default = Template.bind({})
