import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Spinner from "./Spinner"

export default {
  title: "UI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = () => {
  return <Spinner />
}

export const Default = Template.bind({})
