import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Folder from "./Folder"
import Accordion from "../../ui/Accordion"

export default {
  title: "About Me/Folder",
  component: Folder,
  args: {
    name: "interests",
    color: "Green",
    archives: [
      {
        folder: "interests",
        name: "flutter",
        content: "",
      },
    ],
  },
} as ComponentMeta<typeof Folder>

const Template: ComponentStory<typeof Folder> = ({ ...args }) => {
  return (
    <Accordion>
      <Folder {...args} />
    </Accordion>
  )
}

export const Default = Template.bind({})
