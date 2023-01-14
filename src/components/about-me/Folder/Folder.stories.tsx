import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Folder as FolderType } from "../../../__generated__/graphql"
import Accordion from "../../ui/Accordion"
import Folder from "./Folder"

const FolderExample = {
  name: "interests",
  color: "Green",
  archives: [
    {
      folder: "interests",
      name: "flutter",
      content: "",
    },
  ],
} as unknown as FolderType

export default {
  title: "About Me/Folder",
  component: Folder,
  args: FolderExample,
} as ComponentMeta<typeof Folder>

const Template: ComponentStory<typeof Folder> = ({ ...args }) => {
  return (
    <Accordion>
      <Folder {...args} />
    </Accordion>
  )
}

export const Default = Template.bind({})
