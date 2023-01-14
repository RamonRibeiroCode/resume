import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Archive from "./Archive"

export default {
  title: "About Me/Archive",
  component: Archive,
  args: {
    folder: "bio",
    name: "me",
    content: "About me\nI have 5 years of experience in web development",
  },
} as ComponentMeta<typeof Archive>

const Template: ComponentStory<typeof Archive> = ({ ...args }) => {
  return <Archive {...args} />
}

export const Default = Template.bind({})
