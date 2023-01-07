import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Checkbox from "./Checkbox"

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    active: { defaultValue: true },
  },
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)
