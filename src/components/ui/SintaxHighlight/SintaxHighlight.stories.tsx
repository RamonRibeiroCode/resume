import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import SintaxHighlight from "./SintaxHighlight"

export default {
  title: "UI/SintaxHighlight",
  component: SintaxHighlight,
} as ComponentMeta<typeof SintaxHighlight>

const Template: ComponentStory<typeof SintaxHighlight> = () => {
  return (
    <SintaxHighlight>
      const name = {'"'}Ramon{'"'}
    </SintaxHighlight>
  )
}

export const Default = Template.bind({})
