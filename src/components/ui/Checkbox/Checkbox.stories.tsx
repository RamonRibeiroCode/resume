import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useArgs } from "@storybook/client-api"

import Checkbox from "./Checkbox"

export default {
  title: "UI/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => {
  const [{ active }, updateArgs] = useArgs()

  return (
    <div className="w-[18px]">
      <Checkbox {...args} onClick={() => updateArgs({ active: !active })} />
    </div>
  )
}

export const Default = Template.bind({})
