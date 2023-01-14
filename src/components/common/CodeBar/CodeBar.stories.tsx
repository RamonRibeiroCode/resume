import { ComponentStory, ComponentMeta } from "@storybook/react"

import CodeBar from "./CodeBar"

export default {
  title: "Common/CodeBar",
  component: CodeBar,
} as ComponentMeta<typeof CodeBar>

const Template: ComponentStory<typeof CodeBar> = () => {
  return (
    <div className="flex h-96">
      <CodeBar />
    </div>
  )
}

export const Default = Template.bind({})
