import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useArgs } from "@storybook/client-api"
import { SetStateAction } from "react"

import AppliedTags from "./AppliedTags"
import { Tech } from "../../../hooks/useProjects"

export default {
  title: "Projects/AppliedTags",
  component: AppliedTags,
  args: {
    emptyFilters: false,
    tagsApplied: ["React", "VTEX"],
  },
} as ComponentMeta<typeof AppliedTags>

const Template: ComponentStory<typeof AppliedTags> = ({ ...args }) => {
  const [{ tagsApplied }, updateArgs] = useArgs()

  const handleSetTagsApplied = (newValue: Tech[]) => {
    updateArgs({ tagsApplied: newValue, emptyFilters: true })
  }

  return (
    <AppliedTags
      {...args}
      tagsApplied={tagsApplied}
      setTagsApplied={
        handleSetTagsApplied as (value: SetStateAction<Tech[]>) => void
      }
    />
  )
}

export const Default = Template.bind({})
