import { ComponentStory, ComponentMeta } from "@storybook/react"

import LabelPage from "./LabelPage"

export default {
  title: "Common/LabelPage",
  component: LabelPage,
  args: {
    title: "_hello",
  },
} as ComponentMeta<typeof LabelPage>

const Template: ComponentStory<typeof LabelPage> = ({ ...args }) => {
  return <LabelPage {...args} />
}

export const Default = Template.bind({})
